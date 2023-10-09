// exporter notFound

/** @param {HTMLElement} mainEl */
export default function notFound(mainEl) {
  const template = `
<p>Page not found</p>
  `;

  mainEl.innerHTML = template;
}
