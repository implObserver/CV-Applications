import { ButtonWrapper } from '../../../../../../prototypes/contentSection/section/buttonWrapper/ButtonWrapper';
import { ExperienceAddButton } from './button/Add';

export const ExperienceButtonWrapper = () => {
  const button = ExperienceAddButton();
  const prototype = ButtonWrapper(button);

  return Object.assign(prototype);
};
