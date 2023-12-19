import { TypedBy } from '@interfaces/utility-types/typed-by.type';
import { Level } from '@interfaces/new-interfaces';
import { RoadmapItemType } from './roadmap-item-type.enum';

export interface Topic extends TypedBy<RoadmapItemType> {
  type: RoadmapItemType.Topic;

  id: string;
  displayText: string;
  level: Level;
  optional?: boolean;
  done?: boolean;
}
