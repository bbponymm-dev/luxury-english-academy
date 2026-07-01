/* Luxury English Academy — local-first, dependency-free study app */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const raws = {
  'Bag Anatomy': `
handle|手柄|/ˈhændl/
top handle|顶部手柄|/ˈtɑːp ˌhændl/
strap|包带|/stræp/
shoulder strap|肩带|/ˈʃoʊldər stræp/
crossbody strap|斜挎带|/ˈkrɔːsbɑːdi stræp/
adjustable strap|可调节肩带|/əˈdʒʌstəbl stræp/
removable strap|可拆卸肩带|/rɪˈmuːvəbl stræp/
body|包身|/ˈbɑːdi/
silhouette|轮廓|/ˌsɪluˈet/
flap|翻盖|/flæp/
closure|闭合方式|/ˈkloʊʒər/
zipper|拉链|/ˈzɪpər/
magnetic closure|磁吸扣|/mæɡˈnetɪk ˈkloʊʒər/
turn-lock closure|旋锁扣|/ˈtɜːrn lɑːk ˈkloʊʒər/
clasp|搭扣|/klæsp/
buckle|带扣|/ˈbʌkl/
hardware|五金|/ˈhɑːrdwer/
chain|链条|/tʃeɪn/
base|底座|/beɪs/
bottom|底部|/ˈbɑːtəm/
feet|底钉|/fiːt/
lining|内衬|/ˈlaɪnɪŋ/
compartment|隔层|/kəmˈpɑːrtmənt/
main compartment|主隔层|/ˈmeɪn kəmˈpɑːrtmənt/
interior pocket|内袋|/ɪnˈtɪriər ˈpɑːkɪt/
exterior pocket|外袋|/ɪkˈstɪriər ˈpɑːkɪt/
slip pocket|插袋|/ˈslɪp ˌpɑːkɪt/
zipper pocket|拉链袋|/ˈzɪpər ˌpɑːkɪt/
card slot|卡位|/ˈkɑːrd slɑːt/
logo plate|标牌|/ˈloʊɡoʊ pleɪt/
stitching|缝线|/ˈstɪtʃɪŋ/
edge paint|油边|/ˈedʒ peɪnt/
piping|滚边|/ˈpaɪpɪŋ/
seam|接缝|/siːm/`,
  'Materials': `
leather|皮革|/ˈleðər/
calfskin|小牛皮|/ˈkæfskɪn/
lambskin|羊羔皮|/ˈlæmskɪn/
smooth leather|光面皮革|/ˈsmuːð ˌleðər/
grained leather|粒面皮革|/ˈɡreɪnd ˌleðər/
pebbled leather|荔枝纹皮革|/ˈpebəld ˌleðər/
patent leather|漆皮|/ˈpætnt ˌleðər/
suede|麂皮|/sweɪd/
canvas|帆布|/ˈkænvəs/
coated canvas|涂层帆布|/ˈkoʊtɪd ˌkænvəs/
nylon|尼龙|/ˈnaɪlɑːn/
denim|牛仔布|/ˈdenɪm/
tweed|粗花呢|/twiːd/
jacquard|提花面料|/ˈdʒækɑːrd/
microfiber|超细纤维|/ˈmaɪkroʊfaɪbər/
lining|内衬|/ˈlaɪnɪŋ/
vegan leather|纯素皮革|/ˈviːɡən ˌleðər/`,
  'Hardware': `
gold-tone hardware|金色五金|/ˈɡoʊld toʊn ˈhɑːrdwer/
silver-tone hardware|银色五金|/ˈsɪlvər toʊn ˈhɑːrdwer/
antique gold hardware|复古金五金|/ænˈtiːk ɡoʊld ˈhɑːrdwer/
gunmetal hardware|枪色五金|/ˈɡʌnmetl ˈhɑːrdwer/
palladium hardware|钯金色五金|/pəˈleɪdiəm ˈhɑːrdwer/
brass hardware|黄铜五金|/ˈbræs ˌhɑːrdwer/
chain strap|链条肩带|/ˈtʃeɪn stræp/
zipper pull|拉链头|/ˈzɪpər pʊl/
lock|锁扣|/lɑːk/
key|钥匙|/kiː/
hook|挂钩|/hʊk/
ring|圆环|/rɪŋ/
stud|饰钉|/stʌd/
rivet|铆钉|/ˈrɪvɪt/
snap button|按扣|/ˈsnæp bʌtn/
magnetic snap|磁吸扣|/mæɡˈnetɪk snæp/`,
  'Colors': `
black|黑色|/blæk/
jet black|乌黑色|/ˈdʒet blæk/
matte black|哑光黑|/ˈmæt blæk/
glossy black|亮黑色|/ˈɡlɑːsi blæk/
white|白色|/waɪt/
ivory|象牙白|/ˈaɪvəri/
cream|奶油色|/kriːm/
off-white|米白色|/ˈɔːf waɪt/
pearl|珍珠色|/pɜːrl/
bone|骨白色|/boʊn/
grey|灰色|/ɡreɪ/
light grey|浅灰色|/ˈlaɪt ɡreɪ/
ash grey|灰烬色|/ˈæʃ ɡreɪ/
slate grey|板岩灰|/ˈsleɪt ɡreɪ/
charcoal|炭灰色|/ˈtʃɑːrkoʊl/
graphite|石墨灰|/ˈɡræfaɪt/
taupe|灰褐色|/toʊp/
greige|灰米色|/ɡreɪʒ/
beige|米色|/beɪʒ/
sand|沙色|/sænd/
camel|驼色|/ˈkæml/
tan|棕褐色|/tæn/
cognac|干邑色|/ˈkoʊnjæk/
caramel|焦糖色|/ˈkærəməl/
chocolate|巧克力色|/ˈtʃɑːklət/
mocha|摩卡色|/ˈmoʊkə/
coffee|咖啡色|/ˈkɔːfi/
espresso|浓咖啡色|/eˈspresoʊ/
brown|棕色|/braʊn/
navy|海军蓝|/ˈneɪvi/
sky blue|天蓝色|/ˈskaɪ bluː/
baby blue|婴儿蓝|/ˈbeɪbi bluː/
powder blue|粉蓝色|/ˈpaʊdər bluː/
dusty blue|雾霾蓝|/ˈdʌsti bluː/
slate blue|板岩蓝|/ˈsleɪt bluː/
steel blue|钢蓝色|/ˈstiːl bluː/
ice blue|冰蓝色|/ˈaɪs bluː/
teal|蓝绿色|/tiːl/
turquoise|绿松石色|/ˈtɜːrkwɔɪz/
green|绿色|/ɡriːn/
sage|鼠尾草绿|/seɪdʒ/
olive|橄榄绿|/ˈɑːlɪv/
forest green|森林绿|/ˈfɔːrɪst ɡriːn/
emerald|祖母绿|/ˈemərəld/
mint|薄荷绿|/mɪnt/
pistachio|开心果绿|/pɪˈstɑːʃioʊ/
pink|粉色|/pɪŋk/
blush pink|腮红粉|/ˈblʌʃ pɪŋk/
dusty rose|干枯玫瑰色|/ˈdʌsti roʊz/
rose pink|玫瑰粉|/ˈroʊz pɪŋk/
bubblegum pink|泡泡糖粉|/ˈbʌblɡʌm pɪŋk/
hot pink|亮粉色|/ˈhɑːt pɪŋk/
coral|珊瑚色|/ˈkɔːrəl/
salmon|鲑鱼粉|/ˈsæmən/
purple|紫色|/ˈpɜːrpl/
lavender|薰衣草紫|/ˈlævəndər/
lilac|丁香紫|/ˈlaɪlæk/
mauve|藕紫色|/moʊv/
plum|李子色|/plʌm/
burgundy|勃艮第红|/ˈbɜːrɡəndi/
wine red|酒红色|/ˈwaɪn red/
cherry red|樱桃红|/ˈtʃeri red/`,
  'Bag Types & Shapes': `
tote bag|托特包|/ˈtoʊt bæɡ/
shoulder bag|单肩包|/ˈʃoʊldər bæɡ/
crossbody bag|斜挎包|/ˈkrɔːsbɑːdi bæɡ/
top-handle bag|手提包|/ˈtɑːp ˌhændl bæɡ/
clutch|手拿包|/klʌtʃ/
mini bag|迷你包|/ˈmɪni bæɡ/
bucket bag|水桶包|/ˈbʌkɪt bæɡ/
hobo bag|流浪包|/ˈhoʊboʊ bæɡ/
satchel|剑桥包|/ˈsætʃəl/
belt bag|腰包|/ˈbelt bæɡ/
backpack|双肩包|/ˈbækpæk/
wallet on chain|链条钱包|/ˈwɑːlɪt ɑːn ˈtʃeɪn/
structured|挺括的|/ˈstrʌktʃərd/
slouchy|柔软垂坠的|/ˈslaʊtʃi/
boxy|方正的|/ˈbɑːksi/
compact|小巧的|/kəmˈpækt/
spacious|宽敞的|/ˈspeɪʃəs/
east-west bag|横向包|/ˈiːst west bæɡ/
north-south bag|纵向包|/ˈnɔːrθ saʊθ bæɡ/`,
  'Selling Phrases': `
timeless|永不过时的|/ˈtaɪmləs/
elegant|优雅的|/ˈeləɡənt/
versatile|百搭的|/ˈvɜːrsətl/
sophisticated|精致高级的|/səˈfɪstɪkeɪtɪd/
refined|雅致的|/rɪˈfaɪnd/
premium|高端的|/ˈpriːmiəm/
classic|经典的|/ˈklæsɪk/
iconic|标志性的|/aɪˈkɑːnɪk/
practical|实用的|/ˈpræktɪkl/
functional|功能性强的|/ˈfʌŋkʃənl/
lightweight|轻便的|/ˈlaɪtweɪt/
durable|耐用的|/ˈdʊrəbl/
spacious|宽敞的|/ˈspeɪʃəs/
compact|小巧的|/kəmˈpækt/
everyday bag|日常包款|/ˈevrideɪ bæɡ/
statement piece|吸睛单品|/ˈsteɪtmənt piːs/
day-to-night|从日间到晚间皆宜|/ˌdeɪ tə ˈnaɪt/
easy to style|容易搭配|/ˈiːzi tə staɪl/
elevates any outfit|提升任何造型|/ˈeləveɪts ˈeni ˈaʊtfɪt/
beautiful craftsmanship|精美工艺|/ˈbjuːtɪfl ˈkræftsmənʃɪp/
clean stitching|走线整齐|/ˈkliːn ˌstɪtʃɪŋ/
buttery soft|黄油般柔软|/ˈbʌtəri sɔːft/
scratch-resistant|耐刮的|/ˈskrætʃ rɪˌzɪstənt/`,
  'Brand Pronunciation': `
Hermès|爱马仕|/ɛərˈmez/
Louis Vuitton|路易威登|/ˌluːi viːˈtɑːn/
Chanel|香奈儿|/ʃəˈnel/
Dior|迪奥|/diːˈɔːr/
Gucci|古驰|/ˈɡuːtʃi/
Bottega Veneta|葆蝶家|/boʊˌteɡə vəˈnetə/
Loewe|罗意威|/loʊˈeɪveɪ/
Celine|思琳|/səˈliːn/
Saint Laurent|圣罗兰|/sæ̃ loʊˈrɑːn/
Givenchy|纪梵希|/ʒiːvɑːnˈʃiː/
Balenciaga|巴黎世家|/bəˌlensiˈɑːɡə/
Prada|普拉达|/ˈprɑːdə/`
};

const qaPairs = [
  ['Can it fit an iPad?', '能装下 iPad 吗？', '/fɪt ən ˈaɪpæd/', 'Great question. A standard iPad slides into the main compartment, and the closure still sits properly.'],
  ['Can it fit a laptop?', '能装下笔记本电脑吗？', '/fɪt ə ˈlæptɑːp/', 'This size takes a 13-inch laptop. For anything larger, I would check the bag measurements before ordering.'],
  ['Is it heavy?', '它重吗？', '/ɪz ɪt ˈhevi/', 'It is surprisingly light on its own. Even with daily essentials inside, it does not feel bulky on the shoulder.'],
  ['Can I wear it crossbody?', '可以斜挎吗？', '/wer ɪt ˈkrɔːsbɑːdi/', 'Yes—you get enough strap drop to wear it crossbody comfortably. Let me put it on so you can see where it sits.'],
  ['Is the strap adjustable?', '肩带可调节吗？', '/ɪz ðə stræp əˈdʒʌstəbl/', 'It is. You can shorten it for the shoulder or add more drop for a relaxed crossbody fit.'],
  ['Is the strap removable?', '肩带可拆卸吗？', '/ɪz ðə stræp rɪˈmuːvəbl/', 'Yes, both ends unclip. That gives you a cleaner handheld look when you do not want the long strap.'],
  ['Does it scratch easily?', '它容易刮花吗？', '/dʌz ɪt skrætʃ ˈiːzəli/', 'The textured surface hides light wear better than smooth leather. I would still keep it away from keys and rough surfaces.'],
  ['Is it genuine leather?', '是真皮吗？', '/ɪz ɪt ˈdʒenjuɪn ˈleðər/', 'Yes, this one is genuine leather. You can see the natural grain here, and it feels soft without being flimsy.'],
  ['What condition is it in?', '它的成色怎么样？', '/wʌt kənˈdɪʃn ɪz ɪt ɪn/', 'I would rate it excellent overall. The corners are clean, and I only see very light handling marks on the hardware.'],
  ['How would you style it?', '你会怎么搭配？', '/haʊ wʊd ju staɪl ɪt/', 'For daytime, I would do straight-leg denim and a blazer. At night, the same bag works with a simple slip dress.'],
  ['Is it good for everyday use?', '适合日常使用吗？', '/ɡʊd fər ˈevrideɪ juːs/', 'I would say this one is better for everyday use than the mini. It is easy to carry and has enough room for the things you actually reach for.'],
  ['Is it worth buying?', '值得买吗？', '/ɪz ɪt wɜːrθ ˈbaɪɪŋ/', 'If you want one bag you can use often, the design and capacity make sense. I would not buy it just for the logo—the practicality is the real selling point.'],
  ['What can fit inside?', '里面能装什么？', '/wʌt kən fɪt ɪnˈsaɪd/', 'Let me show you right here: phone, cardholder, keys, sunglasses, and a small cosmetic pouch all fit without forcing the closure.'],
  ['Is the color easy to match?', '这个颜色百搭吗？', '/ɪz ðə ˈkʌlər ˈiːzi tə mætʃ/', 'Yes. This shade works with black, cream, denim, and camel, so it will not sit in your closet waiting for one outfit.'],
  ['Does it come with a dust bag?', '带防尘袋吗？', '/kʌm wɪð ə ˈdʌst bæɡ/', 'Yes, the original dust bag is included. Please store the bag inside it, but leave enough room for the leather to breathe.']
];

const categoryMeta = {
  'Bag Anatomy': ['Bag parts and construction', '⌁'],
  'Materials': ['Leather, textile and finish', '▧'],
  'Hardware': ['Metal details and closures', '✦'],
  'Colors': ['A complete color dictionary', '◐'],
  'Bag Types & Shapes': ['Silhouettes and bag styles', '▱'],
  'Selling Phrases': ['Polished host language', '“'],
  'Customer Q&A': ['Confident model answers', '?'],
  'Brand Pronunciation': ['Say luxury names naturally', 'Aa']
};

const colorHex = {
  black:'#191919','jet black':'#080808','matte black':'#252525','glossy black':'#111216',white:'#fff','ivory':'#fffff0',cream:'#f4e8cd','off-white':'#f5f2e9',pearl:'#eee7dc',bone:'#e7dcc8',grey:'#888b8d','light grey':'#c9cbca','ash grey':'#b2aca5','slate grey':'#70777f',charcoal:'#42464b',graphite:'#51545a',taupe:'#988675',greige:'#b5aa98',beige:'#d7c2a4',sand:'#cbb994',camel:'#b68a5a',tan:'#b98557',cognac:'#9a5432',caramel:'#b9783e',chocolate:'#5a3825',mocha:'#80604d',coffee:'#6f4e37',espresso:'#3b271f',brown:'#76533b',navy:'#1f2b49','sky blue':'#80c5e8','baby blue':'#a9cfe8','powder blue':'#b9cbdc','dusty blue':'#7f9aad','slate blue':'#63788e','steel blue':'#4e718a','ice blue':'#d7edf2',teal:'#207b78',turquoise:'#36aaa3',green:'#39704a',sage:'#9aaa8c',olive:'#777842','forest green':'#244b35',emerald:'#087f5b',mint:'#b8ddc8',pistachio:'#b6c795',pink:'#e9a8b7','blush pink':'#e8b7b3','dusty rose':'#c88f91','rose pink':'#d9899a','bubblegum pink':'#ed83b5','hot pink':'#ec3f91',coral:'#e9796b',salmon:'#ee907f',purple:'#69447c',lavender:'#b7a2d0',lilac:'#c3a7cf',mauve:'#9d7186',plum:'#633b57',burgundy:'#6e2639','wine red':'#722f37','cherry red':'#a61f2d'
};

const descriptions = {
  'Bag Anatomy': word => `A construction term for the bag’s ${word}; use it when showing how the design is built or used.`,
  'Materials': word => `Use ${word} when describing the surface, hand feel, durability, and care needs.`,
  'Hardware': word => `A precise term for the bag’s ${word}, including its tone, finish, and practical role.`,
  'Colors': word => `${word} names the shade accurately and helps viewers picture how it will work with their wardrobe.`,
  'Bag Types & Shapes': word => `${word} describes the bag’s shape, carrying style, or overall proportion.`,
  'Selling Phrases': word => `A natural livestream phrase for explaining why a bag feels ${word} rather than simply calling it “nice.”`,
  'Brand Pronunciation': word => `A standard pronunciation guide for saying ${word} clearly on camera.`
};

const capitalize = value => value.charAt(0).toUpperCase() + value.slice(1);
const rotate = (items, index) => items[index % items.length];

const materialNotes = {
  leather: ['supple with a natural grain', 'benefits from occasional conditioning'],
  calfskin: ['smooth but more structured than lambskin', 'handles regular use well with basic care'],
  lambskin: ['exceptionally soft and luxurious', 'needs a little more care around sharp objects'],
  'smooth leather': ['sleek and polished to the touch', 'can show surface marks sooner than textured leather'],
  'grained leather': ['textured and substantial', 'disguises light scratches well'],
  'pebbled leather': ['soft with a raised pebble grain', 'is forgiving for everyday wear'],
  'patent leather': ['glossy with a glass-like finish', 'wipes clean easily but should be stored away from dark color transfer'],
  suede: ['velvety and rich', 'should be protected from rain and brushed gently'],
  canvas: ['lightweight and relaxed', 'is easy to carry but should be spot-cleaned'],
  'coated canvas': ['smooth, light, and slightly structured', 'resists light rain and wipes clean easily'],
  nylon: ['lightweight and flexible', 'is practical in wet weather and low-maintenance'],
  denim: ['casual with a familiar woven texture', 'wears in naturally but may transfer dye when new'],
  tweed: ['textured and softly structured', 'needs care around jewelry that could catch the weave'],
  jacquard: ['woven with a raised, detailed pattern', 'is durable, though the weave should be kept away from snags'],
  microfiber: ['soft, fine, and easy to clean', 'holds up well as an interior material'],
  lining: ['smooth enough to protect your belongings', 'can be spot-cleaned with a lightly damp cloth'],
  'vegan leather': ['smooth and consistent in finish', 'is easy to wipe down but should not be overheated']
};

const sellingScripts = {
  timeless: ['This is the kind of shape you will still reach for five years from now.', 'If you are building a smaller handbag collection, a timeless design earns its place.', 'Will this shape date quickly?', 'I do not think so. The lines are simple, the branding is discreet, and there is nothing overly trend-driven here.'],
  elegant: ['The slim top handle makes the whole bag look elegant without feeling formal.', 'Put this next to a plain black dress and the look instantly feels finished.', 'Could I carry this to a wedding?', 'Absolutely. It is elegant enough for an event, but you can still wear it with tailoring afterward.'],
  versatile: ['You can carry it by the top handle, add the strap, and get two completely different moods.', 'This neutral shade is versatile—it works with denim at noon and a dress at dinner.', 'Would this work with both casual and dressy outfits?', 'Yes, that is where this bag is strongest. Change the strap and it moves easily between both.'],
  sophisticated: ['The deep color and restrained hardware make it feel sophisticated, not flashy.', 'A clean coat and this bag are really all you need for a polished winter look.', 'Does it look too mature in person?', 'Not at all. It feels sophisticated because the details are clean, but the compact size keeps it fresh.'],
  refined: ['Look at the narrow piping and the tiny logo—that restraint is what makes it refined.', 'Even the side profile is clean, so the bag looks considered from every angle.', 'What makes this one feel more polished?', 'For me, it is the refined finishing: even stitches, slim edges, and hardware that is not oversized.'],
  premium: ['The leather has enough weight to feel premium, but the bag is not heavy.', 'That smooth closure sound is a small detail, yet it changes the whole experience.', 'Does it feel as expensive as it looks?', 'It does. The leather, lining, and hardware all feel substantial rather than decorative.'],
  classic: ['A black flap bag with a chain is classic for a reason—it solves so many outfit problems.', 'If you prefer pieces that do not need explaining, this is the safer choice.', 'Which color would you choose for a first luxury bag?', 'I would go with the classic black. It is the easiest to style and the easiest to resell later.'],
  iconic: ['That curved silhouette is iconic; you can recognize it before you even see the logo.', 'Collectors love this detail because it connects the bag to the house’s original design.', 'Why is this model so well known?', 'The shape and closure are iconic to the brand. People recognize those details immediately.'],
  practical: ['It opens wide, stands up on its own, and gives you quick access to your phone.', 'This is practical in the best way: useful details, no unnecessary bulk.', 'Would you recommend it for commuting?', 'Yes. The secure closure and organized interior make it genuinely practical for a workday.'],
  functional: ['The pockets are placed where your hands naturally reach, so the layout feels functional.', 'You can adjust the strap without taking the bag off—that is thoughtful design.', 'Are the pockets actually useful?', 'They are. The layout is functional, and the main compartment is not divided into awkward tiny spaces.'],
  lightweight: ['I can hold this with two fingers—that gives you a good idea of how lightweight it is.', 'A lightweight base matters once you add a phone, wallet, and sunglasses.', 'Will the chain make it heavy after a few hours?', 'The chain adds a little weight, but the bag itself is lightweight and comfortable for a full afternoon.'],
  durable: ['The grain can handle regular use, which is why I would call this a durable everyday option.', 'You still want to care for it, but it is not a bag you have to be afraid to carry.', 'Can I use it often without ruining it?', 'Yes. The material is durable and hides light wear well, especially in this darker color.'],
  spacious: ['It looks neat from the outside, but the interior is surprisingly spacious.', 'I have a full-size phone, sunglasses, and a pouch inside, and there is still room.', 'Can you compare the capacity with the smaller size?', 'This one is noticeably more spacious. If you carry more than a phone and cardholder, I would choose this size.'],
  compact: ['It is compact, but the shape uses every centimeter of space well.', 'On the body it stays close and does not overwhelm a petite frame.', 'Does a phone fit even though it looks small?', 'Yes, a standard phone fits. It is compact, not micro, so you still have room for a cardholder and keys.'],
  'everyday bag': ['This is an everyday bag you can set down, open easily, and style without planning around it.', 'The comfortable strap and sensible capacity are what make it a repeat-use piece.', 'Would you choose this over the mini for daily use?', 'I would. This everyday bag gives you more flexibility without looking much bigger on the body.'],
  'statement piece': ['Let the bag be the statement piece and keep the rest of the look clean.', 'That color catches the camera immediately, so it is perfect when you want one strong accessory.', 'Is the color too bold for regular wear?', 'It is bold, but that is the point. Treat it as your statement piece and pair it with simple neutrals.'],
  'day-to-night': ['Remove the wide strap, keep the chain, and the bag goes from day to night in seconds.', 'It holds daytime essentials but still looks sleek enough for dinner.', 'Could I take this from the office to an evening event?', 'Definitely. The size and removable strap make it a true day-to-night option.'],
  'easy to style': ['Cream, denim, camel, or black—this shade is genuinely easy to style.', 'When you are rushing, this is the bag that works without a second thought.', 'What colors would you wear this with?', 'Almost any neutral, plus blue denim. It is easy to style because the undertone is soft rather than too warm or cool.'],
  'elevates any outfit': ['Add it to a white shirt and jeans, and it elevates the whole outfit.', 'The polished hardware gives even a simple knit set a more intentional finish.', 'Would it work with very casual clothes?', 'Yes. The structured shape elevates any outfit, even sneakers and denim, without looking overdone.'],
  'beautiful craftsmanship': ['The symmetry, hand-finished edges, and aligned pattern show beautiful craftsmanship.', 'Turn it around—the back is finished just as carefully as the front.', 'What detail should I look at to judge the quality?', 'Start with the edges and stitch alignment. The beautiful craftsmanship is easiest to see there.'],
  'clean stitching': ['Zoom in here: the clean stitching stays straight even around the curved corner.', 'There are no loose threads or crowded stitches along the handle base.', 'Can you show the seams up close?', 'Of course. The clean stitching is consistent all the way around, including the areas that take the most stress.'],
  'buttery soft': ['The leather is buttery soft; you can see it flex when I press it lightly.', 'It has that smooth, cushiony hand feel people love in lambskin.', 'Is the leather soft or more structured?', 'It is buttery soft with a gentle drape. I would store it stuffed so it keeps its shape.'],
  'scratch-resistant': ['The pebbled finish is scratch-resistant enough for confident everyday use.', 'Light nail marks do not show easily on this textured surface.', 'Do I need to baby the leather?', 'Not too much. It is scratch-resistant, although I would still keep keys in a separate pocket.']
};

function anatomyContent(word, index) {
  const storage = /pocket|compartment|slot|lining/.test(word);
  const carry = /handle|strap|chain/.test(word);
  const closure = /closure|zipper|flap|clasp|buckle/.test(word);
  if (storage) {
    const examples = rotate([
      [`The ${word} keeps smaller essentials from disappearing at the bottom of the bag.`, `I am opening it wide so you can see where the ${word} sits and what fits there.`],
      [`Your phone can stay in the ${word}, away from keys that might scratch it.`, `From this angle, you can see that the storage is useful without making the interior feel cramped.`],
      [`This ${word} creates a place for the items you reach for most often.`, `Even with a pouch in the main section, you can still use this part comfortably.`],
      [`Rather than one deep empty space, the bag uses the ${word} to keep everything easy to find.`, `I would put cards or a slim phone here and save the center for bulkier items.`]
    ], index);
    return {
      exampleSentences: examples,
      customerQuestion: rotate(['Can you show the inside?', 'Would a phone fit in that section?', 'Is the inside divided or open?', 'Where would you keep keys or cards?'], index),
      hostAnswer: rotate([
        `Let me show you right here. The ${word} adds organization without stealing much room from the main interior.`,
        `Yes, this section is genuinely useful. I can slide a phone into the ${word} and still close the bag normally.`,
        `The inside is easy to navigate because of the ${word}. It separates small items but leaves the larger space flexible.`,
        `I would use the ${word} for the things you need quickly. That way you are not digging through the whole bag on camera—or in real life.`
      ], index)
    };
  }
  if (carry) {
    const examples = rotate([
      [`The ${word} distributes the weight more comfortably than a very narrow strap.`, `Watch where the bag lands when I carry it this way; the proportion feels balanced.`],
      [`You can use the ${word} when you want a hands-free option for errands or travel.`, `I have filled the bag with daily essentials, and it still sits close to the body.`],
      [`The attachment points keep the ${word} from twisting while you walk.`, `Shorten it for a neater shoulder carry, or add length for a relaxed look.`],
      [`A well-placed ${word} changes how heavy a bag feels, not just how it looks.`, `I will model it front and side so you can judge the drop against my height.`]
    ], index);
    return {
      exampleSentences: examples,
      customerQuestion: rotate(['Is that comfortable on the shoulder?', 'Can you remove it?', 'Can you show the drop length on you?', 'Does it feel heavy when the bag is full?'], index),
      hostAnswer: rotate([
        `It feels comfortable and the weight is well balanced. I do not feel one narrow point digging into my shoulder.`,
        `Great question. The ${word} detaches cleanly, so you can switch to a simpler handheld look.`,
        `Let me put it on for you. The ${word} gives enough drop to sit neatly without swinging around.`,
        `With the bag filled, the ${word} still feels secure. The placement helps spread the weight instead of pulling from one corner.`
      ], index)
    };
  }
  if (closure) {
    const examples = rotate([
      [`The ${word} secures the opening, but you can still get in with one hand.`, `Listen to that clean click—it lines up without needing to be forced.`],
      [`I like that the ${word} gives you privacy without adding a bulky mechanism.`, `Even when the bag is standing open, this part guides the top back into place.`],
      [`The ${word} sits flush, so it does not interrupt the front of the bag.`, `I have put a full-size wallet inside, and the opening still closes properly.`],
      [`For commuting, the ${word} is reassuring because your essentials are not exposed.`, `Here is the motion in real time: press, release, and the bag opens smoothly.`]
    ], index);
    return {
      exampleSentences: examples,
      customerQuestion: rotate(['Is it easy to open?', 'Does the bag close securely?', 'Can you operate it with one hand?', 'Will it stay closed when the bag is full?'], index),
      hostAnswer: rotate([
        `It opens smoothly once your thumb finds the release point. You will not need to fight with it at the checkout.`,
        `Yes, the bag feels secure when it is closed. The ${word} meets cleanly and does not pop open with normal movement.`,
        `You can use it with one hand; let me demonstrate at normal speed. This is a really practical detail.`,
        `It stays closed with daily essentials inside. I would avoid overstuffing, but the ${word} does not feel delicate.`
      ], index)
    };
  }
  const examples = rotate([
    [`The ${word} helps the bag keep a clean profile instead of looking unfinished.`, `Let me tilt it toward the light so you can inspect the surface from edge to edge.`],
    [`This is the sort of ${word} you notice more in person—the proportions look carefully considered.`, `From the side, the construction stays neat with no puckering or unevenness.`],
    [`A strong ${word} matters because this area takes pressure whenever the bag is set down or carried.`, `I am zooming in so you can check the alignment rather than just taking my word for it.`],
    [`The finish around the ${word} is restrained, which keeps the overall design polished.`, `There are no obvious loose threads, gaps, or rough edges in this area.`]
  ], index);
  return {
    exampleSentences: examples,
    customerQuestion: rotate(['Can you show that detail closer?', 'Does this help the bag keep its shape?', 'Is there any visible wear there?', 'How is that part finished?'], index),
    hostAnswer: rotate([
      `Of course—here it is in close-up. The ${word} looks even and neatly finished from both sides.`,
      `It does contribute to the structure. The bag stands more cleanly because this area has enough support.`,
      `I am checking it under direct light now. I do not see significant wear around the ${word}, only normal handling at most.`,
      `For me, this is one of the details that makes the bag feel more premium. The finishing is precise without looking overworked.`
    ], index)
  };
}

function materialContent(word, index) {
  const [feel, care] = materialNotes[word] || ['pleasant and substantial', 'responds well to gentle care'];
  return {
    exampleSentences: rotate([
      [`This ${word} feels ${feel}, so it reads beautifully when the light moves across it.`, `For daily use, the good news is that it ${care}.`],
      [`Up close, the ${word} is ${feel}; it does not look flat or plasticky.`, `I would recommend this material to someone who wants luxury without overly fussy upkeep—it ${care}.`],
      [`You can see the character of the ${word} as I turn the bag; the surface is ${feel}.`, `Care-wise, remember that it ${care}, so a little attention will keep it looking fresh.`]
    ], index),
    customerQuestion: rotate(['Is the material easy to scratch?', 'How does it feel in person?', 'Can I carry it in light rain?', 'Is this difficult to care for?', 'Will this material hold its shape?'], index),
    hostAnswer: rotate([
      `The ${word} is ${feel}. In terms of upkeep, it ${care}, so I would call it manageable rather than high-maintenance.`,
      `In person, it feels ${feel}. I would use a soft cloth and remember that it ${care}.`,
      `This material is a good fit if you value a surface that is ${feel}. Care is straightforward because it ${care}.`,
      `Let me bring it closer to the camera—the texture is ${feel}. The main care point is that it ${care}.`,
      `I would not call it worry-free, but it is realistic for regular use: it feels ${feel} and ${care}.`
    ], index)
  };
}

function hardwareContent(word, index) {
  const isTone = /hardware/.test(word);
  return isTone ? {
    exampleSentences: rotate([
      [`The ${word} has a soft sheen, so it warms up the bag without looking too bright.`, `I would keep the metal dry and wipe fingerprints off with a soft cloth to slow oxidation.`],
      [`In natural light, the ${word} looks polished rather than mirror-shiny.`, `Fine hairline marks can happen with wear, but this finish does not show every touch.`],
      [`Notice how the ${word} works with the leather undertone; the combination feels deliberate.`, `Store the strap inside the dust bag so the metal does not rub against the leather.`]
    ], index),
    customerQuestion: rotate(['Does the hardware tarnish easily?', 'Is the metal very shiny in person?', 'Will the hardware show scratches?', 'Is the tone more yellow or more neutral?'], index),
    hostAnswer: rotate([
      `The ${word} has a balanced, polished finish. Keeping it dry and wiping it after use will help prevent dulling.`,
      `It is shiny enough to catch the light, but not overly yellow or mirror-bright. Fine marks can happen with normal wear.`,
      `Light surface scratches are possible, as with any polished metal. This finish disguises them better than a very high-gloss plate.`,
      `The tone reads fairly neutral in daylight. Store it away from humidity and avoid spraying perfume directly onto the metal.`
    ], index)
  } : {
    exampleSentences: rotate([
      [`The ${word} feels solid in the hand and moves without sticking or rattling.`, `I am showing it from the side so you can check the finish and the attachment.`],
      [`This ${word} has a smooth action; there is no rough metal catching against the leather.`, `Small functional pieces like this tell you a lot about the bag’s overall quality.`],
      [`The finish on the ${word} matches the larger hardware instead of looking like an afterthought.`, `I would keep keys in a separate pocket so they do not rub against this surface.`],
      [`There is enough weight in the ${word} to feel substantial, but it does not pull the bag out of shape.`, `From close up, the edges look smooth and the connection point feels secure.`]
    ], index),
    customerQuestion: rotate(['Does that piece feel secure?', 'Can you show how it works?', 'Is there any scratching on the metal?', 'Does it add much weight?'], index),
    hostAnswer: rotate([
      `Let me show you right here. The ${word} feels sturdy and the finish is still even.`,
      `It works smoothly and does not feel loose at the attachment. That is a practical quality check I always make.`,
      `I see only very fine handling marks on the metal. Keeping it away from keys will preserve the finish.`,
      `It adds a little substance, but not enough to make the bag uncomfortable. The placement keeps the weight balanced.`
    ], index)
  };
}

function colorContent(word, index) {
  const pairings = ['cream tailoring and gold jewelry', 'blue denim and a white shirt', 'black knitwear and loafers', 'camel outerwear and soft neutrals', 'a monochrome outfit with simple jewelry'];
  const moods = ['quiet and polished', 'fresh without feeling too bright', 'rich and easy to wear', 'modern but still understated', 'soft enough for everyday styling'];
  const pairing = rotate(pairings, index);
  const mood = rotate(moods, index);
  return {
    exampleSentences: rotate([
      [`${capitalize(word)} looks ${mood} on camera, especially next to ${pairing}.`, `If you usually wear neutrals, this shade adds interest without taking over the outfit.`],
      [`I would style this ${word} bag with ${pairing}; the contrast makes the color feel intentional.`, `Under natural light, the shade reads ${mood}, not harsh or overly saturated.`],
      [`This is not a difficult ${word}; it works with ${pairing} and transitions easily between seasons.`, `Against a simple outfit, the color becomes the focus while still feeling ${mood}.`]
    ], index),
    customerQuestion: rotate(['What would you wear this color with?', 'Does it look different in daylight?', 'Is the undertone warm or cool?', 'Can you compare it with the darker shade?', 'Would this color work year-round?'], index),
    hostAnswer: rotate([
      `If you prefer something ${mood}, ${word} is a lovely choice. I would pair it with ${pairing}.`,
      `In daylight, ${word} reads true and balanced rather than overly bright. It works especially well beside ${pairing}.`,
      `The undertone is subtle, so it will not fight the colors already in your wardrobe. Try it with ${pairing}.`,
      `Compared with the deeper option, this ${word} feels softer and more relaxed. I would choose it for lighter, low-key styling.`,
      `Yes, you can carry this beyond one season. ${capitalize(word)} looks ${mood} with ${pairing}, and it also works with simple black.`
    ], index)
  };
}

function shapeContent(word, index) {
  return {
    exampleSentences: rotate([
      [`The ${word} gives you a clean profile without sacrificing room for daily essentials.`, `On the body, the proportions feel balanced and do not overwhelm the outfit.`],
      [`If you like quick access and an easy carry, the ${word} makes a lot of sense.`, `I am turning sideways so you can compare its depth with the way it looks from the front.`],
      [`This ${word} works especially well for days when you want both hands free.`, `Even when filled, the shape stays neat instead of becoming bulky.`]
    ], index),
    customerQuestion: rotate(['Does it fit a phone?', 'Can you compare it with the smaller size?', 'Where does it sit on the body?', 'Is there enough room for everyday essentials?', 'Would this work for a petite frame?'], index),
    hostAnswer: rotate([
      `A standard phone fits comfortably, with room left for a cardholder and keys. The ${word} uses its interior space well.`,
      `This version gives you more usable depth than the smaller size without looking dramatically larger on the body.`,
      `Let me model it from the side. The ${word} sits close enough to feel secure and does not project too far.`,
      `I would say this is a strong everyday format. It holds the essentials most people actually carry without becoming bulky.`,
      `Yes, the proportion works on a petite frame. The ${word} has presence, but the clean outline keeps it from overwhelming you.`
    ], index)
  };
}

function brandContent(word) {
  return {
    exampleSentences: [`We have a beautiful ${word} piece coming up next, so stay with me.`, `If you collect ${word}, look closely at the house details on this model.`],
    customerQuestion: `How do you pronounce ${word}?`,
    hostAnswer: `Say it smoothly as one name: ${word}. Use the IPA above to place the stress naturally.`
  };
}

function buildContent(word, category, index) {
  if (category === 'Bag Anatomy') return anatomyContent(word, index);
  if (category === 'Materials') return materialContent(word, index);
  if (category === 'Hardware') return hardwareContent(word, index);
  if (category === 'Colors') return colorContent(word, index);
  if (category === 'Bag Types & Shapes') return shapeContent(word, index);
  if (category === 'Selling Phrases') {
    const [first, second, question, answer] = sellingScripts[word];
    return { exampleSentences: [first, second], customerQuestion: question, hostAnswer: answer };
  }
  if (category === 'Brand Pronunciation') return brandContent(word);
  return { exampleSentences: [], customerQuestion: '', hostAnswer: '' };
}

let idCounter = 1;
function makeItem(word, zh, pronunciation, category, extra = {}) {
  const content = buildContent(word, category, idCounter - 1);
  return {
    id: `lux-${String(idCounter++).padStart(3, '0')}`,
    word, pronunciation, chineseMeaning: zh, category,
    shortExplanation: extra.shortExplanation || descriptions[category]?.(word) || `A useful expression for luxury handbag livestream selling.`,
    imageSearchQuery: `${word} luxury handbag detail`,
    exampleSentences: extra.exampleSentences || content.exampleSentences,
    customerQuestion: extra.customerQuestion || content.customerQuestion,
    hostAnswer: extra.hostAnswer || content.hostAnswer,
    difficulty: extra.difficulty || (word.length > 16 ? 'advanced' : word.length > 9 ? 'intermediate' : 'beginner'),
    hex: extra.hex || null
  };
}

const VOCABULARY = [];
Object.entries(raws).forEach(([category, text]) => {
  text.trim().split('\n').forEach(line => {
    const [word, zh, pronunciation] = line.split('|');
    VOCABULARY.push(makeItem(word, zh, pronunciation, category, { hex: colorHex[word] }));
  });
});
qaPairs.forEach(([question, zh, pronunciation, answer]) => VOCABULARY.push(makeItem(question, zh, pronunciation, 'Customer Q&A', {
  shortExplanation: 'A common customer question with a clear, confident host response.',
  imageSearchQuery: `luxury handbag livestream ${question}`,
  exampleSentences: [question, answer], customerQuestion: question, hostAnswer: answer,
  difficulty: question.length > 24 ? 'intermediate' : 'beginner'
})));

const STORAGE_KEY = 'luxury-english-academy-v1';
const todayKey = () => new Date().toISOString().slice(0, 10);
const defaultState = { view: 'today', learned: [], favorites: [], learnedAt: {}, category: 'All', query: '', difficultOnly: false, random: false, randomSeed: Date.now(), cardIndex: 0, exploreTab: 'anatomy', quizType: 'en-zh', score: 0, answered: 0 };
let state = { ...defaultState, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') };
let quiz = null;
let deferredInstall = null;

const app = $('#app');
const titles = { today:'Today', cards:'Flashcards', explore:'Visual Dictionary', quiz:'Quiz Mode', live:'Practice Livestream', phone:'How to Open This on Phone' };
function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function escapeHTML(value = '') { return value.replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char])); }
function toast(message) { const el = $('#toast'); el.textContent = message; el.classList.add('show'); clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove('show'), 1900); }
function todayLearned() { return Object.entries(state.learnedAt || {}).filter(([, date]) => date === todayKey()).length; }
function setView(view) {
  state.view = view; save();
  $$('.nav-item').forEach(btn => btn.classList.toggle('active', btn.dataset.view === view));
  $('#viewTitle').textContent = titles[view];
  render(); window.scrollTo({ top: 0, behavior: 'smooth' });
}

function render() {
  const renders = { today: renderToday, cards: renderCards, explore: renderExplore, quiz: renderQuiz, live: renderLive, phone: renderPhone };
  renders[state.view]();
}

function renderToday() {
  const learnedToday = todayLearned();
  const pct = Math.min(100, learnedToday * 10);
  const review = state.favorites.length;
  app.innerHTML = `<div class="stack">
    <section class="card hero">
      <p class="eyebrow">Your daily lesson</p>
      <h2>${learnedToday >= 10 ? 'Goal complete. Beautiful work.' : `${10 - learnedToday} words to go`}</h2>
      <p>Build the language to describe every detail with confidence.</p>
      <div class="hero-actions"><button class="primary" data-action="study">${learnedToday ? 'Continue learning' : 'Start today’s lesson'}</button><button class="text-btn" data-action="random" style="color:#f2dfcc">Surprise me</button></div>
    </section>
    <section class="card">
      <div class="progress-head"><p>Daily goal</p><strong>${learnedToday} / 10</strong></div>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
    </section>
    <div class="stat-grid">
      <div class="stat"><strong>${state.learned.length}</strong><small>learned</small></div>
      <div class="stat"><strong>${review}</strong><small>difficult</small></div>
      <div class="stat"><strong>${VOCABULARY.length}</strong><small>total cards</small></div>
    </div>
    <div class="section-head"><h2>Study library</h2><button class="text-btn" data-action="all-cards">See all</button></div>
    <div class="category-grid">${Object.entries(categoryMeta).map(([name, [desc, icon]]) => `
      <button class="category-card" data-category="${name}"><span class="cat-icon">${icon}</span><strong>${name}</strong><small>${VOCABULARY.filter(v => v.category === name).length} cards</small></button>`).join('')}</div>
  </div>`;
}

function filteredCards() {
  let list = VOCABULARY.filter(item => state.category === 'All' || item.category === state.category);
  if (state.query) { const q = state.query.toLowerCase(); list = list.filter(item => `${item.word} ${item.chineseMeaning} ${item.category}`.toLowerCase().includes(q)); }
  if (state.difficultOnly) list = list.filter(item => state.favorites.includes(item.id));
  if (state.random) {
    const rank = value => [...`${value}-${state.randomSeed}`].reduce((sum, char) => ((sum << 5) - sum + char.charCodeAt(0)) | 0, 0);
    list = [...list].sort((a, b) => rank(a.id) - rank(b.id));
  }
  return list;
}

function renderCards() {
  const list = filteredCards();
  if (state.cardIndex >= list.length) state.cardIndex = Math.max(0, list.length - 1);
  const item = list[state.cardIndex];
  app.innerHTML = `<div class="stack">
    <div class="search-box"><input id="searchInput" type="search" placeholder="Search words or 中文…" value="${escapeHTML(state.query)}" autocomplete="off"></div>
    <div class="filter-row">
      ${['All', ...Object.keys(categoryMeta)].map(cat => `<button class="chip ${state.category === cat ? 'active' : ''}" data-filter="${cat}">${cat}</button>`).join('')}
    </div>
    <div class="row">
      <label class="chip"><input id="difficultToggle" type="checkbox" ${state.difficultOnly ? 'checked' : ''}> ★ Difficult only</label>
      <button class="chip ${state.random ? 'active' : ''}" data-action="toggle-random">↝ Random</button>
    </div>
    ${item ? cardHTML(item) : `<div class="card empty"><h3>No cards found</h3><p>Try a different search or turn off the difficult-only filter.</p></div>`}
    ${item ? `<div class="card-actions"><button class="round-btn" data-action="prev" aria-label="Previous card">←</button><button class="primary" data-action="learned">${state.learned.includes(item.id) ? '✓ Learned' : 'Mark as learned'}</button><button class="round-btn" data-action="next" aria-label="Next card">→</button></div><div class="counter">${state.cardIndex + 1} of ${list.length} · swipe left or right</div>` : ''}
  </div>`;
  attachSwipe();
}

function cardHTML(item, compact = false) {
  return `<article class="card flashcard ${compact ? 'compact-card' : ''}" data-card-id="${item.id}">
    <div class="card-top"><span class="badge">${item.category}</span><button class="star ${state.favorites.includes(item.id) ? 'active' : ''}" data-action="favorite" data-id="${item.id}" aria-label="Favorite">★</button></div>
    <div class="word-block"><h2>${escapeHTML(item.word)}</h2><div class="pronunciation">${escapeHTML(item.pronunciation)}</div><p class="meaning">${escapeHTML(item.chineseMeaning)}</p></div>
    <div class="details"><p>${escapeHTML(item.shortExplanation)}</p><p class="example">“${escapeHTML(item.exampleSentences[0])}”<br>“${escapeHTML(item.exampleSentences[1])}”</p><div class="qa-mini"><b>Customer asks</b>${escapeHTML(item.customerQuestion)}<br><br><b>Host answer</b>${escapeHTML(item.hostAnswer)}</div></div>
  </article>`;
}

function renderExplore() {
  app.innerHTML = `<div class="stack">
    <div class="tabs"><button class="${state.exploreTab === 'anatomy' ? 'active' : ''}" data-explore="anatomy">Bag Anatomy</button><button class="${state.exploreTab === 'colors' ? 'active' : ''}" data-explore="colors">Colors</button><button class="${state.exploreTab === 'brands' ? 'active' : ''}" data-explore="brands">Brands</button></div>
    <div id="exploreContent">${state.exploreTab === 'anatomy' ? anatomyHTML() : state.exploreTab === 'colors' ? colorsHTML() : brandsHTML()}</div>
  </div>`;
}

function anatomyHTML() {
  const labels = ['handle','strap','flap','closure','hardware','body','base','feet','zipper','lining','interior pocket','compartment'];
  return `<section class="card"><div class="section-head"><div><p class="eyebrow">Tap a label</p><h2>Handbag anatomy</h2></div></div>
    <div class="anatomy-wrap">
      <svg class="bag-svg" viewBox="0 0 420 340" role="img" aria-label="Illustrated handbag anatomy">
        <path d="M90 105C92 33 130 15 210 15s118 18 120 90" fill="none" stroke="#685648" stroke-width="17" stroke-linecap="round"/>
        <path d="M58 112Q55 92 78 88H342Q365 92 362 112L384 300Q386 323 360 325H60Q34 323 36 300Z" fill="#d8c4ae" stroke="#685648" stroke-width="5"/>
        <path d="M57 114Q210 180 363 114L350 240Q210 284 70 240Z" fill="#b79b7f" stroke="#685648" stroke-width="4"/>
        <path d="M152 259H268V300H152Z" fill="#eadfd2" stroke="#685648" stroke-width="3" stroke-dasharray="7 5"/>
        <rect x="191" y="176" width="38" height="48" rx="9" fill="#d5b36b" stroke="#685648" stroke-width="4"/>
        <circle cx="210" cy="198" r="5" fill="#685648"/><path d="M49 321h24v12H49zm298 0h24v12h-24" fill="#d5b36b" stroke="#685648" stroke-width="3"/>
        <path d="M110 102h200" stroke="#d5b36b" stroke-width="8" stroke-dasharray="9 5"/>
      </svg>
      ${labels.map((label, i) => `<button class="anatomy-label ${i % 2 ? 'right' : 'left'}" data-part="${label}">${label}</button>`).join('')}
    </div></section><div class="tip">Tip: use “Let me show you the…” before any bag part to sound natural on camera.</div>`;
}

function colorsHTML() {
  const colors = VOCABULARY.filter(v => v.category === 'Colors');
  return `<div class="section-head"><div><p class="eyebrow">${colors.length} shades</p><h2>Color dictionary</h2></div></div><div class="swatch-grid">${colors.map(item => `<button class="swatch-card" data-color-id="${item.id}"><div class="swatch" style="background:${item.hex}"></div><strong>${item.word}</strong><small>${item.chineseMeaning}</small><small>${item.pronunciation}</small></button>`).join('')}</div>`;
}

function brandsHTML() {
  const brands = VOCABULARY.filter(v => v.category === 'Brand Pronunciation');
  return `<section><div class="section-head"><div><p class="eyebrow">Say it with confidence</p><h2>Brand pronunciation</h2></div></div><div class="brand-list">${brands.map(item => `<div class="brand-row"><strong>${item.word}</strong><span>${item.pronunciation} · ${item.chineseMeaning}</span></div>`).join('')}</div></section>`;
}

function openCard(item) {
  state.category = item.category; state.query = item.word; state.cardIndex = 0; state.difficultOnly = false; state.random = false; setView('cards');
}

function generateQuiz() {
  let pool = VOCABULARY.filter(v => !['Brand Pronunciation'].includes(v.category));
  if (state.quizType === 'color') pool = pool.filter(v => v.category === 'Colors');
  if (state.quizType === 'part') pool = pool.filter(v => v.category === 'Bag Anatomy');
  if (state.quizType === 'qa') pool = pool.filter(v => v.category === 'Customer Q&A');
  const correct = pool[Math.floor(Math.random() * pool.length)];
  const getter = state.quizType === 'en-zh' ? v => v.chineseMeaning
    : state.quizType === 'zh-en' || state.quizType === 'color' || state.quizType === 'part' ? v => v.word
    : v => v.hostAnswer;
  const options = [correct];
  while (options.length < 4) {
    const pick = pool[Math.floor(Math.random() * pool.length)];
    if (!options.some(v => getter(v) === getter(pick))) options.push(pick);
  }
  quiz = { correct, options: options.sort(() => Math.random() - .5), answered: false, selected: null };
}

function renderQuiz() {
  if (!quiz) generateQuiz();
  const q = quiz.correct;
  const prompts = {
    'en-zh': ['English → Chinese', q.word], 'zh-en': ['Chinese → English', q.chineseMeaning],
    color: ['Name this color', ''], part: ['Name this bag part', q.chineseMeaning],
    qa: ['Choose the best host answer', q.customerQuestion]
  };
  const getter = state.quizType === 'en-zh' ? v => v.chineseMeaning : state.quizType === 'qa' ? v => v.hostAnswer : v => v.word;
  app.innerHTML = `<div class="stack">
    <div class="row"><select class="quiz-type" id="quizType" aria-label="Quiz type">
      <option value="en-zh" ${state.quizType === 'en-zh' ? 'selected' : ''}>English → Chinese</option><option value="zh-en" ${state.quizType === 'zh-en' ? 'selected' : ''}>Chinese → English</option><option value="color" ${state.quizType === 'color' ? 'selected' : ''}>Color swatch → name</option><option value="part" ${state.quizType === 'part' ? 'selected' : ''}>Bag part → English</option><option value="qa" ${state.quizType === 'qa' ? 'selected' : ''}>Customer question → answer</option>
    </select></div>
    <div class="score-row"><span class="score-pill">Score ${state.score}</span><span class="score-pill">${state.answered} answered</span></div>
    <section class="card quiz-card"><p class="quiz-kicker">${prompts[state.quizType][0]}</p>${state.quizType === 'color' ? `<div class="quiz-swatch" style="background:${q.hex}"></div>` : `<div class="quiz-question">${escapeHTML(prompts[state.quizType][1])}</div>`}
      <div class="answers">${quiz.options.map((option, index) => {
        const isCorrect = option.id === q.id; const selected = quiz.selected === option.id;
        const cls = quiz.answered ? (isCorrect ? 'correct' : selected ? 'wrong' : '') : '';
        return `<button class="answer-btn ${cls}" data-answer="${option.id}" ${quiz.answered ? 'disabled' : ''}>${escapeHTML(getter(option))}</button>`;
      }).join('')}</div>
    </section>
    ${quiz.answered ? `<button class="primary" data-action="next-question">Next question →</button>` : ''}
  </div>`;
}

const livePrompts = [
  { task:'Introduce a small black crossbody bag with gold-tone hardware.', color:'black', material:'grained leather', hardware:'gold-tone hardware', size:'compact', type:'crossbody bag' },
  { task:'Present an ivory top-handle bag in smooth calfskin.', color:'ivory', material:'smooth calfskin', hardware:'silver-tone hardware', size:'structured and spacious', type:'top-handle bag' },
  { task:'Sell a taupe everyday tote with a removable strap.', color:'taupe', material:'pebbled leather', hardware:'subtle gold-tone hardware', size:'spacious', type:'tote bag' },
  { task:'Describe a burgundy mini bag for an evening look.', color:'burgundy', material:'lambskin', hardware:'polished gold-tone hardware', size:'mini and compact', type:'mini bag' },
  { task:'Introduce a navy nylon shoulder bag for travel.', color:'navy', material:'lightweight nylon', hardware:'silver-tone hardware', size:'practical', type:'shoulder bag' }
];
let livePrompt = livePrompts[Math.floor(Math.random() * livePrompts.length)];

function sampleAnswer(p) {
  return `Hi everyone, today I’d like to show you this beautiful ${p.color} ${p.type}. It is crafted from ${p.material} and finished with ${p.hardware}, which gives it a very elegant and premium look. The size is ${p.size} but practical, with room for your daily essentials. It is easy to style for everyday use, and you can also dress it up for dinner. I think it’s a very versatile piece.`;
}

function renderLive() {
  app.innerHTML = `<div class="stack">
    <section class="card prompt-card"><p class="eyebrow">Your speaking prompt</p><blockquote>“${livePrompt.task}”</blockquote></section>
    <section class="card"><div class="section-head"><div><p class="eyebrow">Aim for 30–45 seconds</p><h2>Talking points</h2></div></div><div class="checklist">${['mention color','mention material','mention hardware','mention size','mention styling','mention daily use'].map(point => `<label class="check-item"><input type="checkbox"> <span>${point}</span></label>`).join('')}</div></section>
    <div class="row"><button class="secondary" data-action="new-prompt">↝ New prompt</button><button class="primary" data-action="show-sample">Show sample answer</button></div>
    <section class="card hidden" id="sampleAnswer"><p class="eyebrow">Model answer</p><p class="sample">${sampleAnswer(livePrompt)}</p></section>
    <div class="tip"><strong>Subway practice:</strong> read once silently, then say it aloud without looking. Keep your sentences short and warm.</div>
  </div>`;
}

function renderPhone() {
  app.innerHTML = `<div class="stack phone-guide">
    <section class="card guide-intro">
      <p class="eyebrow">Mobile setup · 手机使用说明</p>
      <h2>How to Open This on Phone</h2>
      <p>For the full installable and offline experience, publish the project first, then open its public link on your phone.</p>
      <p class="zh-copy">如需完整使用安装到主屏幕、离线访问和 PWA 功能，请先发布项目，再用手机打开公开链接。</p>
    </section>
    <section class="card guide-card">
      <div class="guide-number">A</div>
      <div><p class="eyebrow">Recommended · 推荐</p><h2>GitHub Pages</h2></div>
      <ol>
        <li><span>Upload the project folder to GitHub.</span><small>将项目文件夹上传到 GitHub。</small></li>
        <li><span>Enable GitHub Pages.</span><small>在仓库设置中启用 GitHub Pages。</small></li>
        <li><span>Open the link in Safari or Chrome on your phone.</span><small>在手机的 Safari 或 Chrome 中打开生成的链接。</small></li>
        <li><span>On iPhone, tap Share → Add to Home Screen.</span><small>在 iPhone 上，点击“分享”→“添加到主屏幕”。</small></li>
      </ol>
    </section>
    <section class="card guide-card">
      <div class="guide-number">B</div>
      <div><p class="eyebrow">Fastest · 最快捷</p><h2>Netlify</h2></div>
      <ol>
        <li><span>Drag the project folder to Netlify.</span><small>将项目文件夹拖到 Netlify 上传区域。</small></li>
        <li><span>Get a public link.</span><small>获取 Netlify 生成的公开链接。</small></li>
        <li><span>Open the link on your phone.</span><small>在手机浏览器中打开该链接。</small></li>
        <li><span>Add it to your Home Screen.</span><small>将网页添加到手机主屏幕。</small></li>
      </ol>
    </section>
    <section class="card guide-card warning-card">
      <div class="guide-number">C</div>
      <div><p class="eyebrow">Temporary test · 临时测试</p><h2>Open the HTML file locally</h2></div>
      <p>You can usually send the HTML file to your phone and open it directly. However, PWA installation, offline caching, and service worker features may not work correctly.</p>
      <p class="zh-copy">通常可以把 HTML 文件直接发送到手机并打开，但 PWA 安装、离线缓存和 service worker 功能可能无法正常运行。最好使用 GitHub Pages 或 Netlify。</p>
    </section>
  </div>`;
}

function moveCard(delta) {
  const list = filteredCards(); if (!list.length) return;
  state.cardIndex = (state.cardIndex + delta + list.length) % list.length; save(); renderCards();
}
function attachSwipe() {
  const card = $('.flashcard'); if (!card) return; let startX = 0;
  card.addEventListener('touchstart', e => startX = e.changedTouches[0].clientX, { passive: true });
  card.addEventListener('touchend', e => { const dx = e.changedTouches[0].clientX - startX; if (Math.abs(dx) > 55) moveCard(dx < 0 ? 1 : -1); }, { passive: true });
}

document.addEventListener('click', event => {
  const nav = event.target.closest('[data-view]'); if (nav) return setView(nav.dataset.view);
  const cat = event.target.closest('[data-category]'); if (cat) { state.category = cat.dataset.category; state.query = ''; state.cardIndex = 0; return setView('cards'); }
  const filter = event.target.closest('[data-filter]'); if (filter) { state.category = filter.dataset.filter; state.cardIndex = 0; save(); return renderCards(); }
  const explore = event.target.closest('[data-explore]'); if (explore) { state.exploreTab = explore.dataset.explore; save(); return renderExplore(); }
  const part = event.target.closest('[data-part]'); if (part) { const item = VOCABULARY.find(v => v.category === 'Bag Anatomy' && v.word === part.dataset.part); if (item) return openCard(item); }
  const color = event.target.closest('[data-color-id]'); if (color) { const item = VOCABULARY.find(v => v.id === color.dataset.colorId); if (item) return openCard(item); }
  const answer = event.target.closest('[data-answer]'); if (answer && !quiz.answered) {
    quiz.selected = answer.dataset.answer; quiz.answered = true; state.answered++;
    if (quiz.selected === quiz.correct.id) { state.score++; toast('Correct — beautifully done.'); } else toast(`The answer is “${quiz.correct.word}”.`);
    save(); return renderQuiz();
  }
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (!action) return;
  if (action === 'study' || action === 'all-cards') { state.category = 'All'; state.query = ''; state.difficultOnly = false; state.random = false; state.cardIndex = 0; setView('cards'); }
  if (action === 'random') { state.category = 'All'; state.query = ''; state.random = true; state.randomSeed = Date.now(); state.cardIndex = 0; setView('cards'); }
  if (action === 'toggle-random') { state.random = !state.random; if (state.random) state.randomSeed = Date.now(); state.cardIndex = 0; save(); renderCards(); }
  if (action === 'prev') moveCard(-1);
  if (action === 'next') moveCard(1);
  if (action === 'favorite') {
    const id = event.target.closest('[data-id]').dataset.id;
    state.favorites = state.favorites.includes(id) ? state.favorites.filter(x => x !== id) : [...state.favorites, id];
    save(); render(); toast(state.favorites.includes(id) ? 'Added to difficult words.' : 'Removed from difficult words.');
  }
  if (action === 'learned') {
    const item = filteredCards()[state.cardIndex]; if (!item) return;
    if (state.learned.includes(item.id)) { state.learned = state.learned.filter(x => x !== item.id); delete state.learnedAt[item.id]; toast('Marked for review.'); }
    else { state.learned.push(item.id); state.learnedAt[item.id] = todayKey(); toast(todayLearned() >= 10 ? 'Daily goal complete! ✦' : 'Learned — keep going.'); }
    save(); renderCards();
  }
  if (action === 'next-question') { generateQuiz(); renderQuiz(); }
  if (action === 'new-prompt') { const old = livePrompt; do { livePrompt = livePrompts[Math.floor(Math.random() * livePrompts.length)]; } while (livePrompt === old); renderLive(); }
  if (action === 'show-sample') { $('#sampleAnswer')?.classList.toggle('hidden'); event.target.textContent = $('#sampleAnswer')?.classList.contains('hidden') ? 'Show sample answer' : 'Hide sample answer'; }
});

document.addEventListener('input', event => {
  if (event.target.id === 'searchInput') { state.query = event.target.value; state.cardIndex = 0; save(); renderCards(); $('#searchInput')?.focus(); }
  if (event.target.id === 'difficultToggle') { state.difficultOnly = event.target.checked; state.cardIndex = 0; save(); renderCards(); }
});
document.addEventListener('change', event => {
  if (event.target.id === 'quizType') { state.quizType = event.target.value; state.score = 0; state.answered = 0; generateQuiz(); save(); renderQuiz(); }
});

window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); deferredInstall = event; $('#installBtn').hidden = false; });
$('#installBtn').addEventListener('click', async () => { if (!deferredInstall) return; deferredInstall.prompt(); await deferredInstall.userChoice; deferredInstall = null; $('#installBtn').hidden = true; });
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js'));

// First paint
if (!titles[state.view]) state.view = 'today';
$$('.nav-item').forEach(btn => btn.classList.toggle('active', btn.dataset.view === state.view));
$('#viewTitle').textContent = titles[state.view];
render();
