import { useEffect, useState } from 'preact/hooks';

import { useLocalStorage } from '@hooks/use-local-storage.hook';
import { Roadmap } from '@roadmap/typings/roadmap.type';
import { TopicProgress } from '@roadmap/typings/topic-progress.type';
import { LocalStorageKeys } from '@typings/local-storage-keys.enum';

import { progressAdapter } from '../services/progress.adapter';

export interface RoadmapState {
  roadmap: Roadmap;
  setRoadmap: (roadmap?: Roadmap) => void;
  setTopicStatus: (sectionId: string, topicId: string, done: boolean) => void;
}

export function useRoadmapState(): RoadmapState {
  const [roadmap, updateRoadmap] = useState<Roadmap>([]);
  const [progress, updateProgress] = useLocalStorage<TopicProgress[]>(LocalStorageKeys.RoadmapProgress, []);

  const setRoadmap = (newState?: Roadmap): void => {
    updateRoadmap((prevState: Roadmap) => {
      return progressAdapter(progress).actualizeRoadmap(newState ?? prevState);
    });
  };

  const setTopicStatus = (sectionId: string, topicId: string, done: boolean): void => {
    updateProgress((prevState) => {
      return prevState
        .filter((topic) => topic.sectionId !== sectionId || topic.id !== topicId)
        .concat({ sectionId, id: topicId, done, updatedAt: new Date() });
    });
  };

  useEffect(() => {
    setRoadmap();
  }, [progress]);

  return {
    roadmap,
    setRoadmap,
    setTopicStatus,
  };
}
