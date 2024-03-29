export type Language = 'eng' | 'ru';
export type ContentType = 'article' | 'video';
export enum Level {
  Easy = 'easy',
  Hard = 'hard',
}

type Priority = 'minor' | 'medium' | 'critical';
type TopicRating = 1 | 2 | 3 | 4 | 5;

enum RoadmapItemType {
  Section = 'section',
  Topic = 'topic',
  Group = 'group',
  Achievement = 'achievement',
}

interface RoadmapItemBase {
  id: string;

  type: RoadmapItemType;

  content: TextOrLinks;

  children?: RoadmapItemBase[];
}

type RoadmapItem = RoadmapAchievement | RoadmapSection | RoadmapGroup | RoadmapTopic;

type Roadmap = RoadmapItem[];

type TextOrLinks =
  | string
  | {
      displayText: string;
      link?: string;
    }[];

interface RoadmapItemMetadata {
  priority: Priority;

  contentType: ContentType;

  rating: TopicRating;

  lang: Language;
}

interface RoadmapAchievement extends RoadmapItemBase {
  type: RoadmapItemType.Achievement;
}

interface RoadmapSection extends RoadmapItemBase {
  type: RoadmapItemType.Section;

  iconHref: string;

  metadata: Pick<RoadmapItemMetadata, 'priority'>;

  children?: Exclude<RoadmapItem, RoadmapSection>[];
}

interface RoadmapGroup extends RoadmapItemBase {
  type: RoadmapItemType.Group;

  children?: RoadmapItem[];
}

interface RoadmapTopic extends RoadmapItemBase {
  type: RoadmapItemType.Topic;

  metadata: RoadmapItemMetadata;
}

type RoadmapProgress = {
  id: string;
  done?: boolean;
  toggled?: boolean;
}[];

const progressMock: RoadmapProgress = [
  { id: '2', done: true, toggled: true },
  { id: '5', done: true, toggled: true },
  { id: '9', done: true },
];

const topic = {
  id: '2',
  type: RoadmapItemType.Topic,
  content: [{ displayText: 'Topic 1', link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&themeRefresh=1' }],
  metadata: {
    priority: 'minor',
    contentType: 'article',
    rating: 1,
    lang: 'eng',
  },
};

const group: RoadmapGroup = {
  id: '3',
  type: RoadmapItemType.Group,
  content: 'Topic Group 1',
  children: [
    {
      id: '4',
      type: RoadmapItemType.Group,
      content: 'Topic Group 2',
      children: [
        {
          id: '5',
          type: RoadmapItemType.Topic,
          content: [{ displayText: 'Topic 2', link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&themeRefresh=1' }],
          metadata: {
            priority: 'minor',
            contentType: 'article',
            rating: 5,
            lang: 'eng',
          },
        },

        {
          id: '7',
          type: RoadmapItemType.Topic,
          content: [{ displayText: 'Topic 3', link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&themeRefresh=1' }],
          metadata: {
            priority: 'critical',
            contentType: 'video',
            rating: 3,
            lang: 'eng',
          },
        },
      ],
    },
  ],
};

const section = {
  id: '1',
  type: RoadmapItemType.Section,
  content: [{ displayText: 'Секция раз' }],
  iconHref: 'icon',
  metadata: { priority: 'minor' },
  children: [topic, group],
};

const mock: Roadmap = [
  {
    id: '1',
    type: RoadmapItemType.Section,
    content: [{ displayText: 'Секция раз' }],
    iconHref: 'icon',
    metadata: { priority: 'minor' },
    children: [
      {
        id: '2',
        type: RoadmapItemType.Topic,
        content: [{ displayText: 'Topic 1', link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&themeRefresh=1' }],
        metadata: {
          priority: 'minor',
          contentType: 'article',
          rating: 1,
          lang: 'eng',
        },
      },
      {
        id: '3',
        type: RoadmapItemType.Group,
        content: 'Topic Group 1',
        children: [
          {
            id: '4',
            type: RoadmapItemType.Group,
            content: 'Topic Group 2',
            children: [
              {
                id: '5',
                type: RoadmapItemType.Topic,
                content: [
                  { displayText: 'Topic 2', link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&themeRefresh=1' },
                ],
                metadata: {
                  priority: 'minor',
                  contentType: 'article',
                  rating: 5,
                  lang: 'eng',
                },
              },
              {
                id: '6',
                type: RoadmapItemType.Achievement,
                content: 'Achievement 1',
              },
              {
                id: '7',
                type: RoadmapItemType.Topic,
                content: [
                  { displayText: 'Topic 3', link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&themeRefresh=1' },
                ],
                metadata: {
                  priority: 'critical',
                  contentType: 'video',
                  rating: 3,
                  lang: 'eng',
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '8',
    type: RoadmapItemType.Achievement,
    content: 'Achievement 2',
  },
  {
    id: '9',
    type: RoadmapItemType.Section,
    content: [{ displayText: 'Секция два' }],
    iconHref: 'icon',
    metadata: { priority: 'critical' },
    children: [
      {
        id: '10',
        type: RoadmapItemType.Topic,
        content: [{ displayText: 'Topic 4', link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&themeRefresh=1' }],
        metadata: {
          priority: 'medium',
          contentType: 'article',
          rating: 4,
          lang: 'eng',
        },
      },
      {
        id: '11',
        type: RoadmapItemType.Topic,
        content: [{ displayText: 'Topic 5', link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&themeRefresh=1' }],
        metadata: {
          priority: 'minor',
          contentType: 'article',
          rating: 2,
          lang: 'eng',
        },
      },
    ],
  },
];
