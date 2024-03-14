import { ImaginaryField } from '../../../prototypes/field/Field';
import { Cancel } from '../buttons/Cancel';
import { Delete } from '../buttons/Delete';
import { Save } from '../buttons/Save';

export const Buttons = () => {
  const prototype = ImaginaryField('Buttons');
  const deleteButton = Delete();
  const saveButton = Save();
  const cancelButton = Cancel();

  const render = (changeVisible, drawIt, placesWrapper, getValues, masterKey) => (
    <>
      <div className='buttons'>
        {deleteButton.render(changeVisible, drawIt)}
        {saveButton.render(changeVisible, drawIt, placesWrapper, getValues, masterKey)}
        {cancelButton.render(changeVisible, drawIt)}
      </div>
    </>
  );

  return Object.assign(prototype, { render });
};
