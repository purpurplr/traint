import EngIcon from '@assets/icons/english.svg';
import RuIcon from '@assets/icons/russian.svg';
import VideoIcon from '@assets/icons/video.svg';
import ArticleIcon from '@assets/icons/articles.svg';

import { FilterOptions } from '../typings/filter-options.type';

export const filterOptions: FilterOptions = [
  {
    labelText: 'на aнглийском',
    value: 'eng',
    icon: <EngIcon />,
  },
  {
    labelText: 'на русском',
    value: 'ru',
    icon: <RuIcon />,
  },
  {
    labelText: 'видео',
    value: 'video',
    icon: <VideoIcon />,
  },
  {
    labelText: 'статьи',
    value: 'article',
    icon: <ArticleIcon />,
  },
];
