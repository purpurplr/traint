import { TypedBy } from '@typings/utility-types/typed-by.type';
import { RoadmapItemType } from './roadmap-item-type.enum';

export interface Topic extends TypedBy<RoadmapItemType> {
  type: RoadmapItemType.Topic;

  id: string;
  displayText: string;
  optional?: boolean;
  done?: boolean;
}
