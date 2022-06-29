import { Milestone } from './milestone.type';
import { RoadmapSection } from './topics-section.type';

export type RoadmapItem = RoadmapSection | Milestone;
export type Roadmap = RoadmapItem[];
