import { Field } from "../../../prototypes/field/Field";
import { Cancel } from "../buttons/Cancel";
import { Delete } from "../buttons/Delete";
import { Save } from "../buttons/Save";

export const Buttons = (changeVisible, section) => {
    const prototype = Field('Buttons');
    const deleteButton = Delete(changeVisible);
    const saveButton = Save(changeVisible);
    const cancelButton = Cancel(changeVisible, section);

    const render = (<>
        <div className="buttons">
            {deleteButton.render}
            {saveButton.render}
            {cancelButton.render}
        </div>
    </>)

    return Object.assign(prototype, { render });
}