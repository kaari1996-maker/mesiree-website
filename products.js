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
    backdrop    optional nature photo shown blurred behind the product picture
    backdropCredit  who took the backdrop photo
    backdropBlur    optional: how soft the backdrop is (default 4)
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
    image: "hand-oil.svg?v=4",
    backdrop: "https://images.unsplash.com/photo-1668166220140-33a00f65ab3b?w=1200&q=75&auto=format&fit=crop",
    backdropCredit: "Tulivee beach · Artur Alexander Holmski (Unsplash)",
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
    image: "body-lotion.svg?v=4",
    backdrop: "https://images.unsplash.com/photo-1668166220035-0b2a40840d5a?w=1200&q=75&auto=format&fit=crop",
    backdropCredit: "Tulivee beach · Artur Alexander Holmski (Unsplash)",
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
    image: "hand-soap.svg?v=4",
    backdrop: "https://images.unsplash.com/photo-1668166220165-5588c65684e4?w=1200&q=75&auto=format&fit=crop",
    backdropCredit: "Tulivee beach · Artur Alexander Holmski (Unsplash)",
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
    image: "face-wash.svg?v=4",
    backdrop: "https://images.unsplash.com/photo-1730023572970-f6df08ae9585?w=1200&q=75&auto=format&fit=crop",
    backdropCredit: "Pärnu beach · Tomasz Anusiewicz (Unsplash)",
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
    image: "lip-balm.svg?v=4",
    backdrop: "https://images.unsplash.com/photo-1586227180855-c6fc42170e2f?w=1200&q=75&auto=format&fit=crop",
    backdropCredit: "Sand ripples in Pärnu · Kristin Wilson (Unsplash)",
    backdropBlur: 14,
    tagline: "[short tagline]",
    description: "[Two or three sentences: what it does, how it feels, who it is for.]",
    tags: ["[Key ingredient]"],
    ingredients: "[Full INCI ingredient list]",
    howToUse: "[Application instructions]"
  }
];
