import { TypedBy } from '@interfaces/utility-types/typed-by.type';
import { RoadmapItemType } from './roadmap-item-type.enum';

export interface LearningResource extends TypedBy<RoadmapItemType> {
  type: RoadmapItemType.LearningResource;

  url: string;
  displayText: string;
}
