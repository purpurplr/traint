import { Checkbox } from '@shared-components/checkbox/checkbox.component';
import { CardComponent } from '@shared-components/card/card.component';
import { LazyImage } from '@shared-components/lazy-image/lazy-image.component';
import PsychologyIcon from '@mui/icons-material/Psychology';

import Button from '@mui/material/Button';
import { Level } from '@interfaces/new-interfaces';
import { Tooltip } from '@mui/material';
import { RoadmapItemType } from '../../typings/roadmap-item-type.enum';
import { RoadmapSection } from '../../typings/topics-section.type';
import { LearningResource } from '../../typings/learning-resource.type';
import { Topic } from '../../typings/topic.type';

import './roadmap-card.component.scss';

interface RoadmapCardProps {
  section: RoadmapSection;
  checkTopic: (topicId: string, done: boolean) => void;
  expandHardTopics: (sectionId: string, expanded: boolean) => void;
}

export function RoadmapCard({ section, checkTopic, expandHardTopics }: RoadmapCardProps): JSX.Element {
  const levelsMap: Record<Level, string> = {
    [Level.Easy]: 'Легкий',
    [Level.Hard]: 'Сложный',
  };
  const toggleShowText = 'Показать сложные темы';
  const toggleHideText = 'Скрыть';
  const levelText = 'Уровень сложности темы';

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

  const checkbox: (topic: Topic) => JSX.Element = (topic: Topic) => (
    <div className="roadmap-card__item">
      <Checkbox
        key={topic.id}
        label={topic.displayText}
        checked={topic.done}
        onChange={({ target }) => checkTopic(topic.id, target.checked)}
      />

      <div className="roadmap-card__item-info">
        {
          <Tooltip placement={'top'} disableFocusListener title={`${levelText}: ${levelsMap[topic.level]}`}>
            <PsychologyIcon className={`topics-card__icon topics-card__icon-${topic.level}`} />
          </Tooltip>
        }
      </div>
    </div>
  )

  const topics: Topic[] = section.items.filter((item) => item.type === RoadmapItemType.Topic) as Topic[];

  const levelTopics: (level: Level) => JSX.Element[] = (level: Level) => topics.filter(item => item.level === level).map((item) => {
    return checkbox(item);
  });

  const easyTopics: JSX.Element[] = levelTopics(Level.Easy)
  const hardTopics: JSX.Element[] = levelTopics(Level.Hard)

  const hardTopicsToggle: () => JSX.Element = () => (
    <Button onClick={() => expandHardTopics(section.id, !section.expanded)}>{section.expanded ? toggleHideText : toggleShowText}</Button>
  )

  const cardBody: JSX.Element = (
    <>
      {links && <div className="topics-card__links">{links}</div>}
      {<div>{easyTopics}</div>}
      {hardTopics.length ? hardTopicsToggle() : null}
      {section.expanded ? <div>{hardTopics}</div> : null}
    </>
  );

  return <CardComponent header={cardHeader} body={cardBody} />;
}
