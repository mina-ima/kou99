// Function to generate a placeholder SVG as a Base64 data URL

// A robust, modern method for UTF-8 safe Base64 encoding that works
// in both browser and Vercel Edge Function environments without deprecated functions.
const utf8_to_b64 = (str: string): string => {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        (match, p1) => String.fromCharCode(parseInt(p1, 16))
    ));
}

const createSvgDataUrl = (name: string, color: string, textColor: string = 'white'): string => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="280" height="180" viewBox="0 0 280 180"><rect width="100%" height="100%" fill="${color}" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="'M PLUS Rounded 1c', sans-serif" font-size="20" fill="${textColor}" font-weight="bold">${name}</text></svg>`;
    
    const base64 = utf8_to_b64(svg);
    return `data:image/svg+xml;base64,${base64}`;
};

export const TRAIN_DATA = [
    {
        id: 1,
        name: 'N700S系新幹線',
        line: '東海道・山陽新幹線',
        description: '最高の新幹線！地震の時も安全に止まれるすごい技術と、快適な座席が特徴。出張や旅行で大活躍！',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Series-N700S-J2.jpg/960px-Series-N700S-J2.jpg'
    },
    {
        id: 2,
        name: 'E5系新幹線はやぶさ',
        line: '東北・北海道新幹線',
        description: '鮮やかな緑色がかっこいい新幹線。日本最速の時速320kmで走り、北海道まであっという間に連れて行ってくれる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Series-E5-U15_Yamabiko-50.jpg/960px-Series-E5-U15_Yamabiko-50.jpg'
    },
    {
        id: 3,
        name: 'ドクターイエロー',
        line: '東海道・山陽新幹線',
        description: '見ると幸せになれると噂の黄色い新幹線。線路や電気の設備を点検しながら走る、新幹線のお医者さん。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Type923-T4.jpg/960px-Type923-T4.jpg'
    },
    {
        id: 4,
        name: 'E235系山手線',
        line: '山手線',
        description: '東京の都心をぐるぐる回るうぐいす色の電車。最新の技術がいっぱいで、乗り心地も快適なんだ。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Series-E235-0_9.jpg/960px-Series-E235-0_9.jpg'
    },
    {
        id: 5,
        name: '阪急1000系',
        line: '阪急電鉄',
        description: '高級感のあるマルーン色が特徴の、関西を走るおしゃれな電車。静かで乗り心地が良く、みんなに愛されている。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Hankyu-Series1000-1110.jpg/960px-Hankyu-Series1000-1110.jpg'
    },
    {
        id: 6,
        name: '近鉄ひのとり',
        line: '近鉄（大阪 - 名古屋）',
        description: '炎のような真っ赤なボディが目印の特急列車。座席は広々としていて、まるで飛行機のプレミアムクラスみたい！',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Kintetsu_80000_Series_between_Kasumigaura_and_Kintetsu-Tomida.jpg/960px-Kintetsu_80000_Series_between_Kasumigaura_and_Kintetsu-Tomida.jpg'
    },
    {
        id: 7,
        name: '小田急ロマンスカーGSE',
        line: '小田急線（新宿 - 箱根）',
        description: '大きな窓から景色が楽しめる展望席が大人気の特急。バラ色のボディで箱根の温泉旅行を盛り上げる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Odakyu_Romancecar_SE_3000_series_and_GSE_70000_series_Ebina_depot_20190526.jpg/960px-Odakyu_Romancecar_SE_3000_series_and_GSE_70000_series_Ebina_depot_20190526.jpg'
    },
    {
        id: 8,
        name: '南海ラピート',
        line: '南海電鉄（難波 - 関西空港）',
        description: '未来的でユニークなデザインが特徴。鉄人28号みたいな顔で、関西国際空港へと力強く走る特急列車。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Nankai_50000_series_50002F.jpg/960px-Nankai_50000_series_50002F.jpg'
    },
    {
        id: 9,
        name: '京急2100形',
        line: '京急本線',
        description: '歌う電車として有名！発車する時にドレミファソラシド♪と音が鳴る。赤い車体でビュンビュン走るよ。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Keikyu-Type2100-73.jpg/960px-Keikyu-Type2100-73.jpg'
    },
    {
        id: 10,
        name: '西武Laview',
        line: '西武池袋線・秩父線',
        description: '大きな窓がリビングみたいで、景色がよく見える新しい特急。黄色い座席もかわいくて、秩父への旅行が楽しくなる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Seibu_Series001_Chichibu-20.jpg/960px-Seibu_Series001_Chichibu-20.jpg'
    },
    {
        id: 11,
        name: '東武スペーシアX',
        line: '東武日光線',
        description: 'カフェや個室もあって、まるで走るホテルのよう！日光や鬼怒川への特別な旅を演出してくれる豪華な特急。',
        imageDataUrl: 'https://www.tobu.co.jp/spaciax/assets/img/index/guide_photo_01.jpg'
    },
    {
        id: 12,
        name: 'サンライズ出雲・瀬戸',
        line: '寝台特급',
        description: '日本で唯一毎日走っている寝台列車。ベッドで眠りながら、東京から四国や山陰へ旅することができる。',
        imageDataUrl: 'https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG9sNcfXjP4zdH5sjytWVyyzMko2lRFWFNsvktzMNrvGHqZBjHL2k8dNyJYjn8fzPbMuImU5Xbny1MqM23ArEjVFwpQkxTEwk2Buq-d72N8soIf5jK28M5fuWB4Koxul17ezPMJtkQ1PNr5iBTdT7-EX1_BLuYRSY1T0s90V8EilzBrWOC1eCNbqFQB1797IlJgsHvTFRndfblrBt_Pzt548QiiVXvDtfRLGDrYGK6Wfc38RGk8zFmxX-jYjqe9mKn5b6pTchCQWorSbFBzbVxGWEIwwBFPXRcHYaVPvfo0OQ/kiji0309_01.jpg?errorImage=false'
    },
    {
        id: 13,
        name: 'サフィール踊り子',
        line: '東海道本線・伊東線など',
        description: '全席グリーン車以上で、窓から海の景色を楽しめる豪華な特急。おいしいラーメンが食べられるカフェもあるんだ。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Series-E257-NA11_Odoriko.jpg/960px-Series-E257-NA11_Odoriko.jpg'
    },
    {
        id: 14,
        name: '近鉄しまかぜ',
        line: '近鉄（伊勢志摩方面）',
        description: '伊勢志摩へ向かうリゾート特急。マッサージ機能付きの革張りシートや、カフェ車両でのんびりできる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/KINTETSU50000_20140121A.jpg/960px-KINTETSU50000_20140121A.jpg'
    },
    {
        id: 15,
        name: 'ゆふいんの森',
        line: 'JR九州 久大本線',
        description: '森の中を走る高原リゾート列車。木のぬくもりあふれる車内で、美しい景色とおいしいスイーツが楽しめる。',
        imageDataUrl: 'https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG59USVfzH-OBu6LxM3TEFgvtLIhGYEyaUscdAzmL02LTiiObjyboxYW9EdHN0VZNIWcH3MxKa-uB_Heb8thtHn8EZqKp50nxlUyd5wgxuO84LGycG5rsC4Qf5v-3XKvkGFHcHCAi8HGIXREIlvbE1TdVZ8V1ROHlSdGO--cRmUOQjXKlX8uQ4i2FKgctYJaBRhjtQfySSc7HS_z6C1TGna34=/kiji1Img.jpg?errorImage=false'
    },
    {
        id: 16,
        name: 'WEST EXPRESS 銀河',
        line: 'JR西日本',
        description: '様々な目的地へ旅をする、新しいタイプの長距離列車。座席や個室の種類が豊富で、自分だけの旅が作れる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/JR-WEST_117_series_%22WEST_EXPRESS_GINGA%22_at_JR-Sojiji.jpg/960px-JR-WEST_117_series_%22WEST_EXPRESS_GINGA%22_at_JR-Sojiji.jpg'
    },
    {
        id: 17,
        name: 'POKÉMON with YOUトレイン',
        line: 'JR東日本 大船渡線',
        description: 'ピカチュウがいっぱいの楽しい列車！プレイルームもあって、親子でポケモンと遊びながら旅ができるよ。',
        imageDataUrl: 'https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG_Arm9tnYFc1-v9veXxn_P_SkCFjagHLCrlmj7X1K9ZfKlKFTHlmIO0LAYIh6YZuCsMHKYR_aQbF_2bjR1jsWW5nIia8Ht6c_D1cn-pkasjUIaKzyR885m7vcZTJhFU0Pq7b0BnTdLCbzPjAtE2nF7gNmHJv2cf0zgWS172JaTmFfq3ZkviQ5He3fo6cz_NzXdhy7rOIuXJrZEjXmQyy6AI0vL5tf8blqfE55-kWUADyREpqXPV3Qvvm1B8FyOJmw3vfws1fWHA5Bgh25rgjmQD1gM4HpzZr4eq_7h8pzvWy/kv_slide_0003ph.jpg'
    },
    {
        id: 18,
        name: 'あをによし',
        line: '近鉄（大阪・京都 - 奈良）',
        description: '奈良の都をイメージした紫色の美しい観光特急。正倉院の宝物をモチーフにした内装がとっても豪華。',
        imageDataUrl: 'https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG9ip9WjEFdjK6ejN8iiB5-KIn844EtQzn6NG7IvsettuMJKnXskmrnmcPA3TjKKDtz0SWjRbjmS8s429uP2PAfxT9IYTihNFldNsafAjn0g_3IyKWHFT3hXQvMyr-wu8lhh-0EOmmvDgIjBalQ6CQltxcL9R0AUXDWPya9FlTy2_PfAhNlyI4elX-mFg6BXuXORJotASqXdvY0GBtcj5RGo=/202101.jpg?errorImage=false'
    },
    {
        id: 19,
        name: '伊予灘ものがたり',
        line: 'JR四国 予讃線',
        description: '愛媛の美しい伊予灘の海沿いを走る観光列車。夕日をイメージした茜色と黄金色の車体がロマンチック。',
        imageDataUrl: 'https://msp.c.yimg.jp/images/v2/tpvPBYOX1wpNVI1UoNSgEmIQiDwlOiicgeOHbCOwOSvLZpJiZoNGrWl4V6BGqdzN1g3x10n9-Tp8u7GgEgMxlHcrzz-W-zld6glFgrSPjoh6EcA0ORDwUTRAftPcmmOJawqdMfV4tCGOuBDbxlZu0E8lsUUyhIIZqvDexyu4ZVQ9ukVlGs8qYbyMvc8bnly4FA2HsjTZYRVJtAa1A9IFIDpATdVsa6QKOReGl5-OiQ3-UEOnj4r8sWB8owClF23s4yXmYv0lghCy_FKxdmc_w2Zun1gZVuJAJjWZE9xmRZHgXYCEWQQYOgJt981PLd3bWTWAE-feXe6NhoLmUwB3T6m1ThoZnctQEOKF5mUL0UJ8FXZ8jryZu5FD-ouKlNco/1200?errorImage=false'
    },
    {
        id: 20,
        name: 'SLやまぐち号',
        line: 'JR西日本 山口線',
        description: '力強い蒸気と大きな汽笛が迫力満点の蒸気機関車。レトロな客車に揺られて、タイムスリップ気分を味わえる。',
        imageDataUrl: 'https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG99FYHZn-8OA-mR7gavTk04vu6bojj6cYs0oeXqcS151dg8q0HsHfg7EYghSgx5jU94bS1oPhzTBqrBAKN4Acw-IvQ40VZXtLFEq9XD6zUX2L8GkNUUi9-xYjYGiLrqLNIQjDAEU9dFwdhpU-9-jQ5A=/c571_main.jpg?errorImage=false'
    },
    {
        id: 21,
        name: 'ろくもん',
        line: 'しなの鉄道',
        description: '真田家の家紋「六文銭」が名前の由来。長野の美味しい食材を使った料理を、美しい景色と共に楽しめる。',
        imageDataUrl: 'https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqGx5cm8knTLo61O84kVTxOan841a30-aIJSoqkmlQNsP4-Qv0KVqX9M9vYFUiwJk7TSg3Rsflo5-4bVaa4Z8ZGmv1Z32hZjyGn1bisbP5iqmgS-wU7KZJ-SHTqDHfxlGOsCCB-F5PdVm9BBdSVKnteifvNU9O4tFLFi2gQ40j2xoyXeDCpWWWeDMN6c6SDMKk-ZMdFamij6zlLNnSG1Pso98YIlBfEnkxllRF1Ra1lL7n0f_fgoQ3DD8sR0dmlE4tU7f89FaNrb7dkhFvbQudLo4=/Shinano_Railway_Series_115_Rokumon.jpg?errorImage=false'
    },
    {
        id: 22,
        name: '36ぷらす3',
        line: 'JR九州（九州全域）',
        description: '九州7県を5つのルートで巡る特別な列車。世界で36番目に大きい島・九州で、乗客に感謝を届ける旅をする。',
        imageDataUrl: 'https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqGx5cm8knTLo61O84kVTxOan841a30-aIJSoqkmlQNsP4-Qv0KVqX9M9vYFUiwJk7TRChFTX8tDzqdzsA6YfQSP2D_TQlUKmxQ7lkAKZn8Zj87M8wm2RDU82vmIFN1Pv4RYVsWppXN31FUKYPTlY68-0UMdFe7X7o07KLkKqviYPiGk7Z1olRbzJnj0EY3vHGYyE_B9UeLpCxwdwnwIpM1dH2lPMFkpDzM8e2yC--66ohXJtBQ3UBCDVwqb3LbWwsRfCSaARMdpyJi9upBXdLLtY=/36plus3_oita_station.jpg?errorImage=false'
    },
    {
        id: 23,
        name: 'HC85系ひだ・南紀',
        line: 'JR東海 高山本線・紀勢本線',
        description: 'エンジンで発電した電気で走る、新しいハイブリッド特急。静かで環境にやさしく、乗り心地も抜群！',
        imageDataUrl: 'https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG4lm3aLU4M-rOnrluqub0VkTtyp3Q_J9sY42nVZDTbF1fRYxXxQ95Rt4Rp7ZMi4PgHdF0YL0tXZFM7E6dcgzACz1s9R_elN424dBHtTui2SkdlQtqA_mNRMgRRwIuCBsR4IK82O0KcjKNDeitYEQxW9-sdbuzxN4RY9bUJfTnpyt/960.jpg?errorImage=false'
    }
];