/* Mesirée by P — shop logic: product list, product page and cart.
   Product data lives in products.js. The cart is kept in the visitor's browser. */

const CART_KEY = "mesiree-cart";

function loadCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch (e) { return []; }
}

function saveCart(cart) {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) { /* storage blocked */ }
  updateCartCount();
}

function findProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}

function formatPrice(amount) {
  if (amount === null || amount === undefined) return "Price coming soon";
  return "€" + amount.toFixed(2).replace(".", ",");
}

// Small helper to build elements safely (text is never parsed as HTML)
function el(tag, attrs, ...children) {
  const node = document.createElement(tag);
  Object.entries(attrs || {}).forEach(([key, value]) => {
    if (key === "onclick") node.addEventListener("click", value);
    else node.setAttribute(key, value);
  });
  children.flat().forEach((child) => {
    if (child === null || child === undefined) return;
    node.append(child instanceof Node ? child : document.createTextNode(child));
  });
  return node;
}

function productImage(product, className) {
  if (product.image) return el("img", { src: product.image, alt: product.name, class: className });
  return el("div", { class: "ph " + className }, "Product photo");
}

function updateCartCount() {
  const count = loadCart().reduce((sum, line) => sum + line.qty, 0);
  document.querySelectorAll(".cart-count").forEach((badge) => { badge.textContent = count; });
}

/* ---------- Home page: all products ---------- */
function renderProductGrid() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  PRODUCTS.forEach((p) => {
    grid.append(
      el("a", { class: "product-card", href: "product.html?id=" + p.id },
        productImage(p, "media"),
        el("span", { class: "eyebrow", style: "font-size:10px" }, p.category),
        el("span", { class: "name" }, p.name),
        el("span", { class: "kind" }, p.kind),
        el("span", { class: "price" }, formatPrice(p.price)),
        el("span", { class: "more" }, "View product")
      )
    );
  });
}

/* ---------- Product page ---------- */
function renderProduct() {
  const root = document.getElementById("product");
  if (!root) return;
  const id = new URLSearchParams(location.search).get("id");
  const p = findProduct(id) || PRODUCTS[0];
  document.title = p.name + " — Mesirée by P";

  let size = p.sizes[Math.min(1, p.sizes.length - 1)] || null;
  let qty = 1;

  document.getElementById("crumb-name").textContent = p.name;
  document.getElementById("p-category").textContent = p.category;
  document.getElementById("p-name").textContent = p.name;
  document.getElementById("p-tagline").textContent = p.tagline;
  document.getElementById("p-price").textContent = formatPrice(p.price);
  document.getElementById("p-desc").textContent = p.description;
  document.getElementById("p-ingredients").textContent = p.ingredients;
  document.getElementById("p-howto").textContent = p.howToUse;
  if (p.image) {
    const main = document.getElementById("p-image");
    main.replaceChildren(el("img", { src: p.image, alt: p.name }));
  }

  const tags = document.getElementById("p-tags");
  p.tags.forEach((t) => tags.append(el("span", {}, t)));

  const sizeBox = document.getElementById("p-sizes");
  if (p.sizes.length === 0) {
    document.getElementById("p-size-group").hidden = true;
  } else {
    const drawSizes = () => {
      sizeBox.replaceChildren(...p.sizes.map((s) =>
        el("button", {
          type: "button", class: "pill" + (s === size ? " on" : ""), "aria-pressed": String(s === size),
          onclick: () => { size = s; drawSizes(); }
        }, s)
      ));
    };
    drawSizes();
  }

  const qtyLabel = document.getElementById("p-qty");
  document.getElementById("p-dec").addEventListener("click", () => { qty = Math.max(1, qty - 1); qtyLabel.textContent = qty; });
  document.getElementById("p-inc").addEventListener("click", () => { qty += 1; qtyLabel.textContent = qty; });

  document.getElementById("p-add").addEventListener("click", () => {
    const cart = loadCart();
    const line = cart.find((l) => l.id === p.id && l.size === size);
    if (line) line.qty += qty; else cart.push({ id: p.id, size, qty });
    saveCart(cart);
    const msg = document.getElementById("p-added");
    msg.replaceChildren("Added to your cart. ", el("a", { href: "cart.html", class: "text-link" }, "View cart"));
  });

  const related = document.getElementById("related");
  PRODUCTS.filter((x) => x.id !== p.id).slice(0, 4).forEach((x) => {
    related.append(
      el("a", { class: "product-card", href: "product.html?id=" + x.id },
        productImage(x, "media"),
        el("span", { class: "name" }, x.name),
        el("span", { class: "kind" }, x.kind),
        el("span", { class: "price" }, formatPrice(x.price))
      )
    );
  });
}

/* ---------- Cart page ---------- */
function renderCart() {
  const list = document.getElementById("cart-items");
  if (!list) return;
  const cart = loadCart().filter((line) => findProduct(line.id));

  const change = (index, fn) => {
    const next = loadCart().filter((line) => findProduct(line.id));
    fn(next, index);
    saveCart(next);
    list.replaceChildren();
    renderCart();
  };

  if (cart.length === 0) {
    list.append(el("p", { class: "empty" }, "Your cart is empty."));
  }

  let subtotal = 0;
  let allPriced = true;
  cart.forEach((line, i) => {
    const p = findProduct(line.id);
    if (p.price === null) allPriced = false; else subtotal += p.price * line.qty;
    list.append(
      el("div", { class: "cart-row" },
        productImage(p, "media"),
        el("div", { class: "details" },
          el("a", { href: "product.html?id=" + p.id }, p.name),
          el("span", {}, line.size ? p.kind.split("·")[0].trim() + " · " + line.size : p.kind),
          el("button", { type: "button", class: "remove", onclick: () => change(i, (c, j) => c.splice(j, 1)) }, "Remove")
        ),
        el("div", { class: "stepper" },
          el("button", { type: "button", "aria-label": "Decrease quantity", onclick: () => change(i, (c, j) => { c[j].qty = Math.max(1, c[j].qty - 1); }) }, "−"),
          el("span", {}, String(line.qty)),
          el("button", { type: "button", "aria-label": "Increase quantity", onclick: () => change(i, (c, j) => { c[j].qty += 1; }) }, "+")
        ),
        el("span", { class: "line-total" }, p.price === null ? "—" : formatPrice(p.price * line.qty))
      )
    );
  });

  const total = cart.length && allPriced ? formatPrice(subtotal) : "—";
  document.getElementById("subtotal").textContent = total;
  document.getElementById("total").textContent = total;
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderProductGrid();
  renderProduct();
  renderCart();
});
