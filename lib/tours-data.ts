// Shared tour data for the entire application

export interface Tour {
  id: string
  slug: string
  sport: string
  title: string
  shortDescription: string
  fullDescription: string
  date: string
  duration: string
  location: string
  image: string
  category: 'cycling' | 'moto' | 'marathon' | 'hiking' | 'kayak' | 'ultratrail'
  included: string[]
  itinerary: { day: number; description: string }[]
}

export const tours: Tour[] = [
  {
    id: '1',
    slug: 'dunai-kerekpar-tura',
    sport: 'Kerékpártúra',
    title: 'Dunai Szerzői Kerékpártúra',
    shortDescription:
      'Öt nap nyeregben a Duna mentén: kavicsos partok, ártéri erdők, apró falvak és az Alföld végtelen horizontja kiscsoportos, szerzői kerékpáros kalandon.',
    fullDescription:
      'Ez a túra a Duna hazai szakaszát kerékpározza végig a Pilis lábától az Alföld kapujáig. Naponta 50–70 km váltakozó terepen, kavicsos töltésutakon, erdei nyomokon és aszfaltozott kerékpárutak mentén. Vezető kerékpáros kísérőnk huszonöt éve ismeri ezt a vidéket: tud minden árvízkori magaslatról, minden ártéri kocsmakerttől és minden titkos táborozóhelytől. A csoport maximum 8 fő, az ütem mindenkinek megfelelő. Nincs verseny, csak az élmény.',
    date: '2026-05-08',
    duration: '5 nap',
    location: 'Esztergom – Kalocsa',
    image: '/images/tour-cycling.jpg',
    category: 'cycling',
    included: [
      'Szállás 4 éjszakára (panzió/vendégház)',
      'Magyar reggeli minden reggel',
      'Szerzői túravezető',
      'Csomagtranszfer naponta',
      'GPX útvonal és offline térkép',
      'Kerékpárszerelő készlet',
    ],
    itinerary: [
      { day: 1, description: 'Találkozó Esztergomban, rövid bemelegítő kör a Pilisi-rét mentén, ismerkedős vacsora.' },
      { day: 2, description: 'Esztergom – Visegrád: szurdokvölgyek, erdei ösvények, pihenő a Dunakanyarban.' },
      { day: 3, description: 'Visegrád – Budapest külváros: az ártér legszebb szakasza, Szentendre-sziget kerülő.' },
      { day: 4, description: 'Budapest déli kerékpárút – Dunaföldvár: síkság, tanyák, napraforgóföldek.' },
      { day: 5, description: 'Befejező szakasz Kalocsáig, csoportos búcsúebéd, hazaszállítás koordinációja.' },
    ],
  },
  {
    id: '2',
    slug: 'zemplen-moto-tura',
    sport: 'Mototúra',
    title: 'Zempléni Hegyek Mototúra',
    shortDescription:
      'Szerzői mototúra a Zempléni-hegység kanyargós hegyiútjain – kőzetfalak, nyírfaligetek és tokaji borvidék háromnapos kerékpározó ritmusban.',
    fullDescription:
      'A Zemplén az egyik legszebb mototúra-vidék az országban: kevés az autó, sok a kanyar, és a táj folyamatosan változik a szőlőhegyek között. Túravezető kísérőnk személyesen tervezi meg az útvonalat minden évben, kizárva az ismétlődést. A csoport maximum 6 fő. Reggel nyeregbe szállunk, délután borászatba látogatunk, este falusias szállásunkon pihenünk. Sem sebesség, sem verseny – csak a szabad kanyarok öröme.',
    date: '2026-06-05',
    duration: '3 nap',
    location: 'Tokaj – Telkibánya',
    image: '/images/tour-moto.jpg',
    category: 'moto',
    included: [
      'Szállás 2 éjszakára',
      'Szerzői túravezető motoron',
      'Borászati látogatás és kóstoló',
      'Magyar reggeli',
      'Útvonaltérkép és briefing',
    ],
    itinerary: [
      { day: 1, description: 'Gyülekezés Tokajban, rövid bemelegítő kör a tokaji szőlőhegyek között, esti kóstoló.' },
      { day: 2, description: 'Teljes napos túra: Regéc, Füzér, Hollóháza, Gönc – a Zemplén legjobb kanyarjai.' },
      { day: 3, description: 'Visszaút Telkibányán át, erdei kilátópont, búcsúebéd, szétoszlás.' },
    ],
  },
  {
    id: '3',
    slug: 'balatonfelvideki-trail-maraton',
    sport: 'Trail Maraton',
    title: 'Balatonfelvidéki Trail Maraton',
    shortDescription:
      '42 km gyalogos terepfutás a Balatonfelvidék bazaltplatói és lavárkövei között – szerzői útvonal, kiscsoportos mezőny, természetes tempó.',
    fullDescription:
      'A Balatonfelvidék bazaltfennsíkjai egyedülálló tereprehabilitációs környezetet nyújtanak: kemény kő, puha fű, meredek lejárók és csodálatos kilátás a Balatonra. Ez nem verseny, hanem szerzői futóélmény: az útvonalat évente újratervezi vezetőnk, hogy elkerülje az ismert turistacsapásokat. 42 km teljes elszánt futóknak, de rövidített 21 km-es változat is elérhető. Befutók után közös főzés a mezőnnyel.',
    date: '2026-07-04',
    duration: '2 nap',
    location: 'Badacsony – Tihany',
    image: '/images/tour-marathon.jpg',
    category: 'marathon',
    included: [
      'Rajttáska és mellény-tároló',
      'Frissítőállomások 8 km-enként',
      'Szállás az előző estén',
      'Befutó utáni közös főzés',
      'Szerzői útvonaltérkép',
    ],
    itinerary: [
      { day: 1, description: 'Megérkezés Badacsonyba, útvonalbriefing, esti pasta-vacsora, korai ágy.' },
      { day: 2, description: 'Reggel 6: rajtpisztoly. 42 km bazalt és fű között. Délutáni befutó, közös főzés, pihenés.' },
    ],
  },
  {
    id: '4',
    slug: 'matrai-hegyi-tura',
    sport: 'Hegyi Túra',
    title: 'Mátrai Gerinc Szerzői Túra',
    shortDescription:
      'Négy nap a Mátra gerincein: érintetlen erdők, sziklakilátók, forrásvidékek és a Kárpát-medence legtávolabbi horizontja kiscsoportos szerzői túrán.',
    fullDescription:
      'A Mátra Magyarország legmagasabb hegyvidéke, mégis kevéssé ismert a külföldi látogatók számára. Szerzői túránk a gerinc legjobb – és legkevésbé járt – szakaszait fűzi össze: sziklatotemektől sötét lucfenyveseken át völgyforrásokig. Naponta 15–22 km terepen, 700–900 méter szintemelkedéssel. Kiscsoportos (max. 8 fő), lassú és tudatos tempó, bőséges pihenőkkel. Minden este vendégházi szállás, meleg vacsora.',
    date: '2026-08-14',
    duration: '4 nap',
    location: 'Gyöngyös – Galyatető',
    image: '/images/tour-hiking.jpg',
    category: 'hiking',
    included: [
      'Szállás 3 éjszakára (vendégház)',
      'Félpanzió (reggeli + vacsora)',
      'Szerzői hegyi túravezető',
      'Csomagtranszfer szállásokra',
      'Topográfiai térkép',
      'Elsősegély-készlet',
    ],
    itinerary: [
      { day: 1, description: 'Gyöngyösről indulás, Sár-hegy, Fallóskút, első sziklakilátó, éjszaka Mátraházán.' },
      { day: 2, description: 'Mátraháza – Kékes-tető (1014 m) – Galya: a gerinc leglátványosabb napja.' },
      { day: 3, description: 'Galya – Óvár-sziklák – Bükki határgerinc: erdei nyomok, forrásvidék, csendes völgy.' },
      { day: 4, description: 'Visszavezető kör Galyatetőre, kilátói reggeli, búcsúebéd, hazaszállítás.' },
    ],
  },
  {
    id: '5',
    slug: 'hernad-kajak-tura',
    sport: 'Kajakos Vízitúra',
    title: 'Hernád-szoros Kajakos Vízitúra',
    shortDescription:
      'Két nap a Hernád szorosában kajak tetején: sziklás folyópartok, szurdokok, vadvizek és a Zempléni-hegység buja erdeje között.',
    fullDescription:
      'A Hernád szoros Magyarország legvadabb és legkevésbé civilizált folyóvölgye. Szerzői kajakvízitúránk a szoros teljes belföldi szakaszát bejárja: sekély gázlók, kisebb zuhatagok, hosszú csendfolyami szakaszok váltakoznak az erdős sziklafalak alatt. A csoport maximum 8 fő, az evezéstechnikát előzetesen átbeszéljük – nem szükséges profiszintű tudás, de az alapok elengedhetetlenek. Kajakot és mentőmellényt mi biztosítunk.',
    date: '2026-09-12',
    duration: '2 nap',
    location: 'Hidasnémeti – Boldogkőváralja',
    image: '/images/tour-kayak.jpg',
    category: 'kayak',
    included: [
      'Kajak és evező bérlése',
      'Mentőmellény és sisak',
      'Szerzői vízitúra-vezető',
      'Szállás 1 éjszakára (folyóparti tábor)',
      'Tábori vacsora és reggeli',
      'Csomagtranszfer',
    ],
    itinerary: [
      { day: 1, description: 'Hidasnémetinél vízre szállás, technikaoktatás, 18 km evezés, folyóparti tábor.' },
      { day: 2, description: 'Reggeli a parton, 14 km befejező szakasz Boldogkőváraljáig, búcsúebéd, szétoszlás.' },
    ],
  },
  {
    id: '6',
    slug: 'bukki-ultratrail',
    sport: 'Ultratrail',
    title: 'Bükki Ultratrail – 70 km',
    shortDescription:
      'Szerzői 70 km-es ultratrail a Bükk-fennsík mészkőplatóin és mélyvölgyeiben – egyéjszakás terepfutás, természetes ütem, kis létszám.',
    fullDescription:
      'A Bükk-fennsík mészkőplatói és erdős mélyvölgyei az egyik legjobb ultratrail-terepet kínálják az országban. A 70 km-es szerzői útvonal keveri a fennsíki nyílt futást a sötét bükkösök árnyékos ösvényeivel, és tartalmaz egy egyéjszakás bivisetőszakaszt a fennsíkon. A futók tájékozódásból és saját ösztönükre hagyatkoznak – a szervező csak pontellen-őrzési rendszert biztosít, nem kísér végig. Ez igazi önálló kaland.',
    date: '2026-10-03',
    duration: '2 nap',
    location: 'Eger – Lillafüred',
    image: '/images/tour-ultratrail.jpg',
    category: 'ultratrail',
    included: [
      'Rajtszám és időmérés',
      'Frissítőállomások 15 km-enként',
      'Éjszakai bivifelszerelés (sleeping liner)',
      'GPS nyomvonal és topótérkép',
      'Befutó utáni étkezés',
      'Mentőcsapat és orvosi háttér',
    ],
    itinerary: [
      { day: 1, description: 'Egertől délután 18:00-kor rajtol a mezőny. Éjszakai szakasz a fennsíkon, bivipihenő.' },
      { day: 2, description: 'Hajnali folytatás, Lillafüredre érkezés, befutói fogadás, közös reggeli.' },
    ],
  },
]

export const categoryLabels: Record<Tour['category'], string> = {
  cycling: 'Kerékpártúra',
  moto: 'Mototúra',
  marathon: 'Trail Maraton',
  hiking: 'Hegyi Túra',
  kayak: 'Vízitúra',
  ultratrail: 'Ultratrail',
}

export const hungaryCities = [
  { id: 'bp', name: 'Budapest', x: 52, y: 42, tours: 1 },
  { id: 'eg', name: 'Eger', x: 66, y: 26, tours: 2 },
  { id: 'to', name: 'Tokaj', x: 80, y: 22, tours: 1 },
  { id: 'ba', name: 'Badacsony', x: 30, y: 62, tours: 1 },
  { id: 'gy', name: 'Gyöngyös', x: 58, y: 34, tours: 1 },
  { id: 'es', name: 'Esztergom', x: 44, y: 30, tours: 1 },
  { id: 'hi', name: 'Hidasnémeti', x: 82, y: 20, tours: 1 },
]

