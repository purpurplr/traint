import { TypedBy } from '@interfaces/utility-types/typed-by.type';
import { RoadmapItemType } from './roadmap-item-type.enum';

export interface Milestone extends TypedBy<RoadmapItemType> {
  type: RoadmapItemType.Milestone;

  id: string;
  displayText: string;
}
