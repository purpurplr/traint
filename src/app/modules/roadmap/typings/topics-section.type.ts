import { TypedBy } from '@typings/utility-types/typed-by.type';
import { RoadmapItemType } from './roadmap-item-type.enum';

import { Milestone } from './milestone.type';
import { LearningResource } from './learning-resource.type';
import { Topic } from './topic.type';

export interface RoadmapSection extends TypedBy<RoadmapItemType> {
  type: RoadmapItemType.Section;

  id: string;
  title: string;
  imageHref: string;
  learningResources?: LearningResource[];
  items: (Topic | Milestone)[];
  optional?: boolean;
}
