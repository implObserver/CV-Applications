import { EducationForm } from '../../../forms/educationForm/EducationForm';
import { ExperienceForm } from '../../../forms/experienceForm/ExperienceForm';
import { State } from '../../toggle/Toggle';
import { ButtonWrapper } from './buttonWrapper/ButtonWrapper';
import { PlacesWrapper } from './placesWrapper/PlacesWrapper';

export const Section = (name, props) => {
  const startDrawAnimation = () => {
    setTimeout(() => {
      changeStateChilds();
    }, 10);
  }

  const drawIt = (val) => {
    drawnNode.setState(val);
    startDrawAnimation();
  };

  const changeState = () => {
    changeStateChilds();
  };

  const changeStateChilds = () => {
    buttonWrapper.changeVisible();
  };

  const isFormOpen = () => {
    return drawnNode.getState() === 'form';
  };

  const getDrawStatus = () => {
    return drawnNode.getState();
  };

  return (
    <>
      <div className={`section__body`}>
        <EducationForm props={props}></EducationForm>
        <PlacesWrapper props={props}></PlacesWrapper>
        <ButtonWrapper props={props} name={name}></ButtonWrapper>
      </div>
    </>
  );
};

/*{(() => {
  if (getDrawStatus() === 'form') {
    if (name === 'Education') {
      return (<>
        <EducationForm props={props}></EducationForm>
      </>)
    } else {
      return (<>
        <ExperienceForm props={props}></ExperienceForm>
      </>)
    }
  } else {
    return (
      <>
        <PlacesWrapper props={props}></PlacesWrapper>
        <ButtonWrapper props={props} name={name}></ButtonWrapper>
      </>
    )
  }
})()}*/