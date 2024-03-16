import { Section } from '../../../../../prototypes/contentSection/section/Section';

export const EducationSection = ({ name, props }) => {
    const prototype = Section(name, props);
    return Object.assign(prototype);
};
