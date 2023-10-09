// importer selectedProduct
// exporter productDetails

/** @param {HTMLElement} mainEl */
function productDetails(mainEl) {
  if (!selectedProduct && localStorage.getItem("selectedProduct")) {
    selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
  } else if (!selectedProduct) {
    location.hash = "/products";
    return;
  }

  const template = `
<div id="product-details">
  <div class="phone-image">
    <img class="phone" src="${selectedProduct.images[0]}" />
  </div>
  <h1>${selectedProduct.name}</h1>
  <p>${selectedProduct.description}</p>
  <ul class="phone-thumbs">
    ${selectedProduct.images
      .map((i) => `<li><img class="phone-thumb" src="${i}" /></li>`)
      .join("")}
  </ul>
</div>
  `;

  mainEl.innerHTML = template;

  const phoneThumbsEl = mainEl.querySelector(".phone-thumbs");
  const phoneEl = mainEl.querySelector(".phone");

  phoneThumbsEl.addEventListener("click", (event) => {
    /** @type {HTMLElement} */
    const target = event.target;

    if (target.className === "phone-thumb") {
      phoneEl.src = target.src;
    }
  });
}
