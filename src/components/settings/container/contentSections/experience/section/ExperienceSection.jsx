import { ExperienceButtonWrapper } from './buttonWrapper/ButtonWrapper';
import { Section } from '../../../../../prototypes/contentSection/section/Section';

export const ExperienceSection = () => {
  const prototype = Section(ExperienceButtonWrapper());
  return Object.assign(prototype);
};
