import { Fragment, JSX } from 'preact';

import { Checkbox } from '@shared-components/checkbox/checkbox.component';
import { CardComponent } from '@shared-components/card/card.component';
import { LazyImage } from '@shared-components/lazy-image/lazy-image.component';

import { RoadmapMilestone } from '../roadmap-milestone/roadmap-milestone.component';
import { RoadmapItemType } from '../../typings/roadmap-item-type.enum';
import { RoadmapSection } from '../../typings/topics-section.type';
import { LearningResource } from '../../typings/learning-resource.type';
import { Topic } from '../../typings/topic.type';

import './roadmap-card.component.scss';

export interface RoadmapCardProps {
  section: RoadmapSection;
  checkTopic: (topicId: string, done: boolean) => void;
}

export function RoadmapCard({ section, checkTopic }: RoadmapCardProps): JSX.Element {
  const cardHeader = (
    <div className="roadmap-card__header">
      <LazyImage className="roadmap-card__header-icon" src={section.imageHref} alt={section.title} />
      <h3 className="header roadmap-card__header-text">{section.title}</h3>
    </div>
  );

  const links: JSX.Element[] | undefined = section.learningResources?.map(
    (resource: LearningResource, index: number) => (
      <a className="link roadmap-card__link" href={resource.url} key={index} target="_blank">
        {resource.displayText}
      </a>
    ),
  );

  const topics: JSX.Element[] = section.items.map((item) => {
    if (item.type === RoadmapItemType.Milestone) {
      return <RoadmapMilestone achievement={item} />;
    }

    const topic: Topic = item;
    return (
      <Checkbox
        key={topic.id}
        label={topic.displayText}
        checked={topic.done}
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          checkTopic(topic.id, target.checked);
        }}
      />
    );
  });

  const cardBody: JSX.Element = (
    <Fragment>
      {links && <div className="topics-card__links">{links}</div>}
      {<div>{topics}</div>}
    </Fragment>
  );

  return <CardComponent header={cardHeader} body={cardBody} />;
}
