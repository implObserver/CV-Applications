import { ExperienceButtonWrapper } from './buttonWrapper/ButtonWrapper';
import { Section } from '../../../../../prototypes/contentSection/section/Section';
import { ExperiencePlacesWrapper } from './experiencePlaces/PlacesWrapper';

export const ExperienceSection = () => {
  const placesWrapper = ExperiencePlacesWrapper();
  const buttonWrapper = ExperienceButtonWrapper()
  const prototype = Section(buttonWrapper, placesWrapper);
  return Object.assign(prototype);
};
