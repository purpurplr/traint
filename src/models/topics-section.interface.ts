import { Topic } from './topic.interface';

export interface TopicsSection {
  id: string;
  displayText: string;
  topics: Topic[];
  optional?: boolean;
}
