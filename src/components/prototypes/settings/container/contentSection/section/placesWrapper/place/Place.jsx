import '../../../../../../../../styles/PlacesWrapper.css'
import { usePropsContext } from "../../../../../../../dataManagments/context/PropsContext";
import { DropdownListsHandlers } from '../../../../../../handlerFabric/dropdownListsHandlers/DropdownListsHandlers';
import { FormHandlers } from '../../../../../../handlerFabric/formHandlers/FormHandlers';
import { Ref } from '../../../../../../ref/Ref';

export const Place = ({ parameters }) => {
    const props = usePropsContext();
    const values = parameters.getValues();
    const ref = Ref(['unvisible__place', 'visible__place']);

    Object.assign(props.dropdownLists[`${props.id}__places`].objects.elementsRefs, { [parameters.getKey()]: ref });

    const clickHandler = async () => {
        props.dropdownLists[`${props.id}__places`].objects.activeElement = parameters;
        await DropdownListsHandlers.placesHandlers[`${props.id}__places`].switchVisible(false);
        props.dropdownLists[`${props.id}__places`].states.containerRef.switchClass();
        props.states.buttonRef.switchClass();
        props.forms[`${props.id}__form`].states.formStyle.switchClass();
        FormHandlers.fieldsHandlers[`${props.id}__form`].switchVisible(true);
        fillForm();
    }

    const fillForm = () => {
        const inputs = Object.entries(props.forms[parameters.formId].objects.inputs);
        for (let i = 0; i < inputs.length; i++) {
            inputs[i][1].setState(values[i])
        }
    }

    return (
        <>
            <div ref={ref.getRef()} className={`place`} onClick={clickHandler}>
                <span>{values[0]}</span>
            </div>
        </>
    )
}