
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
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Tobu_N100_series_EMU_SPACIA_X_20230715.jpg/1024px-Tobu_N100_series_EMU_SPACIA_X_20230715.jpg'
    },
    {
        id: 12,
        name: 'サンライズ出雲・瀬戸',
        line: '寝台特急',
        description: '日本で唯一毎日走っている寝台列車。ベッドで眠りながら、東京から四国や山陰へ旅することができる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/JRW_285_Sunrise_Seto_Izumo.jpg/1024px-JRW_285_Sunrise_Seto_Izumo.jpg'
    },
    {
        id: 13,
        name: 'サフィール踊り子',
        line: '東海道本線・伊東線など',
        description: '全席グリーン車以上で、窓から海の景色を楽しめる豪華な特急。おいしいラーメンが食べられるカフェもあるんだ。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/E261_series_RS1_Saphir_Odoriko_Kawasaki_20200314.jpg/1024px-E261_series_RS1_Saphir_Odoriko_Kawasaki_20200314.jpg'
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
        imageDataUrl: 'https://travel.rakuten.co.jp/mytrip/sites/mytrip/files/styles/main_image/public/migration_article_images/howto/yufuinnomori-guide-key.jpg?itok=CBIVxWm3'
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
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Pokemon_With_You_Train_at_Ichinoseki_Station_20171010.jpg/1024px-Pokemon_With_You_Train_at_Ichinoseki_Station_20171010.jpg'
    },
    {
        id: 18,
        name: 'あをによし',
        line: '近鉄（大阪・京都 - 奈良）',
        description: '奈良の都をイメージした紫色の美しい観光特急。正倉院の宝物をモチーフにした内装がとっても豪華。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Kintetsu_19200_series_EMU_Awoniyoshi_at_Kintetsu-Nara_station_20220501.jpg/1024px-Kintetsu_19200_series_EMU_Awoniyoshi_at_Kintetsu-Nara_station_20220501.jpg'
    },
    {
        id: 19,
        name: '伊予灘ものがたり',
        line: 'JR四国 予讃線',
        description: '愛媛の美しい伊予灘の海沿いを走る観光列車。夕日をイメージした茜色と黄金色の車体がロマンチック。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Iyonada_Monogatari_at_Matsuyama_station_20220402.jpg/1024px-Iyonada_Monogatari_at_Matsuyama_station_20220402.jpg'
    },
    {
        id: 20,
        name: 'SLやまぐち号',
        line: 'JR西日本 山口線',
        description: '力強い蒸気と大きな汽笛が迫力満点の蒸気機関車。レトロな客車に揺られて、タイムスリップ気分を味わえる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/JNR_C57_1_and_JNR_D51_200_SL_Yamaguchi_20171126.jpg/1024px-JNR_C57_1_and_JNR_D51_200_SL_Yamaguchi_20171126.jpg'
    },
    {
        id: 21,
        name: 'ろくもん',
        line: 'しなの鉄道',
        description: '真田家の家紋「六文銭」が名前の由来。長野の美味しい食材を使った料理を、美しい景色と共に楽しめる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Shinano-Railway-115-S8-Rokumon-20140711.jpg/1024px-Shinano-Railway-115-S8-Rokumon-20140711.jpg'
    },
    {
        id: 22,
        name: '36ぷらす3',
        line: 'JR九州（九州全域）',
        description: '九州7県を5つのルートで巡る特別な列車。世界で36番目に大きい島・九州で、乗客に感謝を届ける旅をする。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/JR_Kyushu_787_series_BM363_36plus3.jpg/1024px-JR_Kyushu_787_series_BM363_36plus3.jpg'
    },
    {
        id: 23,
        name: 'HC85系ひだ・南紀',
        line: 'JR東海 高山本線・紀勢本線',
        description: 'エンジンで発電した電気で走る、新しいハイブリッド特急。静かで環境にやさしく、乗り心地も抜群！',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/JRC_HC85_Hida.jpg/1024px-JRC_HC85_Hida.jpg'
    },
    {
        id: 24,
        name: 'E7系新幹線かがやき',
        line: '北陸新幹線',
        description: '日本の伝統的な美しさをまとった新幹線。青と銅色のラインが特徴で、金沢まで速くて快適に連れて行ってくれる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/E7_F12_Shin-Takaoka_20150314.jpg/500px-E7_F12_Shin-Takaoka_20150314.jpg'
    },
    {
        id: 25,
        name: 'E6系新幹線こまち',
        line: '秋田新幹線',
        description: '情熱的な赤色が印象的なミニ新幹線。普通の線路も走れるので、秋田の街中を走り抜ける姿はとてもかっこいい。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Series-E6_Z14_Komachi.jpg/500px-Series-E6_Z14_Komachi.jpg'
    },
    {
        id: 26,
        name: '500系新幹線',
        line: '山陽新幹線（こだま）',
        description: '戦闘機のような未来的なデザインで、今でも大人気！かつては日本最速だった、伝説のかっこいい新幹線。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/JRW-500-nozomi.jpg/500px-JRW-500-nozomi.jpg'
    },
    {
        id: 27,
        name: '800系新幹線つばめ',
        line: '九州新幹線',
        description: '九州を走る、和風で落ち着いた雰囲気の新幹線。座席には金箔や九州の木が使われていて、とても豪華。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/800_Series_in_Kagoshima-Chuo.jpg/500px-800_Series_in_Kagoshima-Chuo.jpg'
    },
    {
        id: 28,
        name: 'TRAIN SUITE 四季島',
        line: 'JR東日本',
        description: 'シャンパンゴールドに輝く、走る超高級ホテル。東日本の美しい自然や文化を巡る、夢のような旅ができる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/JR_East_E001_series_Train_Suite_Shiki-shima_20170619.jpg/500px-JR_East_E001_series_Train_Suite_Shiki-shima_20170619.jpg'
    },
    {
        id: 29,
        name: 'トワイライトEXP瑞風',
        line: 'JR西日本',
        description: '「美しい日本の景色を走る」がコンセプトの豪華列車。展望デッキから風を感じながら、最高の景色を楽しめる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Series87_TWILIGHT-EXPRESS-MIZUKAZE.jpg/500px-Series87_TWILIGHT-EXPRESS-MIZUKAZE.jpg'
    },
    {
        id: 30,
        name: 'ななつ星 in 九州',
        line: 'JR九州',
        description: '古代漆色のボディが美しい、日本初の豪華クルーズトレイン。九州の自然や食、文化を味わう特別な旅へ出発！',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Seven_Stars_in_Kyushu_at_Aso_Station_20131103.jpg/500px-Seven_Stars_in_Kyushu_at_Aso_Station_20131103.jpg'
    },
    {
        id: 31,
        name: '成田エクスプレス',
        line: 'JR東日本（空港アクセス）',
        description: '成田空港と都心を結ぶ特急列車。赤と白のスタイリッシュなデザインで、世界中からのお客さんを迎える日本の玄関口。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/JRE_Series-E259R-Ne003.jpg/500px-JRE_Series-E259R-Ne003.jpg'
    },
    {
        id: 32,
        name: 'E233系中央線',
        line: '中央線快速',
        description: '東京の真ん中をオレンジ色のラインで駆け抜ける通勤電車。毎日たくさんの人を安全に、速く運んでいる頼れる存在。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/JRE_Series-E233-T4_12cars.jpg/500px-JRE_Series-E233-T4_12cars.jpg'
    },
    {
        id: 33,
        name: '京成スカイライナー',
        line: '京成電鉄（空港アクセス）',
        description: '風をイメージした流線型のデザインが特徴。在来線最速の時速160kmで、成田空港まであっという間！',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Keisei-Type-AE.jpg/500px-Keisei-Type-AE.jpg'
    },
    {
        id: 34,
        name: '名鉄ミュースカイ',
        line: '名古屋鉄道（空港アクセス）',
        description: '青と白の爽やかなカラーリングで、中部国際空港セントレアへ向かう特急。大きな窓から伊勢湾の景色も見える。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nagoya_Railway_2000.jpg/500px-Nagoya_Railway_2000.jpg'
    },
    {
        id: 35,
        name: 'JR四国8600系',
        line: '予讃線（特急しおかぜ・いしづち）',
        description: '蒸気機関車をイメージしたデザインの四国の新しい特急。空気のバネでカーブも快適に走り抜ける。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/JR_shikoku_8600_series_EMU_8602%2B8752_kanonji.jpg/500px-JR_shikoku_8600_series_EMU_8602%2B8752_kanonji.jpg'
    },
    {
        id: 36,
        name: 'リゾートしらかみ',
        line: 'JR東日本 五能線',
        description: '世界自然遺産・白神山地と日本海の絶景を楽しめる観光列車。青池、ブナ、くまげらの3兄弟が走っているよ。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Series_HB-E300.jpg/500px-Series_HB-E300.jpg'
    },
    {
        id: 37,
        name: 'SL人吉',
        line: 'JR九州 鹿児島本線',
        description: '100年以上前に作られた蒸気機関車が牽引する、本物のSL列車。展望ラウンジやミュージアムもあって楽しい。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/JRK_58654_SL-Hitoyoshi.jpg/500px-JRK_58654_SL-Hitoyoshi.jpg'
    },
    {
        id: 38,
        name: 'サンダーバード',
        line: 'JR西日本（大阪 - 敦賀）',
        description: '大阪と北陸を結ぶ頼れる特急列車。ビジネスや観光で多くの人に利用されている。白いボディに青いラインが特徴。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/683-4000_Thunderbird_Yamazaki_20151220.jpg/500px-683-4000_Thunderbird_Yamazaki_20151220.jpg'
    },
    {
        id: 39,
        name: '指宿のたまて箱',
        line: 'JR九州 指宿枕崎線',
        description: '浦島太郎伝説がテーマの観光特急。海側が白、山側が黒というユニークなデザインで、ドアから煙が出る仕掛けも！',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Ltd_Exp_Ibusuki-no-Tamatebako_110312_1.jpg/500px-Ltd_Exp_Ibusuki-no-Tamatebako_110312_1.jpg'
    },
    {
        id: 40,
        name: '或る列車',
        line: 'JR九州',
        description: '幻の豪華列車を蘇らせた、金と黒のスイーツトレイン。九州の食材を使った絶品スイーツを味わいながら旅ができる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/JRKyushu_DMU_ARU_RESSHA.jpg/500px-JRKyushu_DMU_ARU_RESSHA.jpg'
    },
    {
        id: 41,
        name: '富士回遊',
        line: 'JR東日本・富士急行',
        description: '新宿から富士山エリアへ乗り換えなしで行ける便利な特急。富士山の絶景に向かって走り、登山や観光に大活躍。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Fujikaiyu_e353.jpg/500px-Fujikaiyu_e353.jpg'
    },
    {
        id: 42,
        name: '湘南モノレール',
        line: '江の島線',
        description: 'ジェットコースターみたいにスリル満点！ぶら下がり式で、山の中を駆け抜け、アップダウンも激しい面白い乗り物。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Smonorailhonsha.jpg/500px-Smonorailhonsha.jpg'
    },
    {
        id: 43,
        name: 'とれいゆ つばさ',
        line: '山形新幹線',
        description: '世界初、足湯のある新幹線！車窓の景色を眺めながら温泉気分が味わえる、ユニークなリゾート列車だった。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/E3-700_R18_Toreiyu_9490M_Fukushima_20220206.JPG/500px-E3-700_R18_Toreiyu_9490M_Fukushima_20220206.JPG'
    },
    {
        id: 44,
        name: '現美新幹線',
        line: '上越新幹線',
        description: '世界最速の美術館！車両ごとに違うアーティストの現代アートが飾られていた、走る芸術作品のような新幹線。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/E3-700_R19_Genbi_Shinkansen_20160910.jpg/500px-E3-700_R19_Genbi_Shinkansen_20160910.jpg'
    },
    {
        id: 45,
        name: 'フルーティアふくしま',
        line: 'JR東日本 磐越西線',
        description: '走るカフェ！福島の美味しいフルーツを使ったオリジナルスイーツやジュースを、美しい景色と一緒に楽しめる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/JRE_Series719-700_Fruitea-1.jpg/500px-JRE_Series719-700_Fruitea-1.jpg'
    },
    {
        id: 46,
        name: 'えちごトキめきリゾート雪月花',
        line: 'えちごトキめき鉄道',
        description: '国内最大級の窓から、新潟の山と海のパノラマビューが楽しめるリゾート列車。地元の食材を使った料理も絶品。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Myoko-line_Series-ET122-1000.jpg/500px-Myoko-line_Series-ET122-1000.jpg'
    },
    {
        id: 47,
        name: '海幸山幸',
        line: 'JR九州 日南線',
        description: '木のおもちゃのような、杉の木をたくさん使った特急列車。宮崎の神話をテーマに、海や山の景色の中を走る。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/JRK_Kiha125-401_Umisachi-Yamasachi.jpg/500px-JRK_Kiha125-401_Umisachi-Yamasachi.jpg'
    },
    {
        id: 48,
        name: 'ハローキティはるか',
        line: 'JR西日本（空港アクセス）',
        description: 'ハローキティがいっぱいの、とってもかわいい特急列車。関西空港へ向かう旅が、わくわくする時間になるよ。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/JRW_Series271-HA655.jpg/500px-JRW_Series271-HA655.jpg'
    },
    {
        id: 49,
        name: 'ハローキティ新幹線',
        line: '山陽新幹線',
        description: 'ピンクのリボンがおしゃれな500系新幹線。車内もハローキティだらけで、写真スポットもたくさんあるよ。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JRW-500_V2_20180701_HelloKitty_Shinkansen_in_Himeji.jpg/500px-JRW-500_V2_20180701_HelloKitty_Shinkansen_in_Himeji.jpg'
    },
    {
        id: 50,
        name: '東武500系リバティ',
        line: '東武鉄道',
        description: '途中の駅で分割したり合体したりできる便利な特急。日光や会津など、色々な方面へ向かうことができる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Tobu-Series500_Revaty_Kegon28_Aizu128.jpg/500px-Tobu-Series500_Revaty_Kegon28_Aizu128.jpg'
    },
    {
        id: 51,
        name: 'オーシャンアロー',
        line: 'JR西日本 紀勢本線',
        description: 'イルカのようなユニークな顔が特徴の特急列車。太平洋の美しい景色を眺めながら、紀伊半島を駆け抜ける。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/283%E7%B3%BB%E3%82%AA%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%B3%E3%82%A2%E3%83%AD%E3%83%BC.jpg/500px-283%E7%B3%BB%E3%82%AA%E3%83%BC%E3%82%B7%E3%83%A3%E3%83%B3%E3%82%A2%E3%83%AD%E3%83%BC.jpg'
    },
    {
        id: 52,
        name: 'うずしお',
        line: 'JR四国 高徳線',
        description: '徳島と高松を結ぶ、力強い走りが自慢のディーゼル特急。渦潮をイメージしたロゴマークがかっこいい。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/JR_shikoku_2700series_DMU_2706%2B2756_at_tokushima.jpg/500px-JR_shikoku_2700series_DMU_2706%2B2756_at_tokushima.jpg'
    },
    {
        id: 53,
        name: 'あをによし',
        line: '近鉄（大阪・京都 - 奈良）',
        description: '奈良の都をイメージした紫色の美しい観光特急。正倉院の宝物をモチーフにした内装がとっても豪華。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Kintetsu_Series19200_Aoniyoshi.jpg/500px-Kintetsu_Series19200_Aoniyoshi.jpg'
    },
    {
        id: 54,
        name: 'リニアモーターカー',
        line: '中央新幹線（予定）',
        description: '磁石の力で浮いて走る未来の乗り物。時速500kmを超えるスピードで、東京と名古屋をあっという間に結ぶ予定だよ。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/JR-Maglev-MLX01-2.jpg/330px-JR-Maglev-MLX01-2.jpg'
    },
    {
        id: 55,
        name: '近鉄アーバンライナーplus',
        line: '近鉄（大阪 - 名古屋）',
        description: '大阪と名古屋を結ぶ、近鉄のビジネス特急。白いボディにオレンジのラインが特徴で、快適な座席でビジネスマンに人気。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Series21000_Nagoya.jpg/500px-Series21000_Nagoya.jpg'
    },
    {
        id: 56,
        name: '近鉄30000系ビスタEX',
        line: '近鉄（伊勢志摩方面など）',
        description: '日本初の2階建て電車としてデビューした伝統ある特急。階下席はグループ旅行にぴったりのサロン風になっている。',
        imageDataUrl: 'https://www.kintetsu.co.jp/gyoumu/Express/train/image/bisuta/bistacar_main.jpg'
    },
    {
        id: 57,
        name: '快速マリンライナー',
        line: 'JR瀬戸大橋線（岡山 - 高松）',
        description: '岡山と四国の高松を瀬戸大橋で結ぶ快速列車。2階建て車両からの海の眺めは最高！通勤や通学、観光に大活躍。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/JRS_5000_series_M3_20230120.jpg/500px-JRS_5000_series_M3_20230120.jpg'
    },
    {
        id: 58,
        name: '特急いしづち (2000系)',
        line: 'JR予讃線',
        description: '高松と愛媛の松山などを結ぶ振り子式ディーゼル特急。アンパンマン列車としても活躍し、カーブの多い予讃線を力強く走る。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Matsuyama_Station_%28Ehime%29_20240513_%283%29.jpg/1200px-Matsuyama_Station_%28Ehime%29_20240513_%283%29.jpg'
    },
    {
        id: 59,
        name: 'びゅうコースター風っこ',
        line: 'JR東日本',
        description: '窓がないトロッコ車両で、風を感じながら旅ができる楽しい列車。主に景色が綺麗なローカル線を走り、自然を満喫できる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Kazekko007.JPG/500px-Kazekko007.JPG'
    },
    {
        id: 60,
        name: 'THE ROYAL EXPRESS',
        line: '伊豆急行線・JR北海道',
        description: '美しいロイヤルブルーの車体が特徴の豪華観光列車。伊豆や北海道の美しい景色の中、音楽や美味しい食事を楽しむ贅沢な旅ができる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Izukyu-2100-R5-THE_ROYAL_EXPRESS_20220403.jpg/500px-Izukyu-2100-R5-THE_ROYAL_EXPRESS_20220403.jpg'
    },
    {
        id: 61,
        name: '四国まんなか千年ものがたり',
        line: 'JR四国 土讃線',
        description: '自然豊かな土讃線を走る観光列車。大歩危・小歩危の渓谷美を眺めながら、地元の食材を使った上品な料理が楽しめる。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Shikoku_mannaka_sennenmonogatari_%E5%A4%96%E8%A6%B3%EF%BC%88%E6%89%8B%E5%89%8D3%E5%8F%B7%E8%BB%8A%EF%BC%89.jpg/500px-Shikoku_mannaka_sennenmonogatari_%E5%A4%96%E8%A6%B3%EF%BC%88%E6%89%8B%E5%89%8D3%E5%8F%B7%E8%BB%8A%EF%BC%89.jpg'
    },
    {
        id: 62,
        name: '天空',
        line: '南海高野線',
        description: '高野山へ向かう急な坂道を登る観光列車。森の中に溶け込む緑色のボディと、風を感じられる展望デッキが人気だよ。',
        imageDataUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Nankai_Series2200-2258_TENKU.jpg/1200px-Nankai_Series2200-2258_TENKU.jpg'
    }
];
