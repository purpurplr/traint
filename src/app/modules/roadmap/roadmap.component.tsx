import { JSX } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import * as React from 'preact/compat';

import { SpinnerComponent } from '@shared-components/spinner/spinner.component';
import { curry } from '@utils/curry.util';

import { RoadmapCard } from './components/roadmap-card/roadmap-card.component';
import { RoadmapMilestone } from './components/roadmap-milestone/roadmap-milestone.component';
import { roadmapApiService } from './services/roadmap-api.service';
import { RoadmapSection } from './typings/topics-section.type';
import { RoadmapItemType } from './typings/roadmap-item-type.enum';
import { Milestone } from './typings/milestone.type';
import { useRoadmapState } from './hooks/use-roadmap.hook';

import './roadmap.component.scss';

export function RoadmapComponent(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const { roadmap, setRoadmap, setTopicStatus } = useRoadmapState();

  const checkTopic = curry(setTopicStatus);

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
        <RoadmapCard section={section} checkTopic={checkTopic(section.id)} />
      </div>
    );
  });

  return <main className="container roadmap">{roadmapItems}</main>;
}
