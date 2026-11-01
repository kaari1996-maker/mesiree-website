/*
  YOUR PRODUCTS — edit this list to change what the shop shows.

  For each product:
    id          short name used in the web address (lowercase, no spaces)
    name        product name
    category    e.g. "Hands", "Body"
    kind        short line under the name, e.g. "Hand oil · 30 ml"
    price       a number in euros, e.g. 24.90 — or null to show "Price coming soon"
    sizes       list of sizes, or [] if there is only one
    image       file name of a photo uploaded next to this file, e.g. "hand-oil.jpg" — or null
                (the .svg pictures are drawn mock-ups; swap in real photos when you have them)
    tagline, description, tags, ingredients, howToUse: text for the product page

  Everything in [square brackets] is a placeholder for you to replace.
*/
const PRODUCTS = [
  {
    id: "hand-oil",
    name: "Hand Oil",
    category: "Hands",
    kind: "Hand oil · [size]",
    price: null,
    sizes: [],
    image: "hand-oil.svg?v=2",
    tagline: "[short tagline]",
    description: "[Two or three sentences: what it does, how it feels, who it is for.]",
    tags: ["[Key ingredient]", "[Key ingredient]"],
    ingredients: "[Full INCI ingredient list]",
    howToUse: "[Application instructions]"
  },
  {
    id: "body-lotion",
    name: "Body Lotion",
    category: "Body",
    kind: "Body lotion · [size]",
    price: null,
    sizes: [],
    image: "body-lotion.svg?v=2",
    tagline: "[short tagline]",
    description: "[Two or three sentences: what it does, how it feels, who it is for.]",
    tags: ["[Key ingredient]", "[Key ingredient]"],
    ingredients: "[Full INCI ingredient list]",
    howToUse: "[Application instructions]"
  },
  {
    id: "hand-soap",
    name: "Foaming Hand Soap",
    category: "Hands",
    kind: "Foaming hand soap · [size]",
    price: null,
    sizes: [],
    image: "hand-soap.svg?v=2",
    tagline: "[short tagline]",
    description: "[Two or three sentences: what it does, how it feels, who it is for.]",
    tags: ["[Key ingredient]", "[Key ingredient]"],
    ingredients: "[Full INCI ingredient list]",
    howToUse: "[Application instructions]"
  },
  {
    id: "face-wash",
    name: "Face Wash",
    category: "Face",
    kind: "Face wash · [size]",
    price: null,
    sizes: [],
    image: "face-wash.svg?v=2",
    tagline: "[short tagline]",
    description: "[Two or three sentences: what it does, how it feels, who it is for.]",
    tags: ["[Key ingredient]", "[Skin type]"],
    ingredients: "[Full INCI ingredient list]",
    howToUse: "[Application instructions]"
  },
  {
    id: "lip-balm",
    name: "Lip Balm",
    category: "Lips",
    kind: "Lip balm · [size]",
    price: null,
    sizes: [],
    image: "lip-balm.svg?v=2",
    tagline: "[short tagline]",
    description: "[Two or three sentences: what it does, how it feels, who it is for.]",
    tags: ["[Key ingredient]"],
    ingredients: "[Full INCI ingredient list]",
    howToUse: "[Application instructions]"
  }
];
