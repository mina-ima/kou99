import { TRAIN_DATA } from '../train-data';

// Vercel Edge Functionとして動作させるための設定
export const config = {
  runtime: 'edge',
};

// GETリクエストを処理するハンドラ関数
export default async function handler(req: Request) {
  // GETメソッド以外は許可しない
  if (req.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // 実際のアプリケーションでは、ここでデータベースから最新の電車リストを取得します。
    // このデモでは、`train-data.ts`をサーバー側の最新データソースと見なして返します。
    const trainList = TRAIN_DATA.map(train => ({
      id: train.id,
      name: train.name,
      line: train.line,
      description: train.description,
      imageDataUrl: train.imageDataUrl // プレースホルダー画像URLも渡す
    }));

    return new Response(JSON.stringify(trainList), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error fetching train list:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch train list' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
