import { Field } from '../../../prototypes/field/Field';
import { Cancel } from '../buttons/Cancel';
import { Delete } from '../buttons/Delete';
import { Save } from '../buttons/Save';

export const Buttons = () => {
  const prototype = Field('Buttons');
  const deleteButton = Delete();
  const saveButton = Save();
  const cancelButton = Cancel();

  const render = (changeVisible, drawIt) => (
    <>
      <div className='buttons'>
        {deleteButton.render(changeVisible, drawIt)}
        {saveButton.render(changeVisible, drawIt)}
        {cancelButton.render(changeVisible, drawIt)}
      </div>
    </>
  );

  return Object.assign(prototype, { render });
};
