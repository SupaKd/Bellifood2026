// ========================================
// DONNÉES CENTRALISÉES - BELLIFOOD
// ========================================

export const restaurant = {
    name: "BelliFood",
    slogan: "Savourez l'authenticité du French Tacos",
    address: "7 Rue Francisco Ferrer, 01100 Oyonnax",
    phone: "06.48.57.04.99",
    hours: "Lun - Dim : 11h à 1h",
    social: {
      instagram: "https://www.instagram.com/belli.food01/",
      tiktok: "https://www.tiktok.com/@bellifood",
      ubereats: "https://www.ubereats.com/fr/store/bellifood/zqsA8dAkVWydjHvTgAGe_w"
    },
    maps: {
      url: "https://www.google.com/maps/place/Belli+Food/@46.2572123,5.6466754,15z",
      embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2758.649367091124!2d5.656953700000001!3d46.2571979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478cbd96d570b0e9%3A0x42faac12db0159a6!2sBelli%20Food!5e0!3m2!1sfr!2sfr!4v1750169126055!5m2!1sfr!2sfr"
    }
  };
  
  export const heroImages = [
    "/image/hero.webp",
    "/image/hero2.webp",
    "/image/hero3.webp"
  ];
  
  export const bestsellers = [
    {
      id: 1,
      name: "L'ORIENTAL",
      price: "8.50€",
      image: "/image/oriental.webp",
      description: "Kefta ou escalope, frites, poivrons, sauce gruyère, cheddar, oeuf."
    },
    {
      id: 2,
      name: "BELLI",
      price: "10.00€",
      image: "/image/hero2.webp",
      description: "Escalope, kefta, bacon, sauce algérienne, barbecue, cheddar. Menu 12.50€"
    },
    {
      id: 3,
      name: "CROQUE",
      price: "2.50€",
      image: "/image/cro.webp",
      description: "Cheddar, dinde, sauce fromagère."
    },
    {
      id: 4,
      name: "BELLI TASTY",
      price: "8.00€",
      image: "/image/tarti.webp",
      description: "Moyen 8.00€ et le grand à 12.00€."
    }
  ];
  
  export const categories = [
    {
      id: 1,
      name: "NOS TACOS SIGNATURES",
      emoji: "😋",
      image: "/image/product.webp",
      products: [
        { name: "SAVOYARD", price: "8,50€", description: "Raclette fondue, pommes de terre, lardons, crème fraîche" },
        { name: "CHÈVRE MIEL", price: "8,50€", description: "Chèvre fondant, miel, noix, salade" },
        { name: "L'INDIEN", price: "8,50€", description: "Poulet tikka, sauce curry, oignons caramélisés" },
        { name: "L'ORIENTAL", price: "8,50€", description: "Kefta ou escalope, frites, poivrons, sauce gruyère, cheddar, oeuf" },
        { name: "3 FROMAGES", price: "8,50€", description: "Mozzarella, cheddar, emmental fondus" },
        { name: "BELLI", price: "10,00€", description: "Escalope, kefta, bacon, sauce algérienne, barbecue, cheddar" }
      ]
    },
    {
      id: 2,
      name: "NOS BURGERS",
      emoji: "🍔",
      image: "/image/burger.webp",
      products: [
        { name: "CHEESE BURGER", price: "2,50€", description: "Steak haché, cheddar, oignons, pickles" },
        { name: "LE SUÉDOIS", price: "7,00€", description: "Steak haché, sauce suédoise, oignons croustillants" },
        { name: "CHICKEN", price: "5,50€", description: "Poulet pané croustillant, salade, sauce" },
        { name: "FISH", price: "5,00€", description: "Filet de poisson pané, sauce tartare" },
        { name: "BELLI", price: "10,00€", description: "Double steak, bacon, cheddar, sauce maison" },
        { name: "SAVOYARD", price: "8,50€", description: "Steak, raclette fondue, bacon" },
        { name: "L'INDIEN", price: "8,50€", description: "Poulet tandoori, sauce curry, oignons" },
        { name: "CHÈVRE MIEL", price: "8,50€", description: "Steak, chèvre, miel, roquette" },
        { name: "L'ORIENTAL", price: "8,50€", description: "Steak, harissa, poivrons grillés" }
      ]
    },
    {
      id: 3,
      name: "NOS SANDWICHS",
      emoji: "🥙",
      image: "/image/miche.webp",
      products: [
        { name: "L'ORIENTAL", price: "8,50€", description: "Pain artisanal, kefta, légumes grillés" },
        { name: "TENDOORI", price: "8,50€", description: "Poulet tandoori, sauce yaourt, crudités" },
        { name: "L'INDIEN", price: "8,50€", description: "Poulet épicé, sauce curry, oignons" },
        { name: "LE SAVOYARD", price: "8,50€", description: "Jambon, raclette fondue, pommes de terre" },
        { name: "NOIX DE VEAU", price: "9,00€", description: "Noix de veau tendre, sauce au choix" }
      ]
    },
    {
      id: 4,
      name: "GALETTES",
      emoji: "🫓",
      image: "/image/galette.webp",
      products: [
        { name: "GALETTE GARNITURE AU CHOIX", price: "7,00€", description: "Galette maison avec votre garniture préférée" }
      ]
    },
    {
      id: 5,
      name: "BOWL'S",
      emoji: "🥣",
      image: "/image/bowl.webp",
      products: [
        { name: "BOWL AU POULET", price: "8,00€", description: "Riz, poulet grillé, légumes frais, sauce soja" },
        { name: "BOWL AU THON", price: "8,00€", description: "Riz, thon frais, avocat, edamame" },
        { name: "BOWL VÉGÉTARIEN", price: "8,00€", description: "Riz, légumes de saison, tofu, sauce sésame" }
      ]
    },
    {
      id: 6,
      name: "ASSIETTES",
      emoji: "🍽️",
      image: "/image/assiettes.webp",
      products: [
        { name: "KEBAB", price: "12,00€", description: "Viande kebab, frites, salade, sauce" },
        { name: "KEFTA", price: "12,00€", description: "Kefta grillée, frites, salade, sauce" },
        { name: "ESCALOPE", price: "12,00€", description: "Escalope marinée, frites, salade, sauce" }
      ]
    },
    {
      id: 7,
      name: "NOS SALADES",
      emoji: "🥗",
      image: "/image/salade.webp",
      products: [
        { name: "SALADE CÉSAR", price: "7,50€", description: "Poulet, parmesan, croûtons, sauce césar" },
        { name: "SALADE CHÈVRE MIEL", price: "7,50€", description: "Chèvre chaud, miel, noix, mesclun" },
        { name: "SALADE VERTE", price: "3,50€", description: "Mesclun frais, vinaigrette maison" },
        { name: "SALADE BELLI", price: "8,00€", description: "Notre salade signature gourmande" }
      ]
    },
    {
      id: 8,
      name: "TEX-MEX",
      emoji: "🍗",
      image: "/image/poulet.webp",
      products: [
        { name: "TENDERS", price: "4,00€", description: "Aiguillettes de poulet panées croustillantes" },
        { name: "CHICKEN WINGS", price: "4,00€", description: "Ailes de poulet épicées" },
        { name: "MOZZA STICK", price: "4,00€", description: "Bâtonnets de mozzarella panés" }
      ]
    },
    {
      id: 9,
      name: "PETITE FAIM",
      emoji: "🥪",
      image: "/image/croque.webp",
      products: [
        { name: "CROQUE-MONSIEUR", price: "3,50€", description: "Jambon, fromage fondu, pain de mie grillé" }
      ]
    },
    {
      id: 10,
      name: "DESSERTS",
      emoji: "🍰",
      image: "/image/daim.webp",
      products: [
        { name: "DESSERT MAISON", price: "3,50€", description: "Notre dessert du jour fait maison" },
        { name: "TIRAMISU", price: "3,50€", description: "Tiramisu crémeux au café" },
        { name: "TARTE AU DAIM", price: "2,50€", description: "Tarte au chocolat et caramel Daim" }
      ]
    }
  ];
  
  export const sauces = [
    "Algérienne", "Mayonnaise", "Barbecue", "Fish", "Marocaine",
    "Andalouse", "Curry", "Brazil", "Magic Onion", "Blanche",
    "Samourai", "Ketchup", "Biggy", "Poivre", "Moutarde", "Harissa"
  ];
  
  export const viandes = [
    "Chicken", "Cordon bleu", "Steak Haché", "Kebab", "Escalope Marinée"
  ];
  
  export const featuredProducts = [
    { id: 1, name: "BELLI", image: "/image/hero2.webp" },
    { id: 2, name: "ORIENTAL", image: "/image/hero.webp" },
    { id: 3, name: "CHÈVRE MIEL", image: "/image/chevre.webp" },
    { id: 4, name: "TARTE AU DAIM", image: "/image/daim.webp" }
  ];