import { localStorageService } from './local-storage.service';

require('./styles/styles.css');

import { defaultTopicsData } from './data/default-topics-data';
import { defineWebComponents } from './web-components/index';
import { TopicsSection } from './models/topics-section.interface';
import { Topic } from './models/topic.interface';
import { LocalStorageKeys } from './models/local-storage-keys';
import { SectionComponent } from './components/section.component';

defineWebComponents();

const localTopicSections = localStorageService.getItem(LocalStorageKeys.TopicSections) as TopicsSection[];
const topicsData: TopicsSection[] = localTopicSections ?? defaultTopicsData;
localStorageService.setItem(LocalStorageKeys.TopicSections, topicsData);

const rootAnchor: HTMLElement = document.querySelector('#root-anchor')!;

class TopicsDataController {
  constructor(private model: TopicsSection[]) {
    this.render();
    this.initEventListeners();
  }

  public render(): void {
    this.model.forEach((section: TopicsSection) => {
      const checkboxElements: DocumentFragment = section.topics.reduce((fragment: DocumentFragment, topic: Topic) => {
        const checkboxElement = document.createElement('jm-checkbox') as HTMLFormElement;
        checkboxElement.dataset.id = topic.id;
        checkboxElement.innerText = topic.displayText;
        checkboxElement.checked = !!topic.done;
        fragment.appendChild(checkboxElement);
        return fragment;
      }, document.createDocumentFragment());

      const sectionElement: HTMLElement = SectionComponent.getRepresentation(section.displayText, checkboxElements);
      sectionElement.dataset.id = section.id;

      rootAnchor.appendChild(sectionElement);
    });
  }

  public initEventListeners(): void {
    // @ts-ignore
    rootAnchor.addEventListener('change', (event: CustomEvent) => {
      const topicElement: HTMLElement = event.target! as HTMLElement;
      const sectionElement: HTMLElement = topicElement.closest('section')!;

      const section = this.model.find(({ id }: TopicsSection) => id === sectionElement.dataset.id);
      if (section) {
        const topic = section.topics.find((topic: Topic) => topic.id === topicElement.dataset.id)!;
        topic.done = event.detail.returnValue;
      }
      localStorageService.setItem(LocalStorageKeys.TopicSections, this.model);
      console.log(localStorageService.getItem(LocalStorageKeys.TopicSections), this.model);
    });
  }
}

const controller = new TopicsDataController(topicsData);
controller.render();
