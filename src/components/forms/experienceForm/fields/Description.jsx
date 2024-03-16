import { ImaginaryField } from '../../../prototypes/form/field/Field';
import { Area } from '../../../prototypes/form/input/TextArea';
import Fields from '../../../JSON/Fields.json';

export const Description = () => {
    const prototype = ImaginaryField('Description');

    const textArea = Area()

    const getValue = () => {
        return textArea.getValue()
    }

    const setValue = () => {
        textArea.setValue();
    }


    const render = () => (
        <>
            <label htmlFor='description'>Description</label>

            {textArea.render(Fields.experienceForm.description)}

            <span className='error' aria-live='polite'></span>
        </>
    );

    return Object.assign(prototype, { render, getValue, setValue });
};