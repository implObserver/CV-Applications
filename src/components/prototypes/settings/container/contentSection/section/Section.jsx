import { usePropsContext } from '../../../../../dataManagments/context/PropsContext';
import { EducationForm } from '../../../../../originals/forms/educationForm/EducationForm';
import { ExperienceForm } from '../../../../../originals/forms/experienceForm/ExperienceForm';
import { ButtonWrapper } from './buttonWrapper/ButtonWrapper';
import { PlacesWrapper } from './placesWrapper/PlacesWrapper';

export const Section = () => {
  const props = usePropsContext();

  return (
    <>
      <div className={`section__body`}>
        {(() => {
          if (props.states.drawnNode.getState() === 'form') {
            if (props.id === 'education') {
              return <EducationForm></EducationForm>
            }
            if (props.id === 'experience') {
              return <ExperienceForm></ExperienceForm>
            }
          } else {
            return (
              <>
                <PlacesWrapper></PlacesWrapper>
                <ButtonWrapper></ButtonWrapper>
              </>
            )
          }
        })()}
      </div>
    </>
  );
};