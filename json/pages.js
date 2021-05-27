const pages = [
  {
    name: 'page1',
    text: 'Dit is de teskt van pagina 1',
    question: ' dit is een vraag van pagina 1',
    imagePath: require('../images/logo.png'),
  },
  {
    name: 'page2',
    text: "Zet de Picoo's aan door op de knop te drukken van elke controller.",
    question: "Als jij ze aan hebt gezet, knipperen de Picoo's nu blauw? ",
    imagePath: require('../images/pagetwo.png'),
  },
  {
    name: 'page3',
    text: 'Zoek een spel uit en pak de gamekaart apart.',
    question: '',
    imagePath: require('../images/pagina3.png'),
  },
  {
    name: 'page4',
    text: ' Houd nu de gamekaart onder de Picoo, zo weet de controller welk spel je gaat spelen.',
    information: 'de controller heeft de gamekaart gescand als je geluidje hoort. Dit is nu je hoofdcontroller, deze blijft knipperen.',
    question: ' Knippert  de hoofdcontroller nu wit licht?',
    imagePath: require('../images/pagefour.png'),
  },
  {
    name: 'page5',
    text: "Houd alle picoo's bij de hoofdcontroller (knipperende picoo).",
    question: ' Let goed op! \n' + 'Knippert  de hoofdcontroller nu wit licht?',
    imagePath: require('../images/pagefive.png'),
  },
  {
    name: 'page6',
    text: 'Druk op de knop van de hoofdcontroller (knipperende Picoo) om het spel te starten.',
    question: ' begint het spel?',
    imagePath: require('../images/pagesix.png'),
  },
  {
    name: 'page7',
    text: '',
    question:
      ' Goed gedaan! je weet nu hoe je Picoo opstart. Weet je al hoe het spel werkt?',
    imagePath: require('../images/pagesix.png'),
  },
];

export default pages;
