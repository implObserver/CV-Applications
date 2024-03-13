import { EducationButtonWrapper } from './buttonWrapper/ButtonWrapper';
import { Section } from '../../../../../prototypes/contentSection/section/Section';
import { EducationPlacesWrapper } from './educationPlaces/PlacesWrapper';

export const EducationSection = () => {
    const placesWrapper = EducationPlacesWrapper();
    const buttonWrapper = EducationButtonWrapper();
    const prototype = Section(buttonWrapper, placesWrapper);
    return Object.assign(prototype);
};
