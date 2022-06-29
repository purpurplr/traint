import { JSX } from 'preact';

import badgeIcon from '@assets/icons/badge.svg';

import { Milestone } from '../typings/milestone.type';
import './roadmap-achievement.component.scss';

export interface RoadmapAchievementProps {
  achievement: Milestone;
}

// TODO lol
export const RoadmapAchievement = ({ achievement }: RoadmapAchievementProps): JSX.Element => (
  <article className="achievement">
    <div className="achievement__message">
      <img className="achievement__badge" src={badgeIcon} alt="badge" />
      <span className="achievement__text">{achievement.displayText}</span>
    </div>

    <span className="achievement__text">{achievement.displayText}</span>
  </article>
);
