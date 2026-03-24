const products = [
  {
    id: 1,
    name: "Rosette Lace Corset Top",
    category: "clothing",
    price: 1299,
    image: "https://www.shopamericanthreads.com/cdn/shop/files/daphne-white-rosette-lace-spaghetti-strap-corset-top-hope-white-tiered-maxi-skirt-soft-girl-romantic-aesthetic-outfit-2_afaf654e-591f-40a1-b853-6fd4806a9b33.jpg?v=1735361528",
    description: "A delicate lace corset top with rosette details. Perfect for layering over a white shirt or wearing solo for a vintage evening look.",
    rating: 4.7
  },
  {
    id: 2,
    name: "Dusty Pink Floral Midi Skirt",
    category: "clothing",
    price: 1599,
    image: "https://m.media-amazon.com/images/I/41wPmT57kTL._SY350_.jpg",
    description: "A flowy midi skirt with vintage floral print in dusty pink tones. Effortlessly feminine and perfect for any occasion.",
    rating: 4.5
  },
  {
    id: 3,
    name: "Cream Puff Sleeve Blouse",
    category: "clothing",
    price: 1199,
    image: "https://anvicouture.com/cdn/shop/files/5_25_202511_03_01PM.jpg?crop=center&height=1680&v=1757331446&width=1200",
    description: "A romantic cream blouse with statement puff sleeves. Pairs beautifully with high waisted trousers or a vintage denim skirt.",
    rating: 4.6
  },
  {
    id: 4,
    name: "Burgundy Velvet Blazer",
    category: "clothing",
    price: 2499,
    image: "https://m.media-amazon.com/images/I/41JPAaMmUJL.jpg",
    description: "A rich burgundy velvet blazer that adds instant vintage glamour to any outfit. A true Pink Attic statement piece.",
    rating: 4.8
  },
  {
    id: 5,
    name: "Vintage Denim Pinafore Dress",
    category: "clothing",
    price: 1799,
    image: "https://m.media-amazon.com/images/I/61HdABvsFQL._AC_UY1100_.jpg",
    description: "A classic denim pinafore dress with vintage wash finish. Layer over a striped tee for that perfect 90s thrift store look.",
    rating: 4.4
  },
  {
    id: 6,
    name: "Sage Green Wrap Dress",
    category: "clothing",
    price: 1899,
    image: "https://m.media-amazon.com/images/I/41EaNSYt+WL._SY879_.jpg",
    description: "A flattering sage green wrap dress with vintage floral trim. Timeless, elegant and endlessly wearable.",
    rating: 4.6
  },
  {
    id: 7,
    name: "Ivory Crochet Cardigan",
    category: "clothing",
    price: 1599,
    image: "https://media.littlewoods.com/i/littlewoods/W03L6_SQ1_0000000067_CREAM_MDf?$pdp_300x400_x2$&fmt=jpg",
    description: "A handcrafted ivory crochet cardigan with vintage bohemian energy. Perfect layering piece for any season.",
    rating: 4.7
  },
  {
    id: 8,
    name: "Plaid High Waist Trousers",
    category: "clothing",
    price: 1699,
    image: "https://m.media-amazon.com/images/I/81fQnBRPL9L._AC_UY350_.jpg",
    description: "Classic plaid high waist trousers with a vintage 70s silhouette. Pair with a tucked in blouse for the full effect.",
    rating: 4.5
  },
  {
    id: 9,
    name: "Floral Cottagecore Sundress",
    category: "clothing",
    price: 1499,
    image: "https://m.media-amazon.com/images/I/7159HXdkkWS._AC_UY1100_.jpg",
    description: "A dreamy cottagecore sundress with delicate floral print and smocked bodice. Pure vintage garden party energy.",
    rating: 4.8
  },
  {
    id: 10,
    name: "Black Vintage Mini Skirt",
    category: "clothing",
    price: 1199,
    image: "https://m.media-amazon.com/images/I/91zgXX3cB2L._AC_UY1100_.jpg",
    description: "A classic black mini skirt with vintage pleated detail. The ultimate versatile piece for any Pink Attic wardrobe.",
    rating: 4.4
  },
  {
    id: 11,
    name: "Brown Leather Structured Tote",
    category: "bags",
    price: 2199,
    image: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/H46521s.jpg?im=Resize,width=750",
    description: "A timeless brown leather structured tote with gold hardware. Spacious enough for everyday use with a vintage touch.",
    rating: 4.9
  },
  {
    id: 12,
    name: "Beaded Floral Clutch",
    category: "bags",
    price: 1499,
    image: "https://m.media-amazon.com/images/I/718LfXZmkAL._SX695_.jpg",
    description: "A handcrafted beaded clutch with delicate floral pattern. The perfect vintage accessory for evenings out.",
    rating: 4.6
  },
  {
    id: 13,
    name: "Woven Straw Bucket Bag",
    category: "bags",
    price: 1299,
    image: "https://i.etsystatic.com/11753315/r/il/d49f49/3858478573/il_570xN.3858478573_n3bx.jpg",
    description: "A charming woven straw bucket bag perfect for summer days. Vintage vacation vibes in every stitch.",
    rating: 4.3
  },
  {
    id: 14,
    name: "Pearl Chain Shoulder Bag",
    category: "bags",
    price: 1899,
    image: "https://m.media-amazon.com/images/I/61SU8feDkdL.jpg",
    description: "A dainty shoulder bag with pearl chain strap. Elegant, feminine and very Pink Attic coded.",
    rating: 4.7
  },
  {
    id: 15,
    name: "Vintage Silk Scarf Headband",
    category: "jewelry",
    price: 599,
    image: "https://m.media-amazon.com/images/I/71IM-2lOGmL._AC_UY1000_.jpg",
    description: "A luxurious silk scarf that doubles as a headband or bag accessory. Very Audrey Hepburn, very Pink Attic.",
    rating: 4.8
  },
  {
    id: 16,
    name: "Pearl Drop Earrings",
    category: "jewelry",
    price: 699,
    image: "https://i.etsystatic.com/14859358/r/il/4ab09c/6580898374/il_fullxfull.6580898374_3ufq.jpg",
    description: "Delicate freshwater pearl drop earrings with gold finish. Understated elegance for every occasion.",
    rating: 4.9
  },
  {
    id: 17,
    name: "Vintage Cameo Brooch",
    category: "jewelry",
    price: 899,
    image: "https://m.media-amazon.com/images/I/71khbz-aLxL._AC_UY1100_.jpg",
    description: "A beautiful vintage style cameo brooch in antique gold. Pin it on a blazer or bag for instant old money vibes.",
    rating: 4.7
  },
  {
    id: 18,
    name: "Gold Layered Necklace Set",
    category: "jewelry",
    price: 1199,
    image: "https://zariin.com/cdn/shop/files/ASRN728_2_75202d1e-283e-4357-96e8-6bacb6bd5162.jpg?v=1756541741",
    description: "A dainty set of three layered gold necklaces. Mix and match for that effortless vintage layered look.",
    rating: 4.8
  },
  {
    id: 19,
    name: "Floral Enamel Ring",
    category: "jewelry",
    price: 599,
    image: "https://m.media-amazon.com/images/I/61fDV82AcqL._AC_UY300_.jpg",
    description: "A sweet floral enamel ring in blush pink and gold. Dainty, feminine and very Pink Attic.",
    rating: 4.6
  },
  {
    id: 20,
    name: "Velvet Ribbon Choker",
    category: "jewelry",
    price: 499,
    image: "https://m.media-amazon.com/images/I/41nONwcQi0L._AC_UY300_.jpg",
    description: "A classic black velvet ribbon choker with vintage gold charm. Dark romantic energy meets feminine elegance.",
    rating: 4.5
  }
];

export default products;