export interface LinkComponentConfig {
  newTab?: boolean;
}

export const LinkComponent = {
  getRepresentation: (url: string, displayText: string, config?: LinkComponentConfig): HTMLElement => {
    const linkElement = document.createElement('a');
    linkElement.innerText = displayText;
    linkElement.href = url;
    if (config?.newTab) linkElement.target = '_blank';
    return linkElement;
  },
};
