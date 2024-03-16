import { ImaginaryField } from "../field/Field";
import { Cancel } from "./buttons/Cancel";
import { Delete } from "./buttons/Delete";
import { Save } from "./buttons/Save";

export const ButtonsWrapper = () => {
    const prototype = ImaginaryField('Buttons');

    const render = (changeVisible, drawIt, placesWrapper, getValues, masterKey) => (
        <>
            <div className='buttons'>
                <Delete props={{ changeVisible, drawIt, placesWrapper, masterKey }}></Delete>
                <Save props={{ changeVisible, drawIt, placesWrapper, getValues, masterKey }}></Save>
                <Cancel props={{ changeVisible, drawIt }}></Cancel>
            </div>
        </>
    );

    return Object.assign(prototype, { render });
}