import { ButtonWrapper } from '../../../../../../prototypes/contentSection/section/buttonWrapper/ButtonWrapper';
import { EducationAddButton } from './button/Add';

export const EducationButtonWrapper = () => {
  const button = EducationAddButton();
  const prototype = ButtonWrapper(button);

  return Object.assign(prototype);
};
