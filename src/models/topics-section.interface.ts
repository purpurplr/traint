import { Topic } from './topic.interface';
import { LearningResource } from './learning-resource';

export interface TopicsSection {
  id: string;
  displayText: string;
  topics: Topic[];
  noteId?: string;
  optional?: boolean;
  className?: string;
  learningResources?: LearningResource[];
}
