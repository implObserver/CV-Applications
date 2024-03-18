import { useMemo } from 'react';
import { EducationForm } from '../../../forms/educationForm/EducationForm';
import { ButtonWrapper } from './buttonWrapper/ButtonWrapper';
import { PlacesWrapper } from './placesWrapper/PlacesWrapper';

export const Section = ({ name, props }) => {

  return (
    <>
      <div className={`section__body`}>
        {(() => {
          if (props.states.drawnNode.getState() === 'form') {
            return <EducationForm props={props}></EducationForm>
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