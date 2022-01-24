import { localStorageService } from './local-storage.service';

require('./styles/styles.css');

import { defaultTopicsData } from './data/default-topics-data';
import { TopicsSection } from './models/topics-section.interface';
import { Topic } from './models/topic.interface';
import { LocalStorageKeys } from './models/local-storage-keys';
import { SectionComponent } from './components/section.component';
import { LearningResource } from './models/learning-resource';
import { LinkComponent } from './components/link/link.component';
import { ColumnComponent } from './components/column/column.component';
import { CheckboxWebComponent } from './web-components/checkbox/checkbox.web-component';
import { defineWebComponents } from './web-components/bootstrap/web-component.bootstrap';

defineWebComponents([CheckboxWebComponent]);

const localTopicSections = localStorageService.getItem(LocalStorageKeys.TopicSections) as TopicsSection[];
const topicsData: TopicsSection[] = localTopicSections ?? defaultTopicsData;
localStorageService.setItem(LocalStorageKeys.TopicSections, topicsData);

const rootTemplate: HTMLTemplateElement = document.querySelector('#container')!;
document.body.appendChild(rootTemplate.content.cloneNode(true));
const rootAnchor: HTMLElement = document.querySelector('#root-anchor')!;

class TopicsDataController {
  constructor(private model: TopicsSection[]) {
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

      const learningResourcesElements: HTMLElement | undefined = section.learningResources?.reduce(
        (fragment: HTMLElement, resource: LearningResource) => {
          const checkboxElement = LinkComponent.getRepresentation(resource.url, resource.displayText, { newTab: true });
          fragment.appendChild(checkboxElement);
          return fragment;
        },
        ColumnComponent.getRepresentation(),
      );

      const sectionElement: HTMLElement = SectionComponent.getRepresentation(
        section.displayText,
        learningResourcesElements,
        checkboxElements,
      );
      sectionElement.dataset.id = section.id;

      rootAnchor.appendChild(sectionElement);
    });
  }

  public initEventListeners(): void {
    rootAnchor.addEventListener('change', (event: Event) => {
      const topicElement: HTMLElement = event.target! as HTMLElement;
      const sectionElement: HTMLElement = topicElement.closest('section')!;

      this.updateModel(sectionElement.dataset.id!, topicElement.dataset.id!, (event as CustomEvent).detail.returnValue);
    });
  }

  private updateModel(sectionId: string, topicId: string, isTopicDone: boolean): void {
    const section = this.model.find(({ id }: TopicsSection) => id === sectionId);
    if (section) {
      const topic = section.topics.find(({ id }: Topic) => id === topicId)!;
      topic.done = isTopicDone;
      localStorageService.setItem(LocalStorageKeys.TopicSections, this.model);
    }
  }
}

const controller = new TopicsDataController(topicsData);
controller.render();
