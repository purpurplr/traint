import { useEffect, useState } from 'react';

import { useLocalStorage } from '@hooks/local-storage.hook';
import { Roadmap } from '@modules/roadmap/typings/roadmap.type';
import { TopicProgress } from '@modules/roadmap/typings/topic-progress.type';
import { LocalStorageKeys } from '@interfaces//local-storage-keys.enum';

import { HardTopicsVisibility } from '@modules/roadmap/typings/hard-topics-visibility.type';
import { progressAdapter } from '../services/progress.adapter';

export interface RoadmapState {
  roadmap: Roadmap;
  setRoadmap: (roadmap?: Roadmap) => void;
  setTopicStatus: (sectionId: string, topicId: string, done: boolean) => void;
  setHardTopicVisibility: (sectionId: string, topicId: string, expanded: boolean) => void;
}

export function useRoadmapState(): RoadmapState {
  const [roadmap, updateRoadmap] = useState<Roadmap>([]);
  const [progress, updateProgress] = useLocalStorage<TopicProgress[]>(LocalStorageKeys.RoadmapProgress, []);
  const [hardTopicsVisibility, updateVisibility] = useLocalStorage<HardTopicsVisibility[]>(
    LocalStorageKeys.HardTopicsVisibility,
    [],
  );

  const setRoadmap = (newState?: Roadmap): void => {
    updateRoadmap((prevState: Roadmap) => {
      return progressAdapter(progress, hardTopicsVisibility).actualizeRoadmap(
        newState ?? prevState,
        hardTopicsVisibility,
      );
    });
  };

  const setTopicStatus = (sectionId: string, topicId: string, done: boolean): void => {
    updateProgress((prevState: TopicProgress[]) => {
      return prevState
        .filter((topic) => topic.sectionId !== sectionId || topic.id !== topicId)
        .concat({ sectionId, id: topicId, done, updatedAt: new Date() });
    });
  };

  const setHardTopicVisibility = (sectionId: string, topicId: string, expanded: boolean): void => {
    updateVisibility((prevState) => {
      return prevState
        .filter((topic) => topic.sectionId !== sectionId)
        .concat({ sectionId, expanded, updatedAt: new Date() });
    });
  };

  useEffect(() => {
    setRoadmap();
  }, [progress, hardTopicsVisibility]);

  return {
    roadmap,
    setRoadmap,
    setTopicStatus,
    setHardTopicVisibility,
  };
}
