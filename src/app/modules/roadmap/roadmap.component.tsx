import { JSX } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import * as React from 'preact/compat';

import { SpinnerComponent } from '@shared-components/spinner/spinner.component';
import { TopicsCard } from '@roadmap/topics-card/topics-card.component';
import { curry } from '@utils/curry.util';

import { roadmapApiService } from './services/roadmap-api.service';
import { RoadmapAchievement } from './roadmap-achievement/roadmap-achievement.component';
import { RoadmapSection } from './typings/topics-section.type';
import { RoadmapItemType } from './typings/roadmap-item-type.enum';
import { Milestone } from './typings/milestone.type';
import { useRoadmapState } from './hooks/use-roadmap.hook';

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

  const cards = roadmap.map((section: RoadmapSection | Milestone) => {
    if (section.type === RoadmapItemType.Milestone) {
      return (
        <div className="roadmap__achievement">
          <RoadmapAchievement achievement={section} />
        </div>
      );
    }

    return <TopicsCard key={section.id} section={section} checkTopic={checkTopic(section.id)} />;
  });

  return <main className="container roadmap">{cards}</main>;
}
