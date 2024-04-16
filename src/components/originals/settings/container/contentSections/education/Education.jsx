import { EducationSection } from './section/EducationSection.jsx';
import { EducationHead } from './head/EducationHead.jsx';
import { State } from '../../../../../prototypes/state/State.jsx';
import { PropsContext } from '../../../../../dataManagments/context/PropsContext.ts';
import { useThisContext } from '../../../../../dataManagments/context/Context.ts';

export const Education = () => {
  const props = useThisContext();
  const sections = props.sections;
  const section = sections.education;
  const list = props.dropdownLists.sections;

  const isVisible = State(
    'visible__section',
    'unvisible__section',
    sections.defaultStates.sectionVisible
  );

  Object.assign(list.objects.elementsStyles, { education: isVisible });

  return (
    <>
      <div className={`education ${isVisible.getState()}`}>
        <PropsContext.Provider value={section}>
          <EducationHead></EducationHead>
          <EducationSection></EducationSection>
        </PropsContext.Provider>
      </div>
    </>
  );

};