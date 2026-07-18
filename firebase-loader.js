/* =====================================================
   TAJ RICE — FIREBASE PRODUCT LOADER
   Replaces static PRODUCTS in data.js with live Firestore data
   ===================================================== */

// Firebase config
const FB_CONFIG = {
  apiKey: "AIzaSyBmU634qA1XMPUJfZuHAZa8EpgcrQ_tDYU",
  authDomain: "taj-rice.firebaseapp.com",
  projectId: "taj-rice",
  storageBucket: "taj-rice.firebasestorage.app",
  messagingSenderId: "603231287383",
  appId: "1:603231287383:web:541beab2cde0676d584b12"
};

/* Category icons & labels (used site-wide) */
const CAT_ICONS = {
  rice:'🌾', commodities:'🌽', 'oil-ghee':'🫙', masala:'🌶️',
  'tea-coffee':'☕', dairy:'🥛', soaps:'🧴', detergent:'🧺', health:'💄'
};

/* ── Firebase loader (ESM via CDN) ── */
let _db = null;
async function getDB() {
  if (_db) return _db;
  const { initializeApp, getApps } = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js");
  const { getFirestore }            = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js");
  const existing = getApps().find(a => a.name === 'taj-rice-site');
  const app = existing || initializeApp(FB_CONFIG, 'taj-rice-site');
  _db = getFirestore(app);
  return _db;
}

/* ── Load all products from Firestore ── */
async function loadAllProducts() {
  try {
    const { collection, getDocs, query, orderBy } =
      await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js");
    const db   = await getDB();
    const snap = await getDocs(query(collection(db, 'products'), orderBy('name')));
    const prods = {};
    const all   = [];

    snap.forEach(d => {
      const p = { id: d.id, ...d.data() };
      // Normalize fields
      p.price = p.sp || p.price || 0;
      p.icon  = CAT_ICONS[p.category] || '📦';
      p.section = p.category;
      if (!prods[p.category]) prods[p.category] = [];
      prods[p.category].push(p);
      all.push(p);
    });

    return { prods, all };
  } catch (e) {
    console.warn('Firebase load failed, using static data:', e.message);
    return null;
  }
}

/* ── Product card HTML builder (Firebase version) ── */
function makeFBCard(p, sec, delay = 0) {
  const badge = p.badge
    ? `<div class="pcard-badge ${['Best Seller','Premium','Value Pack','Top Pick'].includes(p.badge)?'gold':''}">${p.badge}</div>`
    : '';
  const img = p.imageUrl
    ? `<img src="${p.imageUrl}" style="width:100%;height:100%;object-fit:contain;" alt="${p.name}"/>`
    : (p.icon || CAT_ICONS[sec] || '📦');
  const pj = JSON.stringify({
    id: p.id, name: p.name, icon: p.icon,
    weight: p.weight||'', price: p.price, section: sec
  }).replace(/"/g, "'");

  return `<div class="pcard" style="animation-delay:${delay*.04}s" onclick="goProduct('${p.id}','${sec}')">
    ${badge}
    <div class="pcard-img" style="position:relative;overflow:hidden">${img}</div>
    <div class="pcard-body">
      <div class="pcard-cat">${p.subCategory || p.category || ''}</div>
      <div class="pcard-name">${p.name}</div>
      <div class="pcard-wt">${p.weight || ''}</div>
      <div class="pcard-foot">
        <div class="pcard-price">Rs. ${Number(p.price).toLocaleString()}</div>
        <button class="pcard-add" onclick="event.stopPropagation();Cart.add(${pj});CartDrawer.open()">+ Add</button>
      </div>
    </div>
  </div>`;
}

/* ── Initialize: try Firebase, fall back to static ── */
window.TajRiceDB = {
  products: {},   // by category
  all: [],
  loaded: false,

  async init() {
    const result = await loadAllProducts();
    if (result && result.all.length > 0) {
      this.products = result.prods;
      this.all      = result.all;
      this.loaded   = true;
      console.log(`✅ Loaded ${result.all.length} products from Firebase`);
    } else {
      // Fall back to static PRODUCTS from data.js
      this.products = typeof PRODUCTS !== 'undefined' ? PRODUCTS : {};
      this.all      = typeof ALL_PRODUCTS !== 'undefined' ? ALL_PRODUCTS : [];
      this.loaded   = true;
      console.log('📦 Using static product data');
    }
    return this;
  },

  getByCategory(cat) {
    return (this.products[cat] || []).map(p => ({...p, section: cat}));
  },

  search(q) {
    return this.all.filter(p =>
      p.name.toLowerCase().includes(q.toLowerCase()) ||
      (p.subCategory||'').toLowerCase().includes(q.toLowerCase()) ||
      (p.category||'').toLowerCase().includes(q.toLowerCase())
    );
  },

  getHotSelling() {
    const hot = [];
    Object.keys(this.products).forEach(cat => {
      const badged = (this.products[cat]||[]).filter(p => p.badge);
      if (badged.length) hot.push({...badged[0], section: cat});
    });
    return hot.slice(0, 8);
  }
};

/* ── Override goProduct for Firebase products ── */
function goProduct(id, sec) {
  window.location.href = `product.html?id=${encodeURIComponent(id)}&sec=${sec}`;
}
