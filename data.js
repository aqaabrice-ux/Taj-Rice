/* =====================================================
   TAJ RICE – SHARED DATA + CART ENGINE
   ===================================================== */

const WA = "923128168702";

/* ── CATEGORIES ── */
let CATEGORIES = [
  { id:"rice",       icon:"🌾", label:"Rice",              color:"#4A3000,#8B6914", subs:["All","Super Basmati","Sella Basmati","Kainat","Parboiled","Broken Rice"] },
  { id:"commodities",icon:"🌽", label:"Commodities",       color:"#1A3320,#2E7D32", subs:["All","Pulses","Flour","Beans","Grains"] },
  { id:"oil-ghee",   icon:"🫙", label:"Oil & Ghee",        color:"#0A2040,#1565C0", subs:["All","Cooking Oil","Vegetable Ghee","Desi Ghee","Olive Oil"] },
  { id:"masala",     icon:"🌶️",label:"Masala",             color:"#3D0A0A,#B71C1C", subs:["All","Recipe Mixes","Garam Masala","Single Spices","Salt & Pepper"] },
  { id:"tea-coffee", icon:"☕", label:"Tea & Coffee",      color:"#2A1505,#5D4037", subs:["All","Black Tea","Green Tea","Coffee","Milk Tea Mixes"] },
  { id:"dairy",      icon:"🥛", label:"Dairy",             color:"#0A2030,#01579B", subs:["All","Milk","Butter","Yogurt","Cream","Cheese"] },
  { id:"soaps",      icon:"🧴", label:"Soaps & Shampoo",   color:"#1A0A2E,#4527A0", subs:["All","Bath Soaps","Shampoo","Conditioner","Hand Wash","Body Wash"] },
  { id:"detergent",  icon:"🧺", label:"Detergent & Laundry",color:"#0A2E18,#1B5E20",subs:["All","Washing Powder","Liquid Detergent","Fabric Softener","Dishwash","Surface Cleaners"] },
  { id:"health",     icon:"💄", label:"Health & Beauty",   color:"#2E0A18,#880E4F", subs:["All","Skin Care","Hair Care","Oral Care","Vitamins","Feminine Care"] },
];

/* ── PRODUCTS ── */
const PRODUCTS = {
  rice:[
    {id:"r1",icon:"🌾",cat:"Super Basmati",name:"Taj Super Basmati Rice",weight:"5 kg",price:1250,badge:"Best Seller",highlights:["Extra-long aromatic grain","Perfect for biryani & pulao","Rich fragrance when cooked","Sourced from premium fields"]},
    {id:"r2",icon:"🌾",cat:"Super Basmati",name:"Taj Super Basmati Rice",weight:"10 kg",price:2450,highlights:["Extra-long aromatic grain","Ideal for large families","Rich fragrance when cooked","Economy family pack"]},
    {id:"r3",icon:"🌾",cat:"Super Basmati",name:"Taj Super Basmati Rice",weight:"25 kg",price:5900,badge:"Value Pack",highlights:["Bulk family pack","Premium aged grain","Long grain variety","Best value per kg"]},
    {id:"r4",icon:"🌾",cat:"Sella Basmati",name:"Taj Sella Basmati Rice",weight:"5 kg",price:1100,highlights:["Parboiled for nutrition","Non-sticky texture","Perfect for everyday meals","Golden sella variety"]},
    {id:"r5",icon:"🌾",cat:"Sella Basmati",name:"Taj Sella Basmati Rice",weight:"10 kg",price:2100,highlights:["Parboiled for nutrition","Non-sticky texture","Ideal for large families","Golden sella variety"]},
    {id:"r6",icon:"🌾",cat:"Kainat",name:"Taj Kainat Rice",weight:"5 kg",price:950,highlights:["Premium Kainat variety","Soft and fluffy","Great for everyday use","Affordable quality"]},
    {id:"r7",icon:"🌾",cat:"Kainat",name:"Taj Kainat Rice",weight:"10 kg",price:1850,highlights:["Premium Kainat variety","Bulk family pack","Soft and fluffy","Great value"]},
    {id:"r8",icon:"🌾",cat:"Parboiled",name:"Taj Parboiled Rice",weight:"5 kg",price:850,badge:"New",highlights:["Nutrient-rich","Non-sticky","Easy to cook","Healthy option"]},
    {id:"r9",icon:"🌾",cat:"Broken Rice",name:"Taj Broken Rice",weight:"5 kg",price:480,highlights:["Budget friendly","Good for khichdi","Soft texture","Economy option"]},
  ],
  commodities:[
    {id:"c1",icon:"🌿",cat:"Pulses",name:"Moong Dal Split",weight:"1 kg",price:320,highlights:["High protein","Easy to digest","Fresh batch","Premium grade"]},
    {id:"c2",icon:"🌿",cat:"Pulses",name:"Masoor Dal Red Lentil",weight:"1 kg",price:280,highlights:["Rich in iron","Fast cooking","Fresh batch","Premium grade"]},
    {id:"c3",icon:"🌿",cat:"Pulses",name:"Chana Dal",weight:"1 kg",price:260,highlights:["High fiber","Versatile use","Fresh batch","Premium grade"]},
    {id:"c4",icon:"🌿",cat:"Pulses",name:"Urad Dal",weight:"1 kg",price:350,highlights:["High protein","Smooth texture","Fresh batch","Premium grade"]},
    {id:"c5",icon:"🌾",cat:"Flour",name:"Wheat Flour Atta",weight:"5 kg",price:520,badge:"Popular",highlights:["100% whole wheat","Fresh milled","Soft rotis","Premium grade"]},
    {id:"c6",icon:"🌾",cat:"Flour",name:"Maida All Purpose Flour",weight:"1 kg",price:140,highlights:["Fine texture","Ideal for baking","Fresh milled","Premium grade"]},
    {id:"c7",icon:"🌾",cat:"Flour",name:"Besan Gram Flour",weight:"1 kg",price:200,highlights:["100% gram flour","Fresh milled","Smooth texture","Premium grade"]},
    {id:"c8",icon:"🫘",cat:"Beans",name:"Red Kidney Beans",weight:"1 kg",price:280,highlights:["High protein","Rich iron","Fresh batch","Premium grade"]},
    {id:"c9",icon:"🫘",cat:"Beans",name:"White Chickpeas Kabuli",weight:"1 kg",price:240,badge:"Popular",highlights:["Large size","High protein","Fresh batch","Premium grade"]},
    {id:"c10",icon:"🫘",cat:"Beans",name:"Black Eye Beans",weight:"1 kg",price:220,highlights:["High fiber","Easy cooking","Fresh batch","Premium grade"]},
    {id:"c11",icon:"🫘",cat:"Beans",name:"Mung Beans Whole",weight:"1 kg",price:300,highlights:["High protein","Sproutable","Fresh batch","Premium grade"]},
    {id:"c12",icon:"🌽",cat:"Grains",name:"Corn Flour",weight:"500 g",price:120,highlights:["Gluten free","Fine texture","Fresh milled","Premium grade"]},
  ],
  "oil-ghee":[
    {id:"o1",icon:"🫙",cat:"Cooking Oil",name:"Canola Cooking Oil",weight:"1 ltr",price:380,highlights:["Heart healthy","Low saturated fat","High smoke point","Premium quality"]},
    {id:"o2",icon:"🫙",cat:"Cooking Oil",name:"Canola Cooking Oil",weight:"5 ltr",price:1750,badge:"Value Pack",highlights:["Heart healthy","Family value pack","High smoke point","Premium quality"]},
    {id:"o3",icon:"🫙",cat:"Cooking Oil",name:"Sunflower Oil",weight:"1 ltr",price:420,highlights:["Light flavor","High vitamin E","High smoke point","Premium quality"]},
    {id:"o4",icon:"🫙",cat:"Cooking Oil",name:"Sunflower Oil",weight:"5 ltr",price:1950,highlights:["Light flavor","Family pack","High smoke point","Premium quality"]},
    {id:"o5",icon:"🫙",cat:"Cooking Oil",name:"Corn Oil",weight:"1 ltr",price:460,highlights:["Natural corn oil","High smoke point","Light taste","Premium quality"]},
    {id:"o6",icon:"🫙",cat:"Vegetable Ghee",name:"Vegetable Ghee Banaspati",weight:"1 kg",price:520,highlights:["Rich flavor","Perfect for baking","Creamy texture","Premium grade"]},
    {id:"o7",icon:"🫙",cat:"Vegetable Ghee",name:"Vegetable Ghee Banaspati",weight:"2.5 kg",price:1250,highlights:["Rich flavor","Family value pack","Creamy texture","Premium grade"]},
    {id:"o8",icon:"🪔",cat:"Desi Ghee",name:"Pure Desi Ghee",weight:"500 g",price:680,badge:"Premium",highlights:["100% pure","Rich aroma","Traditional recipe","A2 quality"]},
    {id:"o9",icon:"🪔",cat:"Desi Ghee",name:"Pure Desi Ghee",weight:"1 kg",price:1300,highlights:["100% pure","Rich aroma","Traditional recipe","A2 quality"]},
    {id:"o10",icon:"🫒",cat:"Olive Oil",name:"Extra Virgin Olive Oil",weight:"500 ml",price:950,highlights:["Cold pressed","Rich antioxidants","Mediterranean grade","Premium quality"]},
    {id:"o11",icon:"🫒",cat:"Olive Oil",name:"Olive Oil Pomace",weight:"1 ltr",price:750,highlights:["Light flavor","Cooking grade","High smoke point","Premium quality"]},
    {id:"o12",icon:"🫙",cat:"Cooking Oil",name:"Pure Canola Oil",weight:"3 ltr",price:1050,highlights:["Heart healthy","Economy pack","High smoke point","Premium quality"]},
  ],
  masala:[
    {id:"m1",icon:"🌶️",cat:"Recipe Mixes",name:"Biryani Masala Mix",weight:"50 g",price:85,badge:"Top Pick",highlights:["Authentic blend","Aromatic spices","No artificial colors","Restaurant quality"]},
    {id:"m2",icon:"🌶️",cat:"Recipe Mixes",name:"Karahi Masala Mix",weight:"50 g",price:80,highlights:["Bold spicy blend","Authentic recipe","No artificial colors","Restaurant quality"]},
    {id:"m3",icon:"🌶️",cat:"Recipe Mixes",name:"Nihari Masala Mix",weight:"50 g",price:85,highlights:["Slow cook blend","Authentic recipe","Rich aroma","Restaurant quality"]},
    {id:"m4",icon:"🌶️",cat:"Recipe Mixes",name:"Chicken Tikka Masala",weight:"50 g",price:75,highlights:["Smoky flavor","Authentic blend","No artificial colors","Restaurant quality"]},
    {id:"m5",icon:"🌶️",cat:"Recipe Mixes",name:"Haleem Masala Mix",weight:"100 g",price:120,highlights:["Complete spice blend","Authentic recipe","Rich aroma","Restaurant quality"]},
    {id:"m6",icon:"🌶️",cat:"Recipe Mixes",name:"Qorma Masala",weight:"50 g",price:80,highlights:["Mild rich blend","Authentic recipe","Aromatic spices","Restaurant quality"]},
    {id:"m7",icon:"🌶️",cat:"Garam Masala",name:"Garam Masala Whole",weight:"100 g",price:180,highlights:["Whole spices","Freshly sourced","Aromatic blend","Premium grade"]},
    {id:"m8",icon:"🌶️",cat:"Garam Masala",name:"Garam Masala Powder",weight:"100 g",price:150,highlights:["Freshly ground","Aromatic blend","No fillers","Premium grade"]},
    {id:"m9",icon:"🌶️",cat:"Single Spices",name:"Red Chilli Powder",weight:"200 g",price:120,highlights:["Premium Kashmiri","Vibrant color","Fresh ground","No additives"]},
    {id:"m10",icon:"🌿",cat:"Single Spices",name:"Turmeric Powder",weight:"200 g",price:100,highlights:["Pure curcumin","Anti-inflammatory","Fresh ground","No additives"]},
    {id:"m11",icon:"🌿",cat:"Single Spices",name:"Coriander Powder",weight:"200 g",price:110,highlights:["Freshly ground","Aromatic","No fillers","Premium grade"]},
    {id:"m12",icon:"🧂",cat:"Salt & Pepper",name:"Himalayan Pink Salt",weight:"800 g",price:160,highlights:["Natural minerals","No additives","Hand mined","Premium quality"]},
  ],
  "tea-coffee":[
    {id:"t1",icon:"☕",cat:"Black Tea",name:"Tapal Danedar Tea",weight:"450 g",price:480,badge:"Popular",highlights:["Strong flavor","Fresh leaves","Classic blend","Pakistan favorite"]},
    {id:"t2",icon:"☕",cat:"Black Tea",name:"Lipton Yellow Label",weight:"200 g",price:380,highlights:["Smooth flavor","Fresh leaves","International brand","Great aroma"]},
    {id:"t3",icon:"☕",cat:"Black Tea",name:"Supreme Tea",weight:"800 g",price:820,highlights:["Rich flavor","Family pack","Premium leaves","Classic blend"]},
    {id:"t4",icon:"☕",cat:"Black Tea",name:"Brooke Bond Tea",weight:"190 g",price:350,highlights:["Rich flavor","Fresh leaves","Classic blend","Great aroma"]},
    {id:"t5",icon:"🍵",cat:"Green Tea",name:"Green Tea Jasmine",weight:"100 g",price:280,highlights:["Antioxidant rich","Jasmine blended","Low caffeine","Premium grade"]},
    {id:"t6",icon:"🍵",cat:"Green Tea",name:"Mint Green Tea",weight:"100 g",price:260,highlights:["Refreshing mint","Antioxidant rich","Low caffeine","Premium grade"]},
    {id:"t7",icon:"☕",cat:"Coffee",name:"Nescafe Classic",weight:"200 g",price:720,highlights:["Rich coffee taste","Instant dissolve","Consistent quality","International brand"]},
    {id:"t8",icon:"☕",cat:"Coffee",name:"Davidoff Rich Aroma",weight:"100 g",price:880,badge:"Premium",highlights:["Premium arabica","Rich aroma","Smooth taste","International brand"]},
    {id:"t9",icon:"☕",cat:"Milk Tea Mixes",name:"3-in-1 Milk Tea",weight:"Box of 10",price:320,highlights:["Complete in sachet","Consistent taste","Easy to make","Great value"]},
    {id:"t10",icon:"☕",cat:"Coffee",name:"Nescafe 3-in-1",weight:"Box of 20",price:480,highlights:["Complete in sachet","Consistent taste","Easy to make","Great value"]},
  ],
  dairy:[
    {id:"d1",icon:"🥛",cat:"Milk",name:"Olpers Full Cream Milk",weight:"1 ltr",price:185,highlights:["Full cream UHT","Calcium rich","Fresh taste","Long shelf life"]},
    {id:"d2",icon:"🥛",cat:"Milk",name:"Nestle Milkpak UHT",weight:"1 ltr",price:188,highlights:["Full cream UHT","Calcium rich","Fresh taste","Long shelf life"]},
    {id:"d3",icon:"🥛",cat:"Milk",name:"Good Milk Skimmed",weight:"1 ltr",price:170,highlights:["Low fat","Calcium rich","Light taste","Long shelf life"]},
    {id:"d4",icon:"🧈",cat:"Butter",name:"Olpers Butter Salted",weight:"200 g",price:320,badge:"Fresh",highlights:["Creamy texture","Salted variety","Fresh dairy","Premium quality"]},
    {id:"d5",icon:"🧈",cat:"Butter",name:"Blue Band Margarine",weight:"250 g",price:280,highlights:["Soft spreadable","Light flavor","Ideal for baking","Premium quality"]},
    {id:"d6",icon:"🥛",cat:"Yogurt",name:"Activia Plain Yogurt",weight:"400 g",price:180,highlights:["Probiotic rich","Creamy texture","Fresh dairy","Premium quality"]},
    {id:"d7",icon:"🥛",cat:"Yogurt",name:"Nestle Plain Yogurt",weight:"200 g",price:110,highlights:["Fresh dairy","Creamy texture","Probiotic rich","Premium quality"]},
    {id:"d8",icon:"🍦",cat:"Cream",name:"Olpers Whipping Cream",weight:"200 ml",price:195,highlights:["Rich cream","Whippable","Fresh dairy","Premium quality"]},
    {id:"d9",icon:"🧀",cat:"Cheese",name:"Cheddar Cheese Slices",weight:"200 g",price:380,highlights:["Mild cheddar","Melts well","Fresh dairy","Premium quality"]},
    {id:"d10",icon:"🧀",cat:"Cheese",name:"Cream Cheese",weight:"200 g",price:420,highlights:["Smooth texture","Mild flavor","Fresh dairy","Premium quality"]},
  ],
  soaps:[
    {id:"s1",icon:"🧼",cat:"Bath Soaps",name:"Lux Soap Bar",weight:"120 g",price:95,highlights:["Moisturizing","Floral fragrance","Gentle on skin","Premium grade"]},
    {id:"s2",icon:"🧼",cat:"Bath Soaps",name:"Dettol Antibacterial Soap",weight:"115 g",price:120,badge:"Antibacterial",highlights:["99.9% germ kill","Antibacterial formula","Doctor recommended","Gentle on skin"]},
    {id:"s3",icon:"🧼",cat:"Bath Soaps",name:"Safeguard Family Soap",weight:"175 g",price:145,highlights:["Family protection","Long lasting","Germ protection","Gentle on skin"]},
    {id:"s4",icon:"🧼",cat:"Bath Soaps",name:"Lifebuoy Soap",weight:"120 g",price:90,highlights:["Germ protection","Value for money","Refreshing scent","Gentle on skin"]},
    {id:"s5",icon:"🧴",cat:"Shampoo",name:"Head and Shoulders Shampoo",weight:"360 ml",price:580,highlights:["Anti-dandruff","Clinically proven","Scalp care","Premium formula"]},
    {id:"s6",icon:"🧴",cat:"Shampoo",name:"Pantene Pro-V Shampoo",weight:"360 ml",price:560,highlights:["Hair strengthening","Pro-Vitamin B5","Smooth & silky","Premium formula"]},
    {id:"s7",icon:"🧴",cat:"Shampoo",name:"Sunsilk Shampoo",weight:"350 ml",price:420,highlights:["Smooth hair","Keratin infused","Frizz control","Premium formula"]},
    {id:"s8",icon:"🧴",cat:"Conditioner",name:"Pantene Conditioner",weight:"200 ml",price:380,highlights:["Deep conditioning","Pro-Vitamin B5","Smooth & silky","Premium formula"]},
    {id:"s9",icon:"🫧",cat:"Hand Wash",name:"Dettol Hand Wash",weight:"250 ml",price:240,highlights:["99.9% germ kill","Gentle formula","Doctor recommended","Moisturizing"]},
    {id:"s10",icon:"🫧",cat:"Body Wash",name:"Dove Body Wash",weight:"500 ml",price:650,highlights:["Moisturizing","Quarter cleansing cream","Gentle formula","Premium grade"]},
  ],
  detergent:[
    {id:"dt1",icon:"🧺",cat:"Washing Powder",name:"Surf Excel Washing Powder",weight:"1 kg",price:480,badge:"Popular",highlights:["Tough stain removal","Brilliant whites","Color safe","Premium formula"]},
    {id:"dt2",icon:"🧺",cat:"Washing Powder",name:"Ariel Washing Powder",weight:"1 kg",price:520,highlights:["Superior clean","Bright whites","Color safe","Premium formula"]},
    {id:"dt3",icon:"🧺",cat:"Washing Powder",name:"Bonus Washing Powder",weight:"1.8 kg",price:480,highlights:["Value family pack","Stain removal","Color safe","Economy formula"]},
    {id:"dt4",icon:"🧺",cat:"Washing Powder",name:"Brite Washing Powder",weight:"1 kg",price:380,highlights:["Bright whites","Stain removal","Color safe","Economy formula"]},
    {id:"dt5",icon:"🫧",cat:"Liquid Detergent",name:"Surf Excel Liquid",weight:"500 ml",price:380,highlights:["Gentle on clothes","No soaking needed","Color safe","Premium formula"]},
    {id:"dt6",icon:"🌸",cat:"Fabric Softener",name:"Comfort Fabric Softener",weight:"500 ml",price:320,highlights:["Long lasting fragrance","Soft feel","Easy iron","Premium formula"]},
    {id:"dt7",icon:"🌸",cat:"Fabric Softener",name:"Softlan Fabric Conditioner",weight:"900 ml",price:450,highlights:["Long lasting fragrance","Soft feel","Family pack","Premium formula"]},
    {id:"dt8",icon:"🍋",cat:"Dishwash",name:"Fairy Dishwashing Liquid",weight:"800 ml",price:560,highlights:["Cuts through grease","Long lasting","Lemon fresh","Premium formula"]},
    {id:"dt9",icon:"🍋",cat:"Dishwash",name:"Vim Dishwash Bar",weight:"200 g",price:120,highlights:["Tough on grease","Value for money","Lemon power","Economy formula"]},
    {id:"dt10",icon:"✨",cat:"Surface Cleaners",name:"Dettol Floor Cleaner",weight:"1 ltr",price:380,highlights:["Antibacterial","Pine fresh","Kills 99.9% germs","Premium formula"]},
    {id:"dt11",icon:"✨",cat:"Surface Cleaners",name:"Colin Glass Cleaner",weight:"500 ml",price:280,highlights:["Streak free shine","Fast acting","All surfaces","Premium formula"]},
  ],
  health:[
    {id:"h1",icon:"💄",cat:"Skin Care",name:"Ponds Face Cream",weight:"75 g",price:320,highlights:["Moisturizing","Brightening","SPF protection","Dermatologist tested"]},
    {id:"h2",icon:"💄",cat:"Skin Care",name:"Fair and Lovely Face Cream",weight:"50 g",price:180,highlights:["Skin brightening","Moisturizing","Daily use","Dermatologist tested"]},
    {id:"h3",icon:"🧴",cat:"Skin Care",name:"Nivea Body Lotion",weight:"250 ml",price:480,highlights:["24hr moisturizing","Gentle formula","Smooth skin","Dermatologist tested"]},
    {id:"h4",icon:"💊",cat:"Vitamins",name:"Multivitamin Tablets",weight:"30 tabs",price:380,badge:"Health",highlights:["Complete nutrition","Daily essential","Easy to swallow","Premium quality"]},
    {id:"h5",icon:"💊",cat:"Vitamins",name:"Vitamin C 1000mg",weight:"20 tabs",price:280,highlights:["Immune support","Antioxidant","Easy to swallow","Premium quality"]},
    {id:"h6",icon:"🦷",cat:"Oral Care",name:"Colgate Total Toothpaste",weight:"150 g",price:220,highlights:["12hr protection","Cavity guard","Whitening effect","Dentist recommended"]},
    {id:"h7",icon:"🦷",cat:"Oral Care",name:"Sensodyne Toothpaste",weight:"100 g",price:320,highlights:["Sensitivity relief","Enamel care","Daily protection","Dentist recommended"]},
    {id:"h8",icon:"🪥",cat:"Oral Care",name:"Colgate Toothbrush",weight:"Medium",price:120,highlights:["Soft bristles","Tongue cleaner","Compact head","Dentist recommended"]},
    {id:"h9",icon:"💇",cat:"Hair Care",name:"Garnier Fructis Serum",weight:"150 ml",price:420,highlights:["Frizz control","Shine boost","Lightweight","Salon quality"]},
    {id:"h10",icon:"🌺",cat:"Feminine Care",name:"Always Sanitary Pads",weight:"Pack of 8",price:220,highlights:["Ultra thin","Leak protection","Odor control","Premium quality"]},
    {id:"h11",icon:"🌺",cat:"Feminine Care",name:"Stayfree Pads Ultra",weight:"Pack of 8",price:200,highlights:["Super absorbent","Leak guard","Comfort fit","Premium quality"]},
  ]
};

// Flat list
const ALL_PRODUCTS = [];
Object.entries(PRODUCTS).forEach(([sec,arr]) => arr.forEach(p => ALL_PRODUCTS.push({...p,section:sec})));

/* =====================================================
   CART ENGINE
   ===================================================== */
const Cart = {
  items: JSON.parse(localStorage.getItem('tajrice_cart') || '[]'),

  save() { localStorage.setItem('tajrice_cart', JSON.stringify(this.items)); },

  add(product, qty=1) {
    const existing = this.items.find(i => i.id === product.id);
    if (existing) { existing.qty += qty; }
    else { this.items.push({ id:product.id, section:product.section, name:product.name, icon:product.icon, weight:product.weight, price:product.price, qty }); }
    this.save(); this.updateBadge(); this.showToast(product.name);
  },

  remove(id) { this.items = this.items.filter(i => i.id !== id); this.save(); this.updateBadge(); },

  updateQty(id, qty) {
    const item = this.items.find(i => i.id === id);
    if (item) { item.qty = Math.max(1, qty); this.save(); }
  },

  total() { return this.items.reduce((s,i) => s + i.price * i.qty, 0); },
  count() { return this.items.reduce((s,i) => s + i.qty, 0); },
  clear() { this.items = []; this.save(); this.updateBadge(); },

  updateBadge() {
    const c = this.count();
    document.querySelectorAll('.cart-badge').forEach(b => {
      b.textContent = c;
      b.style.display = c > 0 ? 'flex' : 'none';
    });
    document.querySelectorAll('.cart-count-text').forEach(el => { el.textContent = c; });
  },

  showToast(name) {
    let t = document.getElementById('cart-toast');
    if (!t) { t = document.createElement('div'); t.id = 'cart-toast'; document.body.appendChild(t); }
    t.innerHTML = `<span>✓</span> <strong>${name}</strong> added to cart`;
    t.className = 'cart-toast show';
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 2800);
  },

  waMessage() {
    if (!this.items.length) return '';
    let msg = `Hello, I'd like to order from Taj Rice:\n\n`;
    this.items.forEach(i => {
      msg += `• *${i.name}* (${i.weight}) × ${i.qty} = Rs. ${(i.price * i.qty).toLocaleString()}\n`;
    });
    msg += `\n*Total: Rs. ${this.total().toLocaleString()}*\n\nPayment: Cash on Delivery\nPlease confirm my order. Thank you!`;
    return `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
  }
};

/* Helpers */
/* =====================================================
   LIVE CATEGORIES — loads from Firestore, falls back to
   the static CATEGORIES array above if Firebase is empty
   or unreachable.
   ===================================================== */
const _FB_CONFIG_CAT = {
  apiKey: "AIzaSyBmU634qA1XMPUJfZuHAZa8EpgcrQ_tDYU",
  authDomain: "taj-rice.firebaseapp.com",
  projectId: "taj-rice",
  storageBucket: "taj-rice.firebasestorage.app",
  messagingSenderId: "603231287383",
  appId: "1:603231287383:web:541beab2cde0676d584b12"
};

async function loadLiveCategories() {
  try {
    const { initializeApp, getApps } = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js");
    const { getFirestore, collection, getDocs, query, orderBy } =
      await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js");

    const existing = getApps().find(a => a.name === 'taj-categories');
    const app = existing || initializeApp(_FB_CONFIG_CAT, 'taj-categories');
    const db  = getFirestore(app);

    const snap = await getDocs(query(collection(db, 'categories'), orderBy('order')));
    if (!snap.empty) {
      const live = [];
      snap.forEach(d => {
        const c = d.data();
        const subs = Array.isArray(c.subCategories) ? c.subCategories : [];
        live.push({
          id: d.id,
          icon: c.icon || '📦',
          label: c.label || d.id,
          color: c.color || '#333333,#666666',
          image: c.image || '',
          subs: ['All', ...subs]
        });
      });
      CATEGORIES = live;
      window._liveCategoriesLoaded = true;
    }
  } catch (e) {
    console.warn('Could not load live categories, using defaults:', e.message);
  }
}

function goCategory(id, sub) {
  const url = sub ? `products.html?cat=${id}&sub=${encodeURIComponent(sub)}` : `products.html?cat=${id}`;
  window.location.href = url;
}
function goProduct(id, sec) { window.location.href = `product.html?id=${id}&sec=${sec}`; }
function goCart()   { window.location.href = 'cart.html'; }
function goHome()   { window.location.href = 'index.html'; }
function goProducts(){ window.location.href = 'products.html'; }
function goAbout()  { window.location.href = 'about.html'; }

/* =====================================================
   CART DRAWER ENGINE
   ===================================================== */
const CartDrawer = {
  open() {
    document.getElementById('cart-overlay').classList.add('open');
    document.getElementById('cart-drawer').classList.add('open');
    document.body.style.overflow = 'hidden';
    this.render();
  },
  close() {
    document.getElementById('cart-overlay').classList.remove('open');
    document.getElementById('cart-drawer').classList.remove('open');
    document.body.style.overflow = '';
  },
  render() {
    const items = Cart.items;
    const itemsEl = document.getElementById('cd-items');
    const total = Cart.total();
    const FREE = 2000;

    // total
    document.getElementById('cd-total-val').textContent = 'Rs. ' + total.toLocaleString();
    // free note
    const note = document.getElementById('cd-free-note');
    if (total >= FREE) {
      note.className = 'cd-free-note';
      note.textContent = '🎉 You qualify for Free Delivery!';
    } else {
      note.className = 'cd-free-note warn';
      note.textContent = `🚚 Add Rs. ${(FREE-total).toLocaleString()} more for free delivery`;
    }
    // checkout
    const btn = document.getElementById('cd-checkout-btn');
    btn.disabled = items.length === 0;

    // items
    if (!items.length) {
      itemsEl.innerHTML = `<div class="cd-empty">
        <div class="ce-ico">🛒</div>
        <p>Your cart is empty</p>
        <button class="cd-empty-btn" onclick="CartDrawer.close();goProducts()">Browse Products</button>
      </div>`;
      return;
    }
    itemsEl.innerHTML = items.map(item => `
      <div class="cd-item">
        <div class="cd-item-icon">${item.icon}</div>
        <div class="cd-item-info">
          <div class="cd-item-name">${item.name}</div>
          <div class="cd-item-meta">${item.weight} · Rs. ${item.price.toLocaleString()}</div>
          <div class="cd-item-price">Rs. ${(item.price*item.qty).toLocaleString()}</div>
        </div>
        <div class="cd-item-qty">
          <button class="cdq-btn" onclick="CartDrawer.chQty('${item.id}',-1)">−</button>
          <span class="cdq-val">${item.qty}</span>
          <button class="cdq-btn" onclick="CartDrawer.chQty('${item.id}',1)">+</button>
        </div>
        <button class="cd-item-remove" onclick="CartDrawer.removeItem('${item.id}')" title="Remove">✕</button>
      </div>`).join('');
  },
  chQty(id, d) {
    const item = Cart.items.find(i=>i.id===id);
    if (!item) return;
    const nq = item.qty + d;
    if (nq < 1) { this.removeItem(id); return; }
    Cart.updateQty(id, nq); this.render();
  },
  removeItem(id) { Cart.remove(id); this.render(); },
  checkout() {
    if (!Cart.items.length) return;
    CartDrawer.close();
    CheckoutModal.open();
  }
};

/* Inject cart drawer HTML into body */
function initCartDrawer() {
  const html = `
  <div id="cart-overlay" onclick="CartDrawer.close()"></div>
  <div id="cart-drawer">
    <div class="cd-header">
      <div class="cd-title">🛒 Your Cart</div>
      <button class="cd-close" onclick="CartDrawer.close()">✕</button>
    </div>
    <div class="cd-items" id="cd-items"></div>
    <div class="cd-footer">
      <div class="cd-total-row">
        <span class="cd-total-lbl">Total</span>
        <span class="cd-total-val" id="cd-total-val">Rs. 0</span>
      </div>
      <div id="cd-free-note" class="cd-free-note warn">Add Rs. 2,000 for free delivery</div>
      <button class="cd-checkout" id="cd-checkout-btn" onclick="CartDrawer.checkout()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        Proceed to Checkout
      </button>
      <button class="cd-view-cart" onclick="CartDrawer.close();goCart()">View Full Cart</button>
    </div>
  </div>`;
  const div = document.createElement('div');
  div.innerHTML = html;
  document.body.appendChild(div);
}

/* =====================================================
   CHECKOUT MODAL ENGINE
   ===================================================== */
const CheckoutModal = {
  open() {
    // Build mini summary
    const FREE = 2000;
    const subtotal  = Cart.total();
    const delivery  = subtotal >= FREE ? 0 : 150;
    const grandTotal = subtotal + delivery;
    const count = Cart.count();
    const el = document.getElementById('co-summary-box');
    if (el) {
      el.innerHTML = `
        <div class="co-summary-title">📦 Your Order</div>
        <div class="co-summary-row"><span>${count} item${count>1?'s':''}</span><span>Rs. ${subtotal.toLocaleString()}</span></div>
        <div class="co-summary-row"><span>Delivery</span><span>${delivery===0?'Free 🎉':'Rs. '+delivery}</span></div>
        <div class="co-summary-row total"><span>Total</span><span>Rs. ${grandTotal.toLocaleString()}</span></div>`;
    }
    // Reset errors
    ['co-name','co-phone','co-addr'].forEach(id => {
      const el = document.getElementById(id);
      if (el) { el.value = ''; el.classList.remove('err'); }
    });
    ['co-name-err','co-phone-err','co-addr-err'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });
    const overlay = document.getElementById('co-overlay');
    if (overlay) { overlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
    setTimeout(() => { const n = document.getElementById('co-name'); if(n) n.focus(); }, 120);
  },
  close() {
    const overlay = document.getElementById('co-overlay');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  },
  submit() {
    const name  = (document.getElementById('co-name').value||'').trim();
    const phone = (document.getElementById('co-phone').value||'').trim();
    const addr  = (document.getElementById('co-addr').value||'').trim();
    let valid = true;
    const setErr = (inputId, errId, show) => {
      document.getElementById(inputId).classList.toggle('err', show);
      document.getElementById(errId).style.display = show ? 'block' : 'none';
      if (show) valid = false;
    };
    setErr('co-name',  'co-name-err',  !name);
    setErr('co-phone', 'co-phone-err', !phone || phone.replace(/\D/g,'').length < 10);
    setErr('co-addr',  'co-addr-err',  !addr);
    if (!valid) return;

    const FREE = 2000;
    const subtotal   = Cart.total();
    const delivery   = subtotal >= FREE ? 0 : 150;
    const grandTotal = subtotal + delivery;

    let msg = `Hello, I'd like to place an order from Taj Rice:\n\n`;
    msg += `*Customer Details:*\n`;
    msg += `• Name: ${name}\n`;
    msg += `• Phone: ${phone}\n`;
    msg += `• Address: ${addr}\n\n`;
    msg += `*Order Items:*\n`;
    Cart.items.forEach(i => {
      msg += `• *${i.name}* (${i.weight}) × ${i.qty} = Rs. ${(i.price*i.qty).toLocaleString()}\n`;
    });
    msg += `\n*Subtotal: Rs. ${subtotal.toLocaleString()}*\n`;
    msg += `*Delivery: ${delivery===0?'Free':'Rs. '+delivery}*\n`;
    msg += `*Grand Total: Rs. ${grandTotal.toLocaleString()}*\n\n`;
    msg += `Payment: Cash on Delivery\nPlease confirm my order. Thank you!`;

    const url = `https://wa.me/923128168702?text=${encodeURIComponent(msg)}`;
    this.close();
    window.open(url, '_blank');
  }
};

/* Inject checkout modal into every page */
function initCheckoutModal() {
  if (document.getElementById('co-overlay')) return; // already exists (cart.html injects its own)
  const style = document.createElement('style');
  style.textContent = `
.co-overlay{display:none;position:fixed;inset:0;z-index:10000;background:rgba(10,6,0,.72);backdrop-filter:blur(3px);align-items:center;justify-content:center;padding:16px}
.co-overlay.open{display:flex}
.co-modal{background:#fff;border-radius:16px;width:100%;max-width:480px;box-shadow:0 24px 64px rgba(0,0,0,.28);overflow:hidden;animation:coSlideUp .22s ease}
@keyframes coSlideUp{from{transform:translateY(24px);opacity:0}to{transform:translateY(0);opacity:1}}
.co-head{background:linear-gradient(135deg,#1A0E00,#3D2800);padding:22px 26px 18px;position:relative}
.co-head-tag{display:inline-flex;align-items:center;gap:6px;background:rgba(200,160,48,.18);color:#F5D060;font-size:.65rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:3px 10px;border-radius:3px;margin-bottom:10px}
.co-head h2{font-size:1.25rem;color:#fff;margin:0 0 4px}
.co-head p{font-size:.76rem;color:rgba(255,255,255,.55);margin:0}
.co-close{position:absolute;top:14px;right:16px;background:rgba(255,255,255,.1);border:none;color:#fff;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;transition:background .13s}
.co-close:hover{background:rgba(255,255,255,.22)}
.co-body{padding:24px 26px 20px}
.co-field{margin-bottom:18px}
.co-label{display:block;font-size:.7rem;font-weight:800;color:#444;text-transform:uppercase;letter-spacing:.07em;margin-bottom:7px}
.co-label span{color:#C8860A}
.co-input,.co-textarea{width:100%;padding:11px 14px 11px 38px;border:1.5px solid #E0D5C0;border-radius:8px;font-size:.88rem;font-family:inherit;color:#1A1208;background:#FDFAF3;outline:none;transition:border-color .15s,box-shadow .15s;box-sizing:border-box}
.co-textarea{padding-left:14px;resize:none;min-height:80px;line-height:1.5}
.co-input:focus,.co-textarea:focus{border-color:#C8860A;box-shadow:0 0 0 3px rgba(200,134,10,.12);background:#fff}
.co-input.err,.co-textarea.err{border-color:#C0392B;box-shadow:0 0 0 3px rgba(192,57,43,.1)}
.co-err-msg{font-size:.7rem;color:#C0392B;margin-top:5px;display:none}
.co-input-icon{position:relative}
.co-input-icon .ico{position:absolute;left:12px;top:50%;transform:translateY(-50%);font-size:1rem;pointer-events:none}
.co-summary{background:#FFF8EC;border:1px solid #F5E0A0;border-radius:8px;padding:12px 16px;margin-bottom:20px}
.co-summary-title{font-size:.66rem;font-weight:800;color:#8B6914;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px}
.co-summary-row{display:flex;justify-content:space-between;font-size:.78rem;color:#555;margin-bottom:4px}
.co-summary-row.total{font-weight:800;color:#1A1208;font-size:.86rem;margin-top:6px;padding-top:6px;border-top:1px solid #F0E0A8}
.co-summary-row.total span{color:#C8860A}
.co-submit{width:100%;padding:14px;background:#25D366;color:#fff;border:none;border-radius:8px;font-size:.9rem;font-weight:800;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;transition:background .13s,transform .1s}
.co-submit:hover{background:#1EAE54}
.co-submit:active{transform:scale(.98)}
.co-note{text-align:center;font-size:.7rem;color:#999;margin-top:10px}
@media(max-width:500px){.co-head{padding:18px 18px 14px}.co-body{padding:18px 18px 16px}}
`;
  document.head.appendChild(style);

  const div = document.createElement('div');
  div.innerHTML = `
  <div class="co-overlay" id="co-overlay" onclick="if(event.target===this)CheckoutModal.close()">
    <div class="co-modal">
      <div class="co-head">
        <div class="co-head-tag">🛒 Confirm Order</div>
        <h2>Almost there!</h2>
        <p>Enter your details and we'll open WhatsApp with your order.</p>
        <button class="co-close" onclick="CheckoutModal.close()">✕</button>
      </div>
      <div class="co-body">
        <div class="co-summary" id="co-summary-box"></div>
        <div class="co-field">
          <label class="co-label" for="co-name">Full Name <span>*</span></label>
          <div class="co-input-icon">
            <span class="ico">👤</span>
            <input class="co-input" id="co-name" type="text" placeholder="e.g. Ahmed Khan" autocomplete="name" maxlength="60"/>
          </div>
          <div class="co-err-msg" id="co-name-err">Please enter your name.</div>
        </div>
        <div class="co-field">
          <label class="co-label" for="co-phone">WhatsApp / Phone Number <span>*</span></label>
          <div class="co-input-icon">
            <span class="ico">📱</span>
            <input class="co-input" id="co-phone" type="tel" placeholder="e.g. 0312-8168702" autocomplete="tel" maxlength="20"/>
          </div>
          <div class="co-err-msg" id="co-phone-err">Please enter a valid phone number.</div>
        </div>
        <div class="co-field">
          <label class="co-label" for="co-addr">Delivery Address <span>*</span></label>
          <textarea class="co-textarea" id="co-addr" placeholder="House #, Street, Area, City…" autocomplete="street-address" maxlength="200"></textarea>
          <div class="co-err-msg" id="co-addr-err">Please enter your delivery address.</div>
        </div>
        <button class="co-submit" onclick="CheckoutModal.submit()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          Place Order on WhatsApp
        </button>
        <p class="co-note">💵 Cash on Delivery &nbsp;·&nbsp; Your details stay private</p>
      </div>
    </div>
  </div>`;
  document.body.appendChild(div);
}

/* Override Cart.showToast to also update drawer if open */
const _origAdd = Cart.add.bind(Cart);
Cart.add = function(product, qty=1) {
  _origAdd(product, qty);
  if (document.getElementById('cart-drawer') && document.getElementById('cart-drawer').classList.contains('open')) {
    CartDrawer.render();
  }
};

/* Shared header builder */
function buildHeader(activePage) {
  // Ann bar close
  const annX = document.getElementById('ann-x');
  if (annX) annX.onclick = () => document.getElementById('ann').remove();

  // Cart badge init
  Cart.updateBadge();

  // Cart button opens drawer
  document.querySelectorAll('.cart-btn').forEach(btn => {
    btn.onclick = () => CartDrawer.open();
  });

  // Mega dropdown
  const megaCatsEl = document.getElementById('mega-cats');
  const megaTitleEl = document.getElementById('mega-sub-title');
  const megaGridEl  = document.getElementById('mega-sub-grid');
  const megaPanelEl = document.getElementById('mega-panel');
  const megaTrigEl  = document.getElementById('mega-trigger');

  if (megaCatsEl) {
    CATEGORIES.forEach((c, i) => {
      const d = document.createElement('div');
      d.className = 'mega-cat' + (i===0?' active':'');
      d.innerHTML = `<span style="font-size:1rem">${c.icon}</span> ${c.label}`;
      d.onmouseenter = () => showMegaSubs(c, d);
      d.onclick = () => { goCategory(c.id); closeMega(); };
      megaCatsEl.appendChild(d);
    });
    if (CATEGORIES[0]) showMegaSubs(CATEGORIES[0], megaCatsEl.children[0]);
  }

  function showMegaSubs(cat, el) {
    if (!megaCatsEl) return;
    megaCatsEl.querySelectorAll('.mega-cat').forEach(x => x.classList.remove('active'));
    el.classList.add('active');
    if (megaTitleEl) megaTitleEl.textContent = cat.label;
    if (megaGridEl) megaGridEl.innerHTML = cat.subs.map(s =>
      `<div class="mega-sub-item" onclick="goCategory('${cat.id}','${s==='All'?'':s}')">${cat.icon} ${s}</div>`
    ).join('');
  }

  function toggleMega() {
    if (!megaPanelEl || !megaTrigEl) return;
    const o = megaPanelEl.classList.toggle('open');
    megaTrigEl.classList.toggle('open', o);
  }
  function closeMega() {
    if (!megaPanelEl || !megaTrigEl) return;
    megaPanelEl.classList.remove('open');
    megaTrigEl.classList.remove('open');
  }
  if (megaTrigEl) megaTrigEl.onclick = toggleMega;
  document.addEventListener('click', e => {
    const mw = document.getElementById('mega-wrap');
    if (mw && !mw.contains(e.target)) closeMega();
  });

  // Search
  const sinput = document.getElementById('hdr-sinput');
  const sdrop  = document.getElementById('hdr-search-drop');
  if (sinput && sdrop) {
    sinput.addEventListener('input', function() {
      const q = this.value.trim().toLowerCase();
      if (!q) { sdrop.classList.remove('open'); sdrop.innerHTML=''; return; }
      const hits = ALL_PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q)
      ).slice(0, 7);
      sdrop.innerHTML = hits.length
        ? hits.map(p=>`<div class="sd-item" onclick="goProduct('${p.id}','${p.section}')"><span class="sd-icon">${p.icon}</span><div><div class="sd-name">${p.name}</div><div class="sd-meta">${p.cat} · ${p.weight}</div></div><span class="sd-price">Rs. ${p.price.toLocaleString()}</span></div>`).join('')
        : `<div class="sd-empty">No results for "<b>${q}</b>"</div>`;
      sdrop.classList.add('open');
    });
    document.addEventListener('click', e => {
      const sw = document.querySelector('.hdr-search');
      if (sw && !sw.contains(e.target)) sdrop.classList.remove('open');
    });
  }

  // Init drawer
  initCartDrawer();
  initCheckoutModal();
}
