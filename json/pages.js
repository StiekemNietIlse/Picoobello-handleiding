const pages = [
  {
    name: 'hoofdpagina',
    text: 'Buitenspelen als toen voor de kinderen van nu!',
    question: ' dit is een vraag van pagina 1',
    imagePath: require('../images/logo.png'),
  },
  {
    name: '1/6',
    text: "Zet de Picoo's aan door op de knop te drukken van elke controller.",
    question: "Als jij ze aan hebt gezet, knipperen de Picoo's nu blauw? ",
    imagePath: require('../images/pagetwo.png'),
  },
  {
    name: '2/6',
    text: 'Zoek een spel uit en pak de gamekaart apart.',
    question: '',
    imagePath: require('../images/pagina3.png'),
  },
  {
    name: '3/6',
    text: ' Houd nu de gamekaart onder de Picoo, zo weet de controller welk spel je gaat spelen.',
    information:
      'de controller heeft de gamekaart gescand als je geluidje hoort. Dit is nu je hoofdcontroller, deze blijft knipperen.',
    question: ' Knippert  de hoofdcontroller nu wit licht?',
    imagePath: require('../images/pagefour.png'),
  },
  {
    name: '4/6',
    text: "Houd alle picoo's bij de hoofdcontroller (knipperende picoo).",
    question: ' Let goed op! \n' + 'Knippert  de hoofdcontroller nu wit licht?',
    imagePath: require('../images/pagefive.png'),
  },
  {
    name: '5/6',
    text: 'Druk op de knop van de hoofdcontroller (knipperende Picoo) om het spel te starten.',
    question: ' begint het spel?',
    imagePath: require('../images/pagesix.png'),
  },
  {
    name: '6/6',
    text: '',
    question:
      ' Goed gedaan! je weet nu hoe je Picoo opstart. Weet je al hoe het spel werkt?',
    imagePath: require('../images/pagesix.png'),
  },
];

export default pages;
