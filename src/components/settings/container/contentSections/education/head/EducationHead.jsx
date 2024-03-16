import { Head } from '../../../../../prototypes/contentSection/head/Head';

export const EducationHead = ({ name, props }) => {
  const prototype = Head(name, props);
  return Object.assign(prototype);
};
