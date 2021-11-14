// import * as template from './index.hbs';

// If your code is inside of an HTML Import you'll need to change the above line to:
// let tmpl = document.currentScript.ownerDocument.querySelector('#x-foo-from-template');
// const checkboxTemplate = document.querySelector('#checkbox-template');
// console.log(checkboxTemplate);
//
// customElements.define(
//   'jm-checkbox',
//   class extends HTMLElement {
//     constructor() {
//       super();
//       let shadowRoot = this.attachShadow({ mode: 'open' });
//       shadowRoot.appendChild(checkboxTemplate.content.cloneNode(true));
//     }
//   },
// );
import { CheckboxComponent } from './shared/components/checkbox/checkbox.component.js';

const data = {
  articles: [
    {
      title: 'Интернет и браузер',
      items: [
        { id: 'http', displayText: 'HTTP' },
        { id: 'dns', displayText: 'DNS' },
      ],
    },
  ],
};

const anchor = document.querySelector('#anchor');

class Header {
  constructor(text, size) {
    this.text = text;
    this.size = size;
  }

  render(anchor) {
    const element = document.createElement(`h${this.size}`);
    element.innerText = this.text;
    anchor.append(element);
  }
}

class Checkbox {
  constructor(id, text) {
    this.id = id;
    this.text = text;
  }

  render(anchor) {
    const element = document.createElement('jm-checkbox');
    element.innerText = this.text;
    element.id = this.id;
    anchor.append(element);
  }
}

class Section {
  constructor(data) {
    this.title = data.title;
    this.items = data.items;
  }

  render(anchor) {
    const header = new Header(this.title, 3);
    const items = this.items.map((item) => new Checkbox(item.id, item.displayText));

    const element = document.createElement('section');
    header.render(element);
    items.forEach((item) => item.render(element));

    anchor.append(element);
  }
}

const sections = data.articles.map((article) => new Section(article));
sections.forEach((section) => section.render(anchor));
