export const SectionComponent = {
  getRepresentation: (headerText: string, ...content: (HTMLElement | DocumentFragment | undefined)[]): HTMLElement => {
    const sectionElement = document.createElement('section');
    const headerElement = document.createElement('h3');

    headerElement.classList.add('header');
    headerElement.innerText = headerText;

    sectionElement.appendChild(headerElement);

    content.filter(Boolean).forEach((item) => sectionElement.appendChild(item!));

    return sectionElement;
  },
};
