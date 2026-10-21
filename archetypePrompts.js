// Промты для генерации иллюстраций: 12 архетипов × 13 карточек (1 персонаж + 12 сюжетов).
// Порядок и имена файлов совпадают с archetypeCards.js: h0 — персонаж, h1–h12 — сюжеты.
// Итоговый промт собирается функцией buildPrompt(): общий стиль + палитра гильдии + описание героя + сцена.
// Чтобы поменять стиль всех 156 карт, правьте только STYLE, NEGATIVE и GUILD_PALETTE.

const STYLE = "flat editorial illustration, bold simple shapes, limited palette, soft film grain, one clear focal point, generous negative space, vertical 2:3 tarot-like card composition, contemporary Russian city in 2026, no text, no letters, no logos";
const NEGATIVE = "text, letters, numbers, watermark, logos, brand names, photorealistic face, extra fingers, clutter, busy background";

const GUILD_PALETTE = {
 "Создатели": "palette of deep crimson, charcoal and warm cream",
 "Исследователи": "palette of teal, sand and amber",
 "Хранители": "palette of forest green, old gold and ivory",
 "Проводники": "palette of violet, coral and soft peach"
};

const archetypePrompts = {

 // ───────── СОЗДАТЕЛИ ─────────
 "Герой": {
  guild: "Создатели",
  protagonist: "a broad-shouldered middle-aged man in a worn work jacket with tired kind eyes",
  character: { image: "img/h0.jpg", prompt: "stands at the centre of a dim workshop holding someone else's bag in one hand and a key ring in the other, small figures behind him, he stands slightly apart from them" },
  plots: [
   { image: "img/h1.jpg", title: "Ночная авария", prompt: "kneels in a dark flooded workshop at night with both hands on a huge pipe valve, water spraying, an empty doorway behind him" },
   { image: "img/h2.jpg", title: "Отстающий новичок", prompt: "walks ahead carrying two heavy loads while a much smaller exhausted figure lags far behind" },
   { image: "img/h3.jpg", title: "Отказ от помощи", prompt: "reaches a hand toward an elderly woman lifting a heavy box alone, she turns her face away" },
   { image: "img/h4.jpg", title: "Обещание и боль", prompt: "limps on a bandaged knee beside an unfinished wooden porch with a hammer in hand, first snow falling" },
   { image: "img/h5.jpg", title: "Накал на собрании", prompt: "stands between two shouting figures with a clenched trembling fist, hot red glow behind him" },
   { image: "img/h6.jpg", title: "Цена похвалы", prompt: "stands on a small podium under warm applause, a crack running through his armored smile, an empty chair behind him" },
   { image: "img/h7.jpg", title: "Делёж запасов", prompt: "stands at a table beside a half-empty storeroom shelf, a family at the door, he quietly slides a box under the table" },
   { image: "img/h8.jpg", title: "Срыв ученицы", prompt: "faces a young woman crying into her hands, his stern posture just beginning to soften" },
   { image: "img/h9.jpg", title: "Виноватый Денис", prompt: "points an accusing finger at a shrinking figure in front of a silent crowd" },
   { image: "img/h10.jpg", title: "Вина за отдых", prompt: "sits on a bench in an empty sunny park glancing anxiously over his shoulder at a distant lit window" },
   { image: "img/h11.jpg", title: "Наводнение", prompt: "stands on a flooded roof between a stack of archive boxes and a distant village in water, reaching toward both" },
   { image: "img/h12.jpg", title: "Пустота после победы", prompt: "sits alone on a hilltop at dawn with a helmet in his lap, vast empty horizon, a banner lying in the grass" }
  ]
 },
 "Бунтарь": {
  guild: "Создатели",
  protagonist: "a lean woman in her thirties in a battered denim jacket with cropped hair and a direct unsmiling gaze",
  character: { image: "img/b0.jpg", prompt: "stands before a crumbling grand staircase holding a phone with an active recording in one hand and a cut red ribbon in the other, an empty throne-like chair beside her" },
  plots: [
   { image: "img/b1.jpg", title: "Тайные гранты", prompt: "holds up a ledger of crossed-out figures in front of a podium where a smiling leader hands envelopes to his circle" },
   { image: "img/b2.jpg", title: "Все «за»", prompt: "sits as the only person with a lowered hand in a room where everyone raises theirs, jaw clenched" },
   { image: "img/b3.jpg", title: "Охота продолжается", prompt: "stands over a toppled signpost already looking with hungry eyes at the next sign across the street" },
   { image: "img/b4.jpg", title: "Ошибка друга", prompt: "holds a folded note and looks at a close friend who avoids her eyes, a cracked project model on the table between them" },
   { image: "img/b5.jpg", title: "Резкий пост", prompt: "throws a glowing phone screen like a torch, half the crowd cheering and half turning away, her silhouette alone" },
   { image: "img/b6.jpg", title: "Место в совете", prompt: "pauses at the threshold of a council chamber with a glass table, her reflection in the glass wearing a suit" },
   { image: "img/b7.jpg", title: "Срыв собрания", prompt: "leads a small crowd of young people toward a ceremonial hall, shaking a banner whose face is blank" },
   { image: "img/b8.jpg", title: "Роль неудобного", prompt: "stands on a stage in a spotlight with a megaphone, the audience as dark silhouettes, her own face half hidden behind a mask" },
   { image: "img/b9.jpg", title: "Чужая переписка", prompt: "holds a glowing phone with a leaked conversation, her thumb hovering over a send button, a boss figure dissolving into numbers" },
   { image: "img/b10.jpg", title: "Чат недовольных", prompt: "sits in a dim circle of hooded figures whose words are drawn as sharp knives" },
   { image: "img/b11.jpg", title: "Старая критика", prompt: "stands at a hospital door holding flowers, hesitating, her shadow on the wall shows a raised fist" },
   { image: "img/b12.jpg", title: "Поселение без правил", prompt: "stands at a fork: one path to a bare field with a lone tent, the other back toward an old building tangled in ropes" }
  ]
 },
 "Маг": {
  guild: "Создатели",
  protagonist: "a slender androgynous person in a long dark coat with half-closed eyes and a faint smile",
  character: { image: "img/w0.jpg", prompt: "sits at a table with a candle, tarot cards and a softly glowing phone, the shadow on the wall far larger than the figure" },
  plots: [
   { image: "img/w1.jpg", title: "Тревога общины", prompt: "stands calmly in a room of anxious figures, a soft glow around him, one hand hidden behind his back with fingers crossed" },
   { image: "img/w2.jpg", title: "Чужой выбор", prompt: "holds a tarot card toward a pleading woman, her own shadow holds a different card" },
   { image: "img/w3.jpg", title: "Чутьё без слов", prompt: "walks confidently across a foggy path while a confused group behind him holds a map" },
   { image: "img/w4.jpg", title: "Уход в практики", prompt: "floats cross-legged above the floor with closed eyes, unwashed dishes and a clock below, a friend knocking at the door" },
   { image: "img/w5.jpg", title: "Мягкое подведение", prompt: "gently moves chess pieces shaped like small people with invisible threads attached to his fingers" },
   { image: "img/w6.jpg", title: "Ирония над верящими", prompt: "smirks behind a mirror mask at a row of wide-eyed people holding paper lanterns" },
   { image: "img/w7.jpg", title: "Слова при горе", prompt: "whispers to a grieving person, glowing words wrapping them like a bandage that hides their tears" },
   { image: "img/w8.jpg", title: "Тревожный сон", prompt: "a sleeping figure with a house of cards collapsing above his head, other sleepers ignoring it" },
   { image: "img/w9.jpg", title: "Практика вместо терапии", prompt: "sits in a circle of incense smoke with a hand on his chest, a medicine bottle and a phone lying ignored nearby" },
   { image: "img/w10.jpg", title: "Роль гуру", prompt: "stands lifted onto a pedestal surrounded by a ring of people reaching toward him with letters" },
   { image: "img/w11.jpg", title: "Покой и молчание", prompt: "sits in a calm lotus pose while two figures argue silently behind him, his hands clenched in his lap" },
   { image: "img/w12.jpg", title: "Ритуал сплочения", prompt: "lights a circle of candles with a crowd of dim figures inside it, some stepping back toward the door" }
  ]
 },

 // ───────── ИССЛЕДОВАТЕЛИ ─────────
 "Простодушный": {
  guild: "Исследователи",
  protagonist: "a young man with tousled light hair in a bright yellow jacket with an open warm face",
  character: { image: "img/p0.jpg", prompt: "stands smiling with a cup of tea and an open palm, a night street of neon signs behind him, small shadowy figures watching" },
  plots: [
   { image: "img/p1.jpg", title: "Звонок «из банка»", prompt: "holds a phone to his ear with a trusting smile, a thin red thread from the phone looping around his wallet" },
   { image: "img/p2.jpg", title: "Лёгкие проценты", prompt: "reaches toward a glowing golden staircase of coins rising from a chat bubble, others already climbing, a trapdoor beneath the steps" },
   { image: "img/p3.jpg", title: "Долг до пятницы", prompt: "hands a banknote to a smiling friend whose pockets are full of unpaid bills" },
   { image: "img/p4.jpg", title: "Сбор без сметы", prompt: "drops coins into a jar held by a figure in a shadowy hallway, neighbours pushing envelopes forward" },
   { image: "img/p5.jpg", title: "Тревога за рассрочку", prompt: "reaches for a glowing bottle on a shop pedestal, a very long receipt trailing to the floor behind him" },
   { image: "img/p6.jpg", title: "Аренда на слово", prompt: "shakes hands with a smiling landlord who hides a blank sheet of paper behind his back" },
   { image: "img/p7.jpg", title: "Вечное «потом»", prompt: "carries a stack of papers up a staircase in a night office toward a carrot dangling from a manager's hand" },
   { image: "img/p8.jpg", title: "Страшные новости", prompt: "holds a smiley balloon while seated among worried relatives whose phones glow with red alarms" },
   { image: "img/p9.jpg", title: "Заблокированный выезд", prompt: "waves cheerfully from a window at a courtyard where parked cars block the exit gate" },
   { image: "img/p10.jpg", title: "Билет для знакомой", prompt: "holds out a train ticket toward a phone screen showing a figure whose face is hidden behind a heart" },
   { image: "img/p11.jpg", title: "Чужая карта", prompt: "holds out a plastic bank card to a smiling colleague whose shadow has many hands" },
   { image: "img/p12.jpg", title: "Сбор на лечение", prompt: "looks at a tearful post on a phone with a finger hovering over a transfer button, two crowds arguing at his sides" }
  ]
 },
 "Искатель": {
  guild: "Исследователи",
  protagonist: "a traveler in their late twenties with a backpack and a windbreaker and restless eyes",
  character: { image: "img/i0.jpg", prompt: "stands on a night railway platform with one foot on the train step, a phone showing a map in his hand, warm apartment windows glowing behind him" },
  plots: [
   { image: "img/i1.jpg", title: "Снова увольняться", prompt: "stands at an office door with a half-finished project on the desk behind him, another door glowing in the distance" },
   { image: "img/i2.jpg", title: "Переезд из города", prompt: "balances on a tightrope between a skyline of tall city towers and a green distant town, bag half packed" },
   { image: "img/i3.jpg", title: "Поездки или дом", prompt: "sits atop a pile of travel tickets while friends in the background hold keys to a small house" },
   { image: "img/i4.jpg", title: "Свобода фриланса", prompt: "juggles many glowing balls of different colours by a rainy window with loose papers around him" },
   { image: "img/i5.jpg", title: "Ретрит на Алтае", prompt: "stands on a mountain summit among a crowd of identical meditating silhouettes, holding an empty hand" },
   { image: "img/i6.jpg", title: "Чужой план", prompt: "holds a ready-made folded map handed by an older mentor, a different path faintly drawn under his foot" },
   { image: "img/i7.jpg", title: "Возвращение домой", prompt: "stands at a small-town road at dusk with a lit family window in the distance and a bus stop behind him" },
   { image: "img/i8.jpg", title: "Восхищённый новичок", prompt: "a younger figure looks up at him with admiration while he feels the heavy weight of his own backpack" },
   { image: "img/i9.jpg", title: "Дом на год", prompt: "stands before a cosy open room with one hand on the door frame and the other gripping his backpack strap" },
   { image: "img/i10.jpg", title: "Окончательные ответы", prompt: "stands at the threshold of a glowing sealed dome where robed figures wave him in, friends fading behind him" },
   { image: "img/i11.jpg", title: "Коллекция «на потом»", prompt: "stands in a library where floating bookmarks pile up like snow around him, none of them opened" },
   { image: "img/i12.jpg", title: "Блог странника", prompt: "poses on a scenic cliff for a phone camera while, outside the frame, the real scene is a tired figure on a grey road" }
  ]
 },
 "Мудрец": {
  guild: "Исследователи",
  protagonist: "a thin older man with round glasses in a grey cardigan",
  character: { image: "img/m0.jpg", prompt: "sits at a desk piled with books, laptop and charts with city lights through the window and a cold cup of tea" },
  plots: [
   { image: "img/m1.jpg", title: "Ещё один фактор", prompt: "sits at a huge map of tables covered with arrows and question marks while a clock melts beside him" },
   { image: "img/m2.jpg", title: "Дыра в идее", prompt: "points a magnifying glass at a crack in a glowing ideal-city model built by an excited smaller figure" },
   { image: "img/m3.jpg", title: "Слёзы коллеги", prompt: "holds a chart in one hand and extends the other awkwardly toward a crying colleague" },
   { image: "img/m4.jpg", title: "Красивый фальшивый отчёт", prompt: "holds a flawless printed report whose footnote lines trail into thin air as ghostly threads" },
   { image: "img/m5.jpg", title: "Спор о шуме", prompt: "stands before a scale balanced between a loud neighbour and a trembling elderly one, a ruler in his hand" },
   { image: "img/m6.jpg", title: "Вопрос о счастье", prompt: "stands behind a glass wall holding a closed book while the shadow of a young woman asks him a question" },
   { image: "img/m7.jpg", title: "Решение без данных", prompt: "stands at a fork in fog with no signposts, a crowd waiting behind him, a coin in his hand" },
   { image: "img/m8.jpg", title: "Эксперт без знаний", prompt: "stands on a small podium in a spotlight while a young newcomer whispers the answer from behind a curtain" },
   { image: "img/m9.jpg", title: "Учение и врач", prompt: "holds an old thick book while a doctor shows a screen, the book cracks along its spine" },
   { image: "img/m10.jpg", title: "Чужая ошибка", prompt: "watches from a balcony as a young team builds a leaning tower of cards on a table below" },
   { image: "img/m11.jpg", title: "Непонятный лонгрид", prompt: "stands at the base of an absurdly tall tower of paper scrolls that three small people try to read" },
   { image: "img/m12.jpg", title: "Расчёт и чувство", prompt: "holds a calculator in one hand and presses the other to his chest where a warm light flickers, two small figures waiting below" }
  ]
 },

 // ───────── ХРАНИТЕЛИ ─────────
 "Творец": {
  guild: "Хранители",
  protagonist: "a woman in paint-stained overalls with headphones around her neck",
  character: { image: "img/t0.jpg", prompt: "stands before a huge unfinished wall mural with paint on her hands and crumpled sketches at her feet" },
  plots: [
   { image: "img/t1.jpg", title: "Невидимый изъян", prompt: "stands on a ladder before a nearly finished installation, scrutinizing one tiny glowing flaw with a loupe, gallery doors opening behind her" },
   { image: "img/t2.jpg", title: "Мурал и жильцы", prompt: "stands before a wall mural while many hands with brushes reach in from the sides to add stripes" },
   { image: "img/t3.jpg", title: "Повторить успех", prompt: "stands amid a conveyor belt of identical prints, holding a blank canvas she is afraid to touch" },
   { image: "img/t4.jpg", title: "Работа друга", prompt: "looks over a friend's shoulder at his glowing painting, her own palette tinged green" },
   { image: "img/t5.jpg", title: "Вечное откладывание", prompt: "sits before a blank canvas while calendar pages fall like leaves, a friend holding out a pencil" },
   { image: "img/t6.jpg", title: "Вечер памяти", prompt: "builds a small memorial of lanterns in a courtyard, the shapes pulled by many hands of different ages" },
   { image: "img/t7.jpg", title: "Соавтор", prompt: "stands with a partner before a split canvas, each holding the same brush" },
   { image: "img/t8.jpg", title: "«Кому это нужно?»", prompt: "stands before her artwork while a small cold comment bubble floats above it" },
   { image: "img/t9.jpg", title: "Заказ против ценностей", prompt: "holds a golden commission envelope with a dark stain on it, a faceless client in a suit standing behind her" },
   { image: "img/t10.jpg", title: "Ученик просит технику", prompt: "holds a locked toolbox tightly against her chest while a young apprentice looks up at her" },
   { image: "img/t11.jpg", title: "Ярлык «гений»", prompt: "stands under a golden spotlight on a monument-shaped pedestal, a crowd taking photos, her hands trembling" },
   { image: "img/t12.jpg", title: "Провал выставки", prompt: "stands in an empty gallery full of unsold works with a lighter in her hand, grey dawn in the window" }
  ]
 },
 "Правитель": {
  guild: "Хранители",
  protagonist: "a tall man in a dark long coat with a ring of keys and a very straight posture",
  character: { image: "img/r0.jpg", prompt: "sits at a long table with folders and a ring of keys, city lights behind him, an empty chair at his side" },
  plots: [
   { image: "img/r1.jpg", title: "Аренда выросла", prompt: "holds an oversized ring of keys among anxious people, a rising arrow of price behind him" },
   { image: "img/r2.jpg", title: "Нарушение правила", prompt: "holds a thick rulebook on one pan of a scale, a small hospital bag on the other" },
   { image: "img/r3.jpg", title: "Всё через меня", prompt: "sits surrounded by towers of documents waiting for his signature, an assistant frozen in the doorway" },
   { image: "img/r4.jpg", title: "Слух о кассе", prompt: "stands before an open vault with a loyal friend shaking beside it, rumours drawn as whispering shadows" },
   { image: "img/r5.jpg", title: "Без начальников", prompt: "looks at a circle of young people building a structure with no top, a lone throne in the corner" },
   { image: "img/r6.jpg", title: "Моя ошибка", prompt: "stands alone in a half-empty warehouse with a torn contract on the floor, others watching from the doorway" },
   { image: "img/r7.jpg", title: "Урезанный бюджет", prompt: "holds scissors above a roll of paper chains that represent projects, two chains dangling" },
   { image: "img/r8.jpg", title: "Насмешка в чате", prompt: "stands behind a mute switch on a control panel while a small mocking face looks at him from a screen" },
   { image: "img/r9.jpg", title: "Пора уходить", prompt: "an older figure in a throne-like chair, a younger figure gripping the chair's back, bright open doors behind" },
   { image: "img/r10.jpg", title: "Слежка за порядком", prompt: "mounts a camera in a bright open-plan office, figures below turned into dots on screens" },
   { image: "img/r11.jpg", title: "Спор за бюджет", prompt: "stands at a balance between two groups with a friend among them, his hand covering one pan" },
   { image: "img/r12.jpg", title: "Усталость лидера", prompt: "sits at the head of a long empty table with collapsed shoulders, an untouched cup, a packed bag behind him" }
  ]
 },
 "Заботливый": {
  guild: "Хранители",
  protagonist: "a warm middle-aged woman in a knitted cardigan with a thermos and a tote bag and tired kind eyes",
  character: { image: "img/c0.jpg", prompt: "holds a thermos and a pharmacy bag, leading a child by one hand and supporting an elderly man by the other, her own scarf wrapped around someone else" },
  plots: [
   { image: "img/c1.jpg", title: "Круг жалоб", prompt: "sits on a sofa at night with a glowing phone and a stack of voice-message waves, exhausted" },
   { image: "img/c2.jpg", title: "Больной сосед", prompt: "kneels beside a sick elderly neighbour in bed who holds her wrist, an ambulance light in the window" },
   { image: "img/c3.jpg", title: "Быть нужным", prompt: "stands in a room full of people reaching toward her, her own reflection in the mirror is an empty outline" },
   { image: "img/c4.jpg", title: "Племянник уезжает", prompt: "holds a boy's backpack at a train door while he gently pulls away, a string tied from her hand to his coat" },
   { image: "img/c5.jpg", title: "Без «спасибо»", prompt: "stands behind a table in an animal shelter with raw hands, nobody looking at her" },
   { image: "img/c6.jpg", title: "Вечные просьбы", prompt: "holds out her wallet to a smiling acquaintance while her own bills pile up behind her" },
   { image: "img/c7.jpg", title: "Трое новичков", prompt: "stands with three young figures clinging to her arms like vines, eyes half-closed" },
   { image: "img/c8.jpg", title: "Отказ мамы", prompt: "sits across a table from an older woman pushing away pills, a heavy guilt-shaped weight in her hand" },
   { image: "img/c9.jpg", title: "Забота-контроль", prompt: "holds a web of thin strings tied to the wrists of friends, who glance back uncomfortably" },
   { image: "img/c10.jpg", title: "Помощь больным", prompt: "stands at a door in a coat with a fevered flush, a moving box waiting beyond" },
   { image: "img/c11.jpg", title: "Тихая обида", prompt: "smiles while serving tea, a thin crack of cold running across her hands, a friend unaware" },
   { image: "img/c12.jpg", title: "Взрослый на шее", prompt: "carries a grown man on her back along a long road, his feet dangling, his eyes closed" }
  ]
 },

 // ───────── ПРОВОДНИКИ ─────────
 "Славный малый": {
  guild: "Проводники",
  protagonist: "an ordinary friendly man in a plain grey jacket with an easy smile and one small colourful pin on his collar",
  character: { image: "img/g0.jpg", prompt: "stands in a crowd of people in plain jackets holding a coffee cup, the small bright pin on his collar the only colour in the scene" },
  plots: [
   { image: "img/g1.jpg", title: "Подарок начальнику", prompt: "puts a coin into a large communal gift box with everyone else while glancing at his own empty pocket" },
   { image: "img/g2.jpg", title: "Мем про новичка", prompt: "laughs with a group around a phone showing a mocked slide, his hand hesitating to put the phone away" },
   { image: "img/g3.jpg", title: "Прикрыть друга", prompt: "holds an umbrella over a friend sneaking out of a window with a worried frown" },
   { image: "img/g4.jpg", title: "Киваю всем", prompt: "nods at several people speaking in different directions, his own mouth drawn as a blank line" },
   { image: "img/g5.jpg", title: "Староста двора", prompt: "stands in a courtyard between two arguing neighbours with open palms, parked cars behind" },
   { image: "img/g6.jpg", title: "Обходить колючего", prompt: "turns into a side corridor to avoid a lone sharp-tongued colleague standing by a wall" },
   { image: "img/g7.jpg", title: "Две минуты о себе", prompt: "stands in front of a polite circle holding a microphone with a shy smile" },
   { image: "img/g8.jpg", title: "Ссора друзей", prompt: "stands between two friends who each hold one of his hands, pulling in opposite directions" },
   { image: "img/g9.jpg", title: "Чат для своих", prompt: "is lifted by a glittering elevator toward a VIP door while friends wave from the ground" },
   { image: "img/g10.jpg", title: "Чужой отчёт", prompt: "stays late at the office with two laptops while a colleague walks out in a coat and waves" },
   { image: "img/g11.jpg", title: "Яркие сторис", prompt: "scrolls past friends' glamorous travel photos in glowing phone windows while pasting a colourful sky onto his own photo" },
   { image: "img/g12.jpg", title: "Годовщина сообщества", prompt: "stands at a party table where loud voices push a huge cake while quiet figures sit at the edge, he looks toward them" }
  ]
 },
 "Влюбленный": {
  guild: "Проводники",
  protagonist: "a romantic young person with soft wavy hair in a scarf and a tender expression",
  character: { image: "img/l0.jpg", prompt: "two silhouettes at the window of a night city, hands almost touching, one holds a phone and the other a flower, warm light and a thin shadow between them" },
  plots: [
   { image: "img/l1.jpg", title: "«Давай друзьями»", prompt: "stands under a window watching glowing heart notifications while the person behind the glass turns away" },
   { image: "img/l2.jpg", title: "Он уезжает", prompt: "holds a partner's suitcase handle at a train door while the other hand slowly opens" },
   { image: "img/l3.jpg", title: "Чужой телефон", prompt: "holds a partner's phone in the dark, its blue glow on the face, the hand trembling" },
   { image: "img/l4.jpg", title: "Мы вместо я", prompt: "stands inside the outline of a partner while their own shadow fades into it" },
   { image: "img/l5.jpg", title: "Остывшая жизнь", prompt: "sits at the far end of a long kitchen table from a partner, a pile of rent receipts between them" },
   { image: "img/l6.jpg", title: "Он больше не сильный", prompt: "sits beside a partner lying grey on a sofa, torn between turning away and taking his hand" },
   { image: "img/l7.jpg", title: "Двое сразу", prompt: "stands at a crossing between two glowing paths, a figure waiting at the end of each" },
   { image: "img/l8.jpg", title: "Без обязательств", prompt: "sits on the edge of a bed with a heart-shaped void in the chest, a shadowy figure nearby smiling casually" },
   { image: "img/l9.jpg", title: "Подарок в рассрочку", prompt: "holds an oversized gift box with a long price ribbon, forcing a smile" },
   { image: "img/l10.jpg", title: "Переезд на окраину", prompt: "stands at a packed car about to move, a distant skyline of friends' lit windows glowing behind" },
   { image: "img/l11.jpg", title: "У стены на празднике", prompt: "holds two glasses at a party, a lone figure standing by the wall, the dance floor spinning" },
   { image: "img/l12.jpg", title: "Новые совпадения", prompt: "stands before a wall of phone faces floating like cards, a wilted bouquet beside them" }
  ]
 },
 "Шут": {
  guild: "Проводники",
  protagonist: "a lanky man in a crumpled blazer with a red clown nose peeking from his pocket and a wide grin over serious eyes",
  character: { image: "img/j0.jpg", prompt: "stands on an office desk smiling wide while his eyes stay serious, puzzled faces and a few smiles around him" },
  plots: [
   { image: "img/j1.jpg", title: "Шутка про начальника", prompt: "holds a joke bubble shaped like a dart toward a stern boss, silent colleagues around the table" },
   { image: "img/j2.jpg", title: "Друг в горе", prompt: "makes a goofy face for a crying friend who looks at him in silence" },
   { image: "img/j3.jpg", title: "Тост на юбилее", prompt: "stands at a microphone at a gala, a tiny truth glowing from a cracked mask in his pocket" },
   { image: "img/j4.jpg", title: "Пост после провала", prompt: "holds a pen shaped like a knife over a plain letter with a cartoon caricature on it" },
   { image: "img/j5.jpg", title: "Мем разошёлся", prompt: "watches a meme-image of a colleague fly through office windows while the colleague sits alone with his camera off" },
   { image: "img/j6.jpg", title: "Корона тимлида", prompt: "holds a heavy crown made of chains in one hand and a small toy in the other" },
   { image: "img/j7.jpg", title: "Смех-броня", prompt: "wears a thick laughing mask with a tiny crack, a worried face visible behind it" },
   { image: "img/j8.jpg", title: "Бесконечный созвон", prompt: "stands on a conference table with a tangled projector cable, bored faces on a wall screen" },
   { image: "img/j9.jpg", title: "Забытый дедлайн", prompt: "laughs while a calendar page burns behind him and others chuckle" },
   { image: "img/j10.jpg", title: "Застенчивый стажёр", prompt: "stands with a trembling young intern, softening a joke bubble that has sharp edges" },
   { image: "img/j11.jpg", title: "Накануне новостей", prompt: "juggles colourful balls in front of a team while a dark shape looms behind the door" },
   { image: "img/j12.jpg", title: "Не всерьёз", prompt: "stands on a stage with a serious face while the audience laughs, a crumpled speech bubble at his feet" }
  ]
 }
};

// Собирает полный промт для одной карточки.
// kind: "character" или номер сюжета 1–12.
function buildPrompt(archetype, kind) {
 const a = archetypePrompts[archetype];
 const card = kind === "character" ? a.character : a.plots[kind - 1];
 return [STYLE, GUILD_PALETTE[a.guild], a.protagonist + " " + card.prompt].join(", ");
}
