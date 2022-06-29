export interface TopicProgress {
  id: string;
  sectionId: string;
  done: boolean;
  updatedAt: Date;
}

export type DenormalizedTopicProgress = Partial<{
  [sectionId: string]: {
    [topicId: string]: TopicProgress;
  };
}>;
