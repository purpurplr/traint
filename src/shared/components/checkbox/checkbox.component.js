let checkboxTemplate = document.createElement('template');
checkboxTemplate.innerHTML = `
<link rel="stylesheet" href="./shared/components/checkbox/checkbox.component.css" />
<input id='one' type='checkbox' />
<label for='one'>
  <span></span>
  <slot></slot>
</label>`;

export class CheckboxComponent extends HTMLElement {
  constructor() {
    super();
    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(checkboxTemplate.content.cloneNode(true));
  }
}

customElements.define('jm-checkbox', CheckboxComponent);
