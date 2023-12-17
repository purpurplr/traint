import { Roadmap, RoadmapItem } from '@modules/roadmap/typings/roadmap.type';
import {
  DenormalizedHardTopicVisibility,
  DenormalizedTopicProgress,
  TopicProgress,
} from '@modules/roadmap/typings/topic-progress.type';
import { RoadmapItemType } from '@modules/roadmap/typings/roadmap-item-type.enum';
import { RoadmapSectionItem } from '@modules/roadmap/typings/roadmap-section-item.type';
import { HardTopicsVisibility } from '@modules/roadmap/typings/hard-topics-visibility.type';

export interface ProgressAdapter {
  denormalizedProgress: DenormalizedTopicProgress;
  getProgressFor: (sectionId: string, topicId: string) => TopicProgress | undefined;
  actualizeRoadmap: (roadmap: Roadmap, hardTopicsVisibility: HardTopicsVisibility[]) => Roadmap;
}

function denormalizeProgress(progress: TopicProgress[]): DenormalizedTopicProgress {
  return progress.reduce((acc: DenormalizedTopicProgress, topic: TopicProgress) => {
    const section = acc[topic.sectionId] ?? {};
    acc[topic.sectionId] = { ...section, [topic.id]: topic };
    return acc;
  }, {});
}

function denormalizeHardTopicsVisibility(
  hardTopicsVisibility: HardTopicsVisibility[],
): DenormalizedHardTopicVisibility {
  return hardTopicsVisibility.reduce((acc: DenormalizedHardTopicVisibility, visibility: HardTopicsVisibility) => {
    acc[visibility.sectionId] = { expanded: visibility.expanded };
    return acc;
  }, {});
}

export function progressAdapter(
  progress: TopicProgress[],
  hardTopicsVisibility: HardTopicsVisibility[],
): ProgressAdapter {
  const denormalizedProgress = denormalizeProgress(progress);
  const denormalizedHardTopicsVisibility = denormalizeHardTopicsVisibility(hardTopicsVisibility);

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
    const expanded = denormalizedHardTopicsVisibility[section.id]?.expanded;
    const items = section.items.map((item) => actualizeRoadmapTopic(section.id, item));
    return { ...section, expanded, items };
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
