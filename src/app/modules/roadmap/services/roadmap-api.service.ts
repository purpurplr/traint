import { env } from 'environment';

import { RoadmapSection } from '../typings/topics-section.type';

function fetchRoadmap(): Promise<RoadmapSection[]> {
  return fetch(env.api.roadmap).then<RoadmapSection[]>((response: Response) => response.json());
}

export const roadmapApiService = {
  fetchRoadmap,
};
