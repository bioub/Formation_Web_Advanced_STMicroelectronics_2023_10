// exporter selectedProduct
// importer filters
// exporter products

import { filters } from "./search.js";

export let selectedProduct = null;
const selectedProductLocalStorage = localStorage.getItem('selectedProduct');

if (selectedProductLocalStorage) {
  selectedProduct = JSON.parse(selectedProductLocalStorage);
}

let productsList = [];

/** @param {HTMLElement} mainEl */
export default function products(mainEl) {
  const template = `
<table id="products">
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Additionnal Features</th>
    <th>Actions</th>
  </tr>
</table>
  `;

  mainEl.innerHTML = template;

  const tableEl = mainEl.querySelector('table');

  fetchProducts().then((data) => {
    productsList = data.rows.map((r) => r.doc);

    for (const product of applyFilters(productsList)) {
      const trEl = createProductRow(product);
      tableEl.appendChild(trEl);
    }
  });

  tableEl.addEventListener('click', (event) => {
    /** @type {HTMLElement} */
    const target = event.target;

    if (target.className === 'show-link') {
      selectedProduct = productsList.find(
        (p) => p._id === target.dataset.productId,
      );
      localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
    }
  });
}

function fetchProducts() {
  return fetch(
    'https://6a59157b-430d-4969-b802-b9c12470dafb-bluemix.cloudantnosqldb.appdomain.cloud/phones/_all_docs?include_docs=true',
  ).then((res) => res.json());
}

function createProductRow(product) {
  const trEl = document.createElement('tr');

  const tdIdEl = document.createElement('td');
  tdIdEl.innerText = product._id;
  trEl.appendChild(tdIdEl);

  const tdNameEl = document.createElement('td');
  tdNameEl.innerText = product.name;
  trEl.appendChild(tdNameEl);

  const tdAdditionalFeaturesEl = document.createElement('td');
  tdAdditionalFeaturesEl.innerText = product.additionalFeatures;
  trEl.appendChild(tdAdditionalFeaturesEl);

  const tdActions = document.createElement('td');
  const linkShowEl = document.createElement('a');
  linkShowEl.innerText = 'Show';
  linkShowEl.href = '#/product-details';
  linkShowEl.className = 'show-link';
  linkShowEl.dataset.productId = product._id;
  tdActions.appendChild(linkShowEl);
  trEl.appendChild(tdActions);

  return trEl;
}

function applyFilters(products) {
  let results = products;

  if (filters.name) {
    results = results.filter((p) =>
      p.name.toLowerCase().includes(filters.name.toLowerCase()),
    );
  }

  if (filters.fmRadio !== 'whatever') {
    results = results.filter(
      (p) =>
        (p.hardware.fmRadio && filters.fmRadio === 'yes') ||
        (!p.hardware.fmRadio && filters.fmRadio === 'no'),
    );
  }

  if (filters.availability.length) {
    results = results.filter((p) =>
      p.availability.some((el) => filters.availability.includes(el)),
    );
  }

  return results;
}
