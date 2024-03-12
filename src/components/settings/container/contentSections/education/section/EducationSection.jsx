import { EducationButtonWrapper } from './buttonWrapper/ButtonWrapper';
import { Section } from '../../../../../prototypes/contentSection/section/Section';

export const EducationSection = () => {
    const prototype = Section(EducationButtonWrapper());
    return Object.assign(prototype);
};
