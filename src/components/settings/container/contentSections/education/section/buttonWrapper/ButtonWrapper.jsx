import { ButtonWrapper } from '../../../../../../prototypes/contentSection/section/buttonWrapper/ButtonWrapper';
import { EducationAddButton } from './button/Add';

export const EducationButtonWrapper = (props) => {
  const button = EducationAddButton(props);
  const prototype = ButtonWrapper(button);

  return Object.assign(prototype);
};
