// const Section = {
//   getRepresentation: (content: HTMLElement) => `
//     <section class='section'>${content}</section>
//   `,
// };
export const SectionComponent = {
  getRepresentation: (headerText: string, content: HTMLElement | DocumentFragment): HTMLElement => {
    const sectionElement = document.createElement('section');
    const headerElement = document.createElement('h3');

    headerElement.classList.add('header');
    headerElement.innerText = headerText;

    sectionElement.appendChild(headerElement);
    sectionElement.appendChild(content);

    return sectionElement;
  },
};
