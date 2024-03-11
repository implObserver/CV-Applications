import { Degree } from './fields/Degree';
import { EndDate } from './fields/EndDate';
import { Location } from './fields/Location';
import { School } from './fields/School';
import { StartDate } from './fields/StartDate';
import { Buttons } from './fields/Buttons';
import { DynamicForm } from '../../prototypes/form/DynamicForm';

export const EducationForm = () => {
  const fields = [School(), Degree(), StartDate(), EndDate(), Location(), Buttons()];
  const prototype = DynamicForm(fields);

  const render = (drawIt) => (
    <>
      <form className={prototype.getVisible()} id='education__form' action='#' method='post'>
        <ul>
          {fields.map((field) => {
            return <li key={field.getKey()} className={field.getVisible()}>
              {field.render(prototype.changeVisible, drawIt)}
            </li>
          })}
        </ul>
      </form>
    </>
  );

  return Object.assign(prototype, { render });
};
