// Vercel Edge Functionとして動作させるための設定
export const config = {
  runtime: 'edge',
};

import { GoogleGenAI, Type, Modality } from "@google/genai";

// POSTリクエストを処理するハンドラ関数
export default async function handler(req: Request) {
  // POSTメソッド以外は許可しない
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { trainName } = await req.json();

    if (!trainName) {
      return new Response(JSON.stringify({ error: 'trainName is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // APIキーの存在チェック
    if (!process.env.API_KEY) {
        return new Response(JSON.stringify({ error: 'APIキーがサーバーに設定されていません。' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    // 1. Generate Text Data
    const textResponsePromise = ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `日本の電車「${trainName}」について、以下の情報をJSON形式で教えてください。走行路線は'line'、車両の特徴は'description'として、子供にも分かりやすい50字程度の簡単な言葉で説明してください。`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            line: { type: Type.STRING, description: '走行路線' },
            description: { type: Type.STRING, description: '車両の特徴' }
          },
          required: ['line', 'description'],
        },
      },
    });

    // 2. Generate Image
    const imageResponsePromise = ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: `日本の電車「${trainName}」の鮮明でリアルな写真。横からの視点で、晴れた日の駅のホームに停車している様子。背景は少しぼかす。` }],
      },
      config: {
        responseModalities: [Modality.IMAGE],
      },
    });
    
    const [textResponse, imageResponse] = await Promise.all([textResponsePromise, imageResponsePromise]);

    const { line, description } = JSON.parse(textResponse.text);

    let imageUrl = '';
    for (const part of imageResponse.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64ImageBytes: string = part.inlineData.data;
        imageUrl = `data:image/png;base64,${base64ImageBytes}`;
      }
    }
    
    if (!imageUrl) {
        throw new Error('Image generation failed.');
    }

    // 成功レスポンスを返す
    return new Response(JSON.stringify({ line, description, imageUrl }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error generating train card:', error);
    // エラーレスポンスを返す
    return new Response(JSON.stringify({ error: 'カードの生成に失敗しました。', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
