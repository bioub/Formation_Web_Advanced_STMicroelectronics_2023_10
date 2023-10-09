// importer les 6 fonctions (home, about...)

import about from "./about.js";
import home from "./home.js";
import notFound from "./not-found.js";
import productDetails from "./product-details.js";
import products from "./products.js";
import search from "./search.js";

const routes = [
  {
    hash: '#/',
    render: home,
  },
  {
    hash: '#/about',
    render: about,
  },
  {
    hash: '#/search',
    render: search,
  },
  {
    hash: '#/products',
    render: products,
  },
  {
    hash: '#/product-details',
    render: productDetails,
  },
];

function matchRoute() {
  const mainEl = document.querySelector('body > main');

  const match = routes.find((route) => route.hash === location.hash);

  if (!match) {
    return notFound(mainEl);
  }

  match.render(mainEl);

  const links = document.querySelectorAll('header a');

  for (const link of links) {
    link.classList.remove('active');

    if (link.href.endsWith(location.hash)) {
      link.classList.add('active');
    }
  }
}

matchRoute();
window.addEventListener('hashchange', matchRoute);
