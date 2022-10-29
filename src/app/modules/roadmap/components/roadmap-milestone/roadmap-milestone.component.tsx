import BadgeIcon from '@assets/icons/badge.svg';

import { Milestone } from '../../typings/milestone.type';

import './roadmap-milestone.component.scss';

export interface RoadmapAchievementProps {
  achievement: Milestone;
}

// TODO lol
export const RoadmapMilestone = ({ achievement }: RoadmapAchievementProps): JSX.Element => (
  <article className="roadmap-milestone">
    <div className="roadmap-milestone__message">
      <div className="roadmap-milestone__badge">
        <BadgeIcon />
      </div>
      <span className="roadmap-milestone__text">{achievement.displayText}</span>
    </div>

    <span className="roadmap-milestone__text">{achievement.displayText}</span>
  </article>
);
