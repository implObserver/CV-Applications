import { useThisContext } from "../../../../../dataManagments/context/Context";
import { PropsContext } from "../../../../../dataManagments/context/PropsContext";
import { State } from "../../../../../prototypes/state/State";
import { EducationHead } from "../education/head/EducationHead";
import { EducationSection } from "../education/section/EducationSection";

export const Experience = () => {
  const props = useThisContext();
  const sections = props.sections;
  const section = sections.experience;
  const list = props.dropdownLists.sections;

  const isVisible = State(
    'visible__section',
    'unvisible__section',
    sections.defaultStates.sectionVisible
  );

  Object.assign(list.objects.elementsStyles, { experience: isVisible });

  return (
    <>
      <div className={`experience ${isVisible.getState()}`}>
        <PropsContext.Provider value={section}>
          <EducationHead></EducationHead>
          <EducationSection></EducationSection>
        </PropsContext.Provider>
      </div>
    </>
  );
};
