import { EducationForm } from '../../../forms/educationForm/EducationForm';
import { ExperienceForm } from '../../../forms/experienceForm/ExperienceForm';
import { ButtonWrapper } from './buttonWrapper/ButtonWrapper';
import { PlacesWrapper } from './placesWrapper/PlacesWrapper';

export const Section = ({ name, props }) => {
  return (
    <>
      <div className={`section__body`}>
        {(() => {
          if (props.states.drawnNode.getState() === 'form') {
            if(name ==='Education') {
              return <EducationForm props={props}></EducationForm>
            }
            if(name ==='Experience') {
              return <ExperienceForm props={props}></ExperienceForm>
            }
          } else {
            return (
              <>
                <PlacesWrapper props={props}></PlacesWrapper>
                <ButtonWrapper props={props} name={name}></ButtonWrapper>
              </>
            )
          }
        })()}
      </div>
    </>
  );
};