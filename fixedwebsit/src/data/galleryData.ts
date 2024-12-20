// galleryData.ts

export interface Photo {
    src: string;
    alt: string;
    caption: string;
  }
  
  export const photos: Photo[] = [
    { src: '/gallery/redbricks.jpg', alt: 'Redbricks' , caption: 'Magna Plaza, Amsterdam'},
    { src: '/gallery/amsterdam.jpg', alt: 'Amsterdam' , caption: 'Hartenstraat, Amsterdam'},

    { src: '/gallery/blackvespa.jpg', alt: 'Zürich' , caption: 'Strochengasse, Zürich'},

    { src: '/gallery/lucernsunset.jpg', alt: 'Luzern' , caption: 'Mt. Pilatus, Luzern'},
    { src: '/gallery/mcdonalds.jpg', alt: 'Luzern' , caption: "McDonald's, Luzern"},
    { src: '/gallery/frakmuntegg.jpg', alt: 'Luzern', caption: "Fräkmüntegg, Luzern" },
    { src: '/gallery/lion.jpg', alt: 'Luzern' , caption: "The Lion Monument, Luzern"},

    { src: '/gallery/cat.jpg', alt: 'Milan' , caption: "The Catherdral, Milan"},
    { src: '/gallery/starbucks.jpg', alt: 'Milan' , caption: "Reserve Roastery, Milan"},

    { src: '/gallery/flowers.jpg', alt: 'Barcelona' , caption: "Art Museum, Barcelona"},
    { src: '/gallery/larcbarcelona.jpg', alt: 'Barcelona' , caption: "L'Arc de Triomf, Barcelona"},
    { src: '/gallery/guell.jpg', alt: 'Barcelona' , caption: "Park Güell, Barcelona"},
    { src: '/gallery/ducks.jpg', alt: 'Barcelona' , caption: "The Cathedral, Barcelona"},
    { src: '/gallery/ciutat.jpg', alt: 'Barcelona' , caption: "Ciutat Vella, Barcelona"},

    { src: '/gallery/giovanni.jpg', alt: 'Florence' , caption: "San Giovanni, Florence"},
    { src: '/gallery/santamaria.jpg', alt: 'Florence' , caption: "Santa Maria, Florence"},
    { src: '/gallery/pisa.jpg', alt: 'Pisa' , caption: "Torre, Pisa"},
    { src: '/gallery/uffizi.jpg', alt: 'Florence' , caption: "Uffizi Gallery, Florence"},

    { src: '/gallery/stpetersqr.jpg', alt: 'Vatican' , caption: "St. Peter's Square, Vatican"},

    { src: '/gallery/santangelo.jpg', alt: 'Rome' , caption: "Sant'Angelo, Rome"},
    { src: '/gallery/capitolehill.jpg', alt: 'Rome' , caption: "Capitoline Hill, Rome"},

    { src: '/gallery/redtruck.jpg', alt: 'Billund' , caption: "Gota Hotel, Billund"},
    { src: '/gallery/egypt.jpg', alt: 'Billund' , caption: "The Pharaoh, Billund"},
    { src: '/gallery/ninjago.jpg', alt: 'Billund' , caption: "Ninjago, Billund"},
    { src: '/gallery/ferrari.jpg', alt: 'Billund' , caption: "Ferrari, Billund"},
    { src: '/gallery/flyingeagle.jpg', alt: 'Billund' , caption: "Flying Eagle, Billund"},

    { src: '/gallery/oktober.jpg', alt: 'Munich' , caption: "Hacker-Pschorr, Munich"},
    { src: '/gallery/munichred.jpg', alt: 'Munich' , caption: "Munich's Red, Munich"},
    { src: '/gallery/rathaus.jpg', alt: 'Munich' , caption: "Rathaus-Glockenspiel, Munich"},
    { src: '/gallery/marienplatz.jpg', alt: 'Munich' , caption: "Marienplatz, Munich"},
    // Add more photos here
  ];
  