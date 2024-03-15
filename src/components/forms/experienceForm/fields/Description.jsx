import { ImaginaryField } from '../../../prototypes/form/field/Field';
import { Area } from '../../../prototypes/form/input/TextArea';

export const Description = () => {
    const prototype = ImaginaryField('Description');

    const props = {
        id: 'description',
        name: 'user__description',
        placeholder: 'Enter Description',
    }

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

            {textArea.render(props)}

            <span className='error' aria-live='polite'></span>
        </>
    );

    return Object.assign(prototype, { render, getValue, setValue });
};