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
        imageDataUrl: 'https://www.tabirai.net/s/planning/img/oita/yufuin-no-mori/main.jpg'
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
    },
    {
        id: 24,
        name: 'E7系新幹線かがやき',
        line: '北陸新幹線',
        description: '日本の伝統的な美しさをまとった新幹線。青と銅色のラインが特徴で、金沢まで速くて快適に連れて行ってくれる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Shinkansen_E7_at_Karuizawa_Station_2022_-_2.jpg/1024px-Shinkansen_E7_at_Karuizawa_Station_2022_-_2.jpg'
    },
    {
        id: 25,
        name: 'E6系新幹線こまち',
        line: '秋田新幹線',
        description: '情熱的な赤色が印象的なミニ新幹線。普通の線路も走れるので、秋田の街中を走り抜ける姿はとてもかっこいい。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/E6_series_Shinkansen_20130316_1.JPG/1024px-E6_series_Shinkansen_20130316_1.JPG'
    },
    {
        id: 26,
        name: '500系新幹線',
        line: '山陽新幹線（こだま）',
        description: '戦闘機のような未来的なデザインで、今でも大人気！かつては日本最速だった、伝説のかっこいい新幹線。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Shinkansen-500-v1.jpg/1024px-Shinkansen-500-v1.jpg'
    },
    {
        id: 27,
        name: '800系新幹線つばめ',
        line: '九州新幹線',
        description: '九州を走る、和風で落ち着いた雰囲気の新幹線。座席には金箔や九州の木が使われていて、とても豪華。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/JR_Kyushu_Shinkansen_800_series_U009_2016-11-23.jpg/1024px-JR_Kyushu_Shinkansen_800_series_U009_2016-11-23.jpg'
    },
    {
        id: 28,
        name: 'TRAIN SUITE 四季島',
        line: 'JR東日本',
        description: 'シャンパンゴールドに輝く、走る超高級ホテル。東日本の美しい自然や文化を巡る、夢のような旅ができる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/TRAIN_SUITE_SHIKI-SHIMA_in_Ueno_Sta._20161118.jpg/1024px-TRAIN_SUITE_SHIKI-SHIMA_in_Ueno_Sta._20161118.jpg'
    },
    {
        id: 29,
        name: 'トワイライトEXP瑞風',
        line: 'JR西日本',
        description: '「美しい日本の景色を走る」がコンセプトの豪華列車。展望デッキから風を感じながら、最高の景色を楽しめる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Twilight_Express_Mizukaze_XC86-101.jpg/1024px-Twilight_Express_Mizukaze_XC86-101.jpg'
    },
    {
        id: 30,
        name: 'ななつ星 in 九州',
        line: 'JR九州',
        description: '古代漆色のボディが美しい、日本初の豪華クルーズトレイン。九州の自然や食、文化を味わう特別な旅へ出発！',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Seven_Stars_in_Kyushu_cruising_Hisatsu_Line.jpg/1024px-Seven_Stars_in_Kyushu_cruising_Hisatsu_Line.jpg'
    },
    {
        id: 31,
        name: '成田エクスプレス',
        line: 'JR東日本（空港アクセス）',
        description: '成田空港と都心を結ぶ特急列車。赤と白のスタイリッシュなデザインで、世界中からのお客さんを迎える日本の玄関口。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/JR_East_E259_series_021.JPG/1024px-JR_East_E259_series_021.JPG'
    },
    {
        id: 32,
        name: 'E233系中央線',
        line: '中央線快速',
        description: '東京の真ん中をオレンジ色のラインで駆け抜ける通勤電車。毎日たくさんの人を安全に、速く運んでいる頼れる存在。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/JReast-E233-0-T31-20150117.jpg/1024px-JReast-E233-0-T31-20150117.jpg'
    },
    {
        id: 33,
        name: '京成スカイライナー',
        line: '京成電鉄（空港アクセス）',
        description: '風をイメージした流線型のデザインが特徴。在来線最速の時速160kmで、成田空港まであっという間！',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Keisei_AE_series_%282010%29_201912_01.jpg/1024px-Keisei_AE_series_%282010%29_201912_01.jpg'
    },
    {
        id: 34,
        name: '名鉄ミュースカイ',
        line: '名古屋鉄道（空港アクセス）',
        description: '青と白の爽やかなカラーリングで、中部国際空港セントレアへ向かう特急。大きな窓から伊勢湾の景色も見える。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Meitetsu_2000_series_EMU_011.jpg/1024px-Meitetsu_2000_series_EMU_011.jpg'
    },
    {
        id: 35,
        name: 'JR四国8600系',
        line: '予讃線（特急しおかぜ・いしづち）',
        description: '蒸気機関車をイメージしたデザインの四国の新しい特急。空気のバネでカーブも快適に走り抜ける。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/JR_Shikoku_8600_series_and_7200_series_Sanuki-Fuchu_Station_20171112.jpg/1024px-JR_Shikoku_8600_series_and_7200_series_Sanuki-Fuchu_Station_20171112.jpg'
    },
    {
        id: 36,
        name: 'リゾートしらかみ',
        line: 'JR東日本 五能線',
        description: '世界自然遺産・白神山地と日本海の絶景を楽しめる観光列車。青池、ブナ、くまげらの3兄弟が走っているよ。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Resort-shirakami-buna.jpg/1024px-Resort-shirakami-buna.jpg'
    },
    {
        id: 37,
        name: 'SL人吉',
        line: 'JR九州 鹿児島本線',
        description: '100年以上前に作られた蒸気機関車が牽引する、本物のSL列車。展望ラウンジやミュージアムもあって楽しい。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/JNR_58654_SL_Hitoyoshi_2022-09-17.jpg/1024px-JNR_58654_SL_Hitoyoshi_2022-09-17.jpg'
    },
    {
        id: 38,
        name: 'A列車で行こう',
        line: 'JR九州 三角線',
        description: 'ジャズが流れる、大人の雰囲気漂う特急列車。ステンドグラスやバーカウンターがあり、おしゃれな旅ができる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/A-TRAIN_KIHA185.jpg/1024px-A-TRAIN_KIHA185.jpg'
    },
    {
        id: 39,
        name: '指宿のたまて箱',
        line: 'JR九州 指宿枕崎線',
        description: '浦島太郎伝説がテーマの観光特急。海側が白、山側が黒というユニークなデザインで、ドアから煙が出る仕掛けも！',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Ibusuki-no-tamatebako_20110328-001.jpg/1024px-Ibusuki-no-tamatebako_20110328-001.jpg'
    },
    {
        id: 40,
        name: '或る列車',
        line: 'JR九州',
        description: '幻の豪華列車を蘇らせた、金と黒のスイーツトレイン。九州の食材を使った絶品スイーツを味わいながら旅ができる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/JR_Kyushu_KiloShi_47_Aru_Ressha.jpg/1024px-JR_Kyushu_KiloShi_47_Aru_Ressha.jpg'
    },
    {
        id: 41,
        name: '富士回遊',
        line: 'JR東日本・富士急行',
        description: '新宿から富士山エリアへ乗り換えなしで行ける便利な特急。富士山の絶景に向かって走り、登山や観光に大活躍。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Series-E353_S115_Fuji-Excursion-19.jpg/1024px-Series-E353_S115_Fuji-Excursion-19.jpg'
    },
    {
        id: 42,
        name: '湘南モノレール',
        line: '江の島線',
        description: 'ジェットコースターみたいにスリル満点！ぶら下がり式で、山の中を駆け抜け、アップダウンも激しい面白い乗り物。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Shonan_Monorail_5601_in_Kataseyama_sta._201602.jpg/1024px-Shonan_Monorail_5601_in_Kataseyama_sta._201602.jpg'
    },
    {
        id: 43,
        name: 'とれいゆ つばさ',
        line: '山形新幹線',
        description: '世界初、足湯のある新幹線！車窓の景色を眺めながら温泉気分が味わえる、ユニークなリゾート列車だった。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Toreiyu_E3_R18_Yamagata.jpg/1024px-Toreiyu_E3_R18_Yamagata.jpg'
    },
    {
        id: 44,
        name: '現美新幹線',
        line: '上越新幹線',
        description: '世界最速の美術館！車両ごとに違うアーティストの現代アートが飾られていた、走る芸術作品のような新幹線。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Genbi_Shinkansen_at_Echigo-Yuzawa_Station_201610.jpg/1024px-Genbi_Shinkansen_at_Echigo-Yuzawa_Station_201610.jpg'
    },
    {
        id: 45,
        name: 'フルーティアふくしま',
        line: 'JR東日本 磐越西線',
        description: '走るカフェ！福島の美味しいフルーツを使ったオリジナルスイーツやジュースを、美しい景色と一緒に楽しめる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/FruiTea_Fukushima_719_Series_at_Aizu-Wakamatsu_Station_201510.jpg/1024px-FruiTea_Fukushima_719_Series_at_Aizu-Wakamatsu_Station_201510.jpg'
    },
    {
        id: 46,
        name: 'えちごトキめきリゾート雪月花',
        line: 'えちごトキめき鉄道',
        description: '国内最大級の窓から、新潟の山と海のパノラマビューが楽しめるリゾート列車。地元の食材を使った料理も絶品。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Echigo_Tokimeki_Railway_ET122-1000_20160423.jpg/1024px-Echigo_Tokimeki_Railway_ET122-1000_20160423.jpg'
    },
    {
        id: 47,
        name: '海幸山幸',
        line: 'JR九州 日南線',
        description: '木のおもちゃのような、杉の木をたくさん使った特急列車。宮崎の神話をテーマに、海や山の景色の中を走る。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Umisachi-Yamasachi_at_Kitago_station.jpg/1024px-Umisachi-Yamasachi_at_Kitago_station.jpg'
    },
    {
        id: 48,
        name: 'ハローキティはるか',
        line: 'JR西日本（空港アクセス）',
        description: 'ハローキティがいっぱいの、とってもかわいい特急列車。関西空港へ向かう旅が、わくわくする時間になるよ。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Hello_Kitty_Haruka_HA604_Kansai-Airport_Express.jpg/1024px-Hello_Kitty_Haruka_HA604_Kansai-Airport_Express.jpg'
    },
    {
        id: 49,
        name: 'ハローキティ新幹線',
        line: '山陽新幹線',
        description: 'ピンクのリボンがおしゃれな500系新幹線。車内もハローキティだらけで、写真スポットもたくさんあるよ。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Shinkansen-Hello-Kitty-500-V2-2018-07-26-14-16-11.jpg/1024px-Shinkansen-Hello-Kitty-500-V2-2018-07-26-14-16-11.jpg'
    },
    {
        id: 50,
        name: '東武500系リバティ',
        line: '東武鉄道',
        description: '途中の駅で分割したり合体したりできる便利な特急。日光や会津など、色々な方面へ向かうことができる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Tobu_500_series_EMU_001.jpg/1024px-Tobu_500_series_EMU_001.jpg'
    }
];