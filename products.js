/*
  YOUR PRODUCTS — edit this list to change what the shop shows.

  For each product:
    id          short name used in the web address (lowercase, no spaces)
    name        product name
    category    e.g. "Face", "Body"
    kind        short line under the name, e.g. "Face oil · 30 ml"
    price       a number in euros, e.g. 24.90 — or null to show "Price coming soon"
    sizes       list of sizes, or [] if there is only one
    image       path to a photo in the images folder, e.g. "images/face-oil.jpg" — or null
    tagline, description, tags, ingredients, howToUse: text for the product page

  Everything in [square brackets] is a placeholder for you to replace.
*/
const PRODUCTS = [
  {
    id: "face-oil",
    name: "Face Oil",
    category: "Face",
    kind: "Face oil · 30 ml",
    price: null,
    sizes: ["15 ml", "30 ml"],
    image: null,
    tagline: "[short tagline]",
    description: "[Two or three sentences: what it does, how it feels, who it is for.]",
    tags: ["[Key ingredient]", "[Key ingredient]", "[Skin type]"],
    ingredients: "[Full INCI ingredient list]",
    howToUse: "[Application instructions]"
  },
  {
    id: "body-lotion",
    name: "Body Lotion",
    category: "Body",
    kind: "Body lotion · 150 ml",
    price: null,
    sizes: ["50 ml", "150 ml", "250 ml"],
    image: null,
    tagline: "[short tagline]",
    description: "[Two or three sentences: what it does, how it feels, who it is for.]",
    tags: ["[Key ingredient]", "[Key ingredient]"],
    ingredients: "[Full INCI ingredient list]",
    howToUse: "[Application instructions]"
  },
  {
    id: "herbal-soap",
    name: "Herbal Soap",
    category: "Body",
    kind: "Herbal soap · 120 g",
    price: null,
    sizes: [],
    image: null,
    tagline: "[short tagline]",
    description: "[Two or three sentences: what it does, how it feels, who it is for.]",
    tags: ["[Key ingredient]"],
    ingredients: "[Full INCI ingredient list]",
    howToUse: "[Application instructions]"
  },
  {
    id: "lip-balm",
    name: "Lip Balm",
    category: "Face",
    kind: "Lip balm · 15 ml",
    price: null,
    sizes: [],
    image: null,
    tagline: "[short tagline]",
    description: "[Two or three sentences: what it does, how it feels, who it is for.]",
    tags: ["[Key ingredient]"],
    ingredients: "[Full INCI ingredient list]",
    howToUse: "[Application instructions]"
  },
  {
    id: "hair-rinse",
    name: "Hair Rinse",
    category: "Hair",
    kind: "Hair rinse · 200 ml",
    price: null,
    sizes: [],
    image: null,
    tagline: "[short tagline]",
    description: "[Two or three sentences: what it does, how it feels, who it is for.]",
    tags: ["[Key ingredient]"],
    ingredients: "[Full INCI ingredient list]",
    howToUse: "[Application instructions]"
  },
  {
    id: "gift-box",
    name: "Gift Box",
    category: "Gift sets",
    kind: "Gift box · 3 items",
    price: null,
    sizes: [],
    image: null,
    tagline: "[short tagline]",
    description: "[What is inside the box.]",
    tags: [],
    ingredients: "[See each product]",
    howToUse: "[Application instructions]"
  }
];
