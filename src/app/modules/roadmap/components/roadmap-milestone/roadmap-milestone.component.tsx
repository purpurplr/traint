import { JSX } from 'preact';

import badgeIcon from '@assets/icons/badge.svg';

import { Milestone } from '../../typings/milestone.type';

import './roadmap-milestone.component.scss';

export interface RoadmapAchievementProps {
  achievement: Milestone;
}

// TODO lol
export const RoadmapMilestone = ({ achievement }: RoadmapAchievementProps): JSX.Element => (
  <article className="roadmap-milestone">
    <div className="roadmap-milestone__message">
      <img className="roadmap-milestone__badge" src={badgeIcon} alt="badge" />
      <span className="roadmap-milestone__text">{achievement.displayText}</span>
    </div>

    <span className="roadmap-milestone__text">{achievement.displayText}</span>
  </article>
);
