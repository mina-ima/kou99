// Function to generate a placeholder SVG as a Base64 data URL
const createSvgDataUrl = (name: string, color: string, textColor: string = 'white'): string => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="280" height="180" viewBox="0 0 280 180"><rect width="100%" height="100%" fill="${color}" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="'M PLUS Rounded 1c', sans-serif" font-size="20" fill="${textColor}" font-weight="bold">${name}</text></svg>`;
    // Correctly encode the SVG string to handle UTF-8 characters before Base64 encoding.
    return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
};

export const TRAIN_DATA = [
    {
        id: 1,
        name: 'N700S系新幹線',
        line: '東海道・山陽新幹線',
        description: '最高の新幹線！地震の時も安全に止まれるすごい技術と、快適な座席が特徴。出張や旅行で大活躍！',
        imageDataUrl: createSvgDataUrl('N700S系新幹線', '#0033a0')
    },
    {
        id: 2,
        name: 'E5系新幹線はやぶさ',
        line: '東北・北海道新幹線',
        description: '鮮やかな緑色がかっこいい新幹線。日本最速の時速320kmで走り、北海道まであっという間に連れて行ってくれる。',
        imageDataUrl: createSvgDataUrl('E5系新幹線はやぶさ', '#008b8b')
    },
    {
        id: 3,
        name: 'ドクターイエロー',
        line: '東海道・山陽新幹線',
        description: '見ると幸せになれると噂の黄色い新幹線。線路や電気の設備を点検しながら走る、新幹線のお医者さん。',
        imageDataUrl: createSvgDataUrl('ドクターイエロー', '#ffd700', 'black')
    },
    {
        id: 4,
        name: 'E235系山手線',
        line: '山手線',
        description: '東京の都心をぐるぐる回るうぐいす色の電車。最新の技術がいっぱいで、乗り心地も快適なんだ。',
        imageDataUrl: createSvgDataUrl('E235系山手線', '#9acd32', 'black')
    },
    {
        id: 5,
        name: '阪急1000系',
        line: '阪急電鉄',
        description: '高級感のあるマルーン色が特徴の、関西を走るおしゃれな電車。静かで乗り心地が良く、みんなに愛されている。',
        imageDataUrl: createSvgDataUrl('阪急1000系', '#800000')
    },
    {
        id: 6,
        name: '近鉄ひのとり',
        line: '近鉄（大阪 - 名古屋）',
        description: '炎のような真っ赤なボディが目印の特急列車。座席は広々としていて、まるで飛行機のプレミアムクラスみたい！',
        imageDataUrl: createSvgDataUrl('近鉄ひのとり', '#b22222')
    },
    {
        id: 7,
        name: '小田急ロマンスカーGSE',
        line: '小田急線（新宿 - 箱根）',
        description: '大きな窓から景色が楽しめる展望席が大人気の特急。バラ色のボディで箱根の温泉旅行を盛り上げる。',
        imageDataUrl: createSvgDataUrl('小田急ロマンスカーGSE', '#dd2c00')
    },
    {
        id: 8,
        name: '南海ラピート',
        line: '南海電鉄（難波 - 関西空港）',
        description: '未来的でユニークなデザインが特徴。鉄人28号みたいな顔で、関西国際空港へと力強く走る特急列車。',
        imageDataUrl: createSvgDataUrl('南海ラピート', '#000080')
    },
    {
        id: 9,
        name: '京急2100形',
        line: '京急本線',
        description: '歌う電車として有名！発車する時にドレミファソラシド♪と音が鳴る。赤い車体でビュンビュン走るよ。',
        imageDataUrl: createSvgDataUrl('京急2100形', '#ff0000')
    },
    {
        id: 10,
        name: '西武Laview',
        line: '西武池袋線・秩父線',
        description: '大きな窓がリビングみたいで、景色がよく見える新しい特急。黄色い座席もかわいくて、秩父への旅行が楽しくなる。',
        imageDataUrl: createSvgDataUrl('西武Laview', '#c0c0c0', 'black')
    },
    {
        id: 11,
        name: '東武スペーシアX',
        line: '東武日光線',
        description: 'カフェや個室もあって、まるで走るホテルのよう！日光や鬼怒川への特別な旅を演出してくれる豪華な特急。',
        imageDataUrl: createSvgDataUrl('東武スペーシアX', '#f5f5f5', 'black')
    },
    {
        id: 12,
        name: 'サンライズ出雲・瀬戸',
        line: '寝台特急',
        description: '日本で唯一毎日走っている寝台列車。ベッドで眠りながら、東京から四国や山陰へ旅することができる。',
        imageDataUrl: createSvgDataUrl('サンライズ出雲・瀬戸', '#e4007f')
    },
    {
        id: 13,
        name: 'サフィール踊り子',
        line: '東海道本線・伊東線など',
        description: '全席グリーン車以上で、窓から海の景色を楽しめる豪華な特急。おいしいラーメンが食べられるカフェもあるんだ。',
        imageDataUrl: createSvgDataUrl('サフィール踊り子', '#0f3a65')
    },
    {
        id: 14,
        name: '近鉄しまかぜ',
        line: '近鉄（伊勢志摩方面）',
        description: '伊勢志摩へ向かうリゾート特急。マッサージ機能付きの革張りシートや、カフェ車両でのんびりできる。',
        imageDataUrl: createSvgDataUrl('近鉄しまかぜ', '#00a0e9')
    },
    {
        id: 15,
        name: 'ゆふいんの森',
        line: 'JR九州 久大本線',
        description: '森の中を走る高原リゾート列車。木のぬくもりあふれる車内で、美しい景色とおいしいスイーツが楽しめる。',
        imageDataUrl: createSvgDataUrl('ゆふいんの森', '#228b22')
    },
    {
        id: 16,
        name: 'WEST EXPRESS 銀河',
        line: 'JR西日本',
        description: '様々な目的地へ旅をする、新しいタイプの長距離列車。座席や個室の種類が豊富で、自分だけの旅が作れる。',
        imageDataUrl: createSvgDataUrl('WEST EXPRESS 銀河', '#00008b')
    },
    {
        id: 17,
        name: 'POKÉMON with YOUトレイン',
        line: 'JR東日本 大船渡線',
        description: 'ピカチュウがいっぱいの楽しい列車！プレイルームもあって、親子でポケモンと遊びながら旅ができるよ。',
        imageDataUrl: createSvgDataUrl('POKÉMON with YOUトレイン', '#ffcb05', 'black')
    },
    {
        id: 18,
        name: 'あをによし',
        line: '近鉄（大阪・京都 - 奈良）',
        description: '奈良の都をイメージした紫色の美しい観光特急。正倉院の宝物をモチーフにした内装がとっても豪華。',
        imageDataUrl: createSvgDataUrl('あをによし', '#483d8b')
    },
    {
        id: 19,
        name: '伊予灘ものがたり',
        line: 'JR四国 予讃線',
        description: '愛媛の美しい伊予灘の海沿いを走る観光列車。夕日をイメージした茜色と黄金色の車体がロマンチック。',
        imageDataUrl: createSvgDataUrl('伊予灘ものがたり', '#ff8c00')
    },
    {
        id: 20,
        name: 'SLやまぐち号',
        line: 'JR西日本 山口線',
        description: '力強い蒸気と大きな汽笛が迫力満点の蒸気機関車。レトロな客車に揺られて、タイムスリップ気分を味わえる。',
        imageDataUrl: createSvgDataUrl('SLやまぐち号', '#36454f')
    },
    {
        id: 21,
        name: 'ろくもん',
        line: 'しなの鉄道',
        description: '真田家の家紋「六文銭」が名前の由来。長野の美味しい食材を使った料理を、美しい景色と共に楽しめる。',
        imageDataUrl: createSvgDataUrl('ろくもん', '#dc143c')
    },
    {
        id: 22,
        name: '36ぷらす3',
        line: 'JR九州（九州全域）',
        description: '九州7県を5つのルートで巡る特別な列車。世界で36番目に大きい島・九州で、乗客に感謝を届ける旅をする。',
        imageDataUrl: createSvgDataUrl('36ぷらす3', '#000000')
    }
];