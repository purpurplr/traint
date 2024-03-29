import { useEffect, useState } from 'react';

import { SpinnerComponent } from '@shared-components/spinner/spinner.component';
import { curry } from '@utils/curry.util';

import { RoadmapCard } from './components/roadmap-card/roadmap-card.component';
import { RoadmapMilestone } from './components/roadmap-milestone/roadmap-milestone.component';
import { roadmapApiService } from './services/roadmap-api.service';
import { RoadmapSection } from './typings/topics-section.type';
import { RoadmapItemType } from './typings/roadmap-item-type.enum';
import { Milestone } from './typings/milestone.type';
import { useRoadmapState } from './hooks/roadmap-state.hook';

import './roadmap.component.scss';

export function RoadmapComponent(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const { roadmap, setRoadmap, setTopicStatus, setHardTopicVisibility } = useRoadmapState();

  const checkTopic = curry(setTopicStatus);
  const expandHardTopics = curry(setHardTopicVisibility);

  useEffect(() => {
    setLoading(true);
    roadmapApiService.fetchRoadmap().then((data: RoadmapSection[]) => {
      setRoadmap(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <SpinnerComponent />;

  const roadmapItems = roadmap.map((section: RoadmapSection | Milestone) => {
    if (section.type === RoadmapItemType.Milestone) {
      return (
        <div className="roadmap__milestone" key={section.id}>
          <RoadmapMilestone achievement={section} />
        </div>
      );
    }

    return (
      <div className="roadmap__card" key={section.id}>
        <RoadmapCard section={section} checkTopic={checkTopic(section.id)} expandHardTopics={expandHardTopics(section.id)} />
      </div>
    );
  });

  return <main className="container roadmap">{roadmapItems}</main>;
}
