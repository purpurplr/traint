export interface TopicProgress {
  id?: string;
  sectionId: string;
  done?: boolean;
  updatedAt: Date;
  expanded?: boolean;
}

export type DenormalizedTopicProgress = Partial<{
  [sectionId: string]: {
    [topicId: string]: TopicProgress;
  };
}>;

export type DenormalizedHardTopicVisibility = Partial<{
  [sectionId: string]: { expanded: boolean };
}>;
