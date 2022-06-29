import { environment } from '@environment/environment';

import { RoadmapSection } from '../typings/topics-section.type';

function fetchRoadmap(): Promise<RoadmapSection[]> {
  return fetch(environment.api.roadmap).then<RoadmapSection[]>((response: Response) => response.json());
}

export const roadmapApiService = {
  fetchRoadmap,
};
