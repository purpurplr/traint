import { Fragment, JSX } from 'preact';
import { useState } from 'preact/hooks';

import { CheckboxComponent } from '@shared-components/checkbox/checkbox.component';
import { CardComponent } from '@shared-components/card/card.component';

import './topics-card.component.scss';
import { RoadmapAchievement } from '../roadmap-achievement/roadmap-achievement.component';
import { RoadmapItemType } from '../typings/roadmap-item-type.enum';
import { RoadmapSection } from '../typings/topics-section.type';
import { LearningResource } from '../typings/learning-resource.type';
import { Topic } from '../typings/topic.type';

export interface TopicsCardProps {
  section: RoadmapSection;
  checkTopic: (topicId: string, done: boolean) => void;
}

export const TopicsCard = ({ section, checkTopic }: TopicsCardProps): JSX.Element => {
  const [iconLoading, setIconLoading] = useState(true);

  const cardHeader = (
    <div className="topic-card-header">
      {section.imageHref && (
        <img
          className={`topic-card-header__icon ${iconLoading ? 'faded-out' : ''}`}
          loading="lazy"
          src={section.imageHref}
          alt="icon"
          onLoad={() => setIconLoading(false)}
        />
      )}
      <h3 className="app-header-content topic-card-header__text">{section.title}</h3>
    </div>
  );

  const links: JSX.Element[] | undefined = section.learningResources?.map(
    (resource: LearningResource, index: number) => (
      <a className="app-link roadmap__link" href={resource.url} key={index} target="_blank" rel="noreferrer">
        {resource.displayText}
      </a>
    ),
  );

  const topics: JSX.Element[] = section.items.map((item) => {
    if (item.type === RoadmapItemType.Milestone) {
      return <RoadmapAchievement achievement={item} />;
    }

    const topic: Topic = item;
    return (
      <CheckboxComponent key={topic.id} checked={topic.done} onChange={(done: boolean) => checkTopic(topic.id, done)}>
        {topic.displayText}
      </CheckboxComponent>
    );
  });

  const cardBody: JSX.Element = (
    <Fragment>
      {links && <div className="topics-card__links">{links}</div>}
      <div>{topics}</div>
    </Fragment>
  );

  return (
    <div className="roadmap__card">
      <CardComponent header={cardHeader} body={cardBody} />
    </div>
  );
};
