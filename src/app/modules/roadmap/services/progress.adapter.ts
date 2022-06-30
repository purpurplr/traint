import { Roadmap, RoadmapItem } from '@roadmap/typings/roadmap.type';
import { DenormalizedTopicProgress, TopicProgress } from '@roadmap/typings/topic-progress.type';
import { RoadmapItemType } from '@roadmap/typings/roadmap-item-type.enum';
import { RoadmapSectionItem } from '@roadmap/typings/roadmap-section-item.type';

export interface ProgressAdapter {
  denormalizedProgress: DenormalizedTopicProgress;
  getProgressFor: (sectionId: string, topicId: string) => TopicProgress | undefined;
  actualizeRoadmap: (roadmap: Roadmap) => Roadmap;
}

function denormalizeProgress(progress: TopicProgress[]): DenormalizedTopicProgress {
  return progress.reduce((acc: DenormalizedTopicProgress, topic: TopicProgress) => {
    const section = acc[topic.sectionId] ?? {};
    acc[topic.sectionId] = { ...section, [topic.id]: topic };
    return acc;
  }, {});
}

export function progressAdapter(progress: TopicProgress[]): ProgressAdapter {
  const denormalizedProgress = denormalizeProgress(progress);

  function getProgressFor(sectionId: string, topicId: string): TopicProgress | undefined {
    return denormalizedProgress[sectionId]?.[topicId];
  }

  const actualizeRoadmapTopic = (sectionId: string, topic: RoadmapSectionItem): RoadmapSectionItem => {
    if (topic.type !== RoadmapItemType.Topic) return topic;
    const topicProgress = getProgressFor(sectionId, topic.id);
    return { ...topic, done: !!topicProgress?.done };
  };

  const actualizeRoadmapSection = (section: RoadmapItem): RoadmapItem => {
    if (section.type !== RoadmapItemType.Section) return section;
    const items = section.items.map((item) => actualizeRoadmapTopic(section.id, item));
    return { ...section, items };
  };

  const actualizeRoadmap = (roadmap: Roadmap): Roadmap => {
    return roadmap.map((item) => actualizeRoadmapSection(item));
  };

  return {
    denormalizedProgress,
    getProgressFor,
    actualizeRoadmap,
  };
}
