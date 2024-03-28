import { Props } from '../../../../../dataManagments/props/Global';
import { EducationForm } from '../../../../../originals/forms/educationForm/EducationForm';
import { ExperienceForm } from '../../../../../originals/forms/experienceForm/ExperienceForm';
import { ButtonWrapper } from './buttonWrapper/ButtonWrapper';
import { PlacesWrapper } from './placesWrapper/PlacesWrapper';

export const Section = ({ id }) => {
  const props = Props.states[id];

  return (
    <>
      <div className={`section__body`}>
        {(() => {
          if (props.states.drawnNode.getState() === 'form') {
            if (id === 'education') {
              return <EducationForm id={id}></EducationForm>
            }
            if (id === 'experience') {
              return <ExperienceForm id={id}></ExperienceForm>
            }
          } else {
            return (
              <>
                <PlacesWrapper id={id}></PlacesWrapper>
                <ButtonWrapper id={id}></ButtonWrapper>
              </>
            )
          }
        })()}
      </div>
    </>
  );
};