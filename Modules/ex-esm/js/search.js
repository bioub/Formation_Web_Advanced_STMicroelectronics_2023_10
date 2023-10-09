// export filters et search

const filters = {
  name: '',
  fmRadio: 'whatever',
  availability: [],
};

/** @param {HTMLElement} mainEl */
function search(mainEl) {
  const template = `
<div id="filters">
  <div class="form-row">
    <h3>Name</h3>
    <input type="text" name="name" />
  </div>
  <div class="form-row">
    <h3>FM Radio</h3>
    <label>
      <input type="radio" name="fmRadio" value="yes" />
      Yes
    </label>
    <label>
      <input type="radio" name="fmRadio" value="no" />
      No
    </label>
    <label>
      <input type="radio" name="fmRadio" value="whatever" checked />
      Whatever
    </label>
  </div>
  <div class="form-row">
    <h3>Availability</h3>
    <label>
      <input type="checkbox" name="availability" value="T-Mobile" />
      T-Mobile
    </label>
    <label>
      <input type="checkbox" name="availability" value="Verizon" />
      Verizon
    </label>
  </div>
  <a href="#/products" class="btn-link">Search</a>
</div>
`;

  mainEl.innerHTML = template;

  const nameEl = mainEl.querySelector('input[name="name"]');
  nameEl.value = filters.name;

  nameEl.addEventListener('input', () => {
    filters.name = nameEl.value;
  });

  const fmRadioEls = mainEl.querySelectorAll('input[name="fmRadio"]');
  Array.from(fmRadioEls).find((el) => el.value === filters.fmRadio).checked = true;

  for (const fmRadioEl of fmRadioEls) {
    fmRadioEl.addEventListener('input', () => {
      filters.fmRadio = Array.from(fmRadioEls).find((el) => el.checked).value;
    });
  }

  const availabilityEls = mainEl.querySelectorAll('input[name="availability"]');

  for (const availabilityEl of availabilityEls) {
    availabilityEl.addEventListener('input', () => {
      // on récupère les valeurs des checkboxes cochées (programmation fonctionnelle)
      filters.availability = Array.from(availabilityEls) // converti le NodeList en Array
        .filter((el) => el.checked) // ne garde que les checkboxes cochées
        .map((el) => el.value); // transforme la checkbox en sa propriété value
    });

    // coche la checkbox si filters.availability contient sa valeur
    availabilityEl.checked = filters.availability.includes(availabilityEl.value);
  }
}
