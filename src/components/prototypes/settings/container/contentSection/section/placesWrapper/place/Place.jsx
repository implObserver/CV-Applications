import '../../../../../../../../styles/PlacesWrapper.css'
import { usePropsContext } from "../../../../../../../dataManagments/context/PropsContext";
import { fillForm } from '../../../../../../form/handlers/formHandler/FormHandler';
import { DropdownListsHandlers } from '../../../../../../handlerFabric/dropdownListsHandlers/DropdownListsHandlers';
import { FormHandlers } from '../../../../../../handlerFabric/formHandlers/FormHandlers';
import { State } from '../../../../../../state/State';

export const Place = ({ parameters }) => {
    const props = usePropsContext();
    const values = parameters.getValues();
    const form = props.forms[parameters.formId];
    const list = props.dropdownLists[`${props.id}__places`];
    const style = State('unvisible__place', 'visible__place');
    const placesHandler = DropdownListsHandlers.placesHandlers[`${props.id}__places`];
    const fieldsHandler = FormHandlers.fieldsHandlers[`${props.id}__form`];

    Object.assign(list.objects.elementsStyles, { [parameters.getKey()]: style });

    const clickHandler = async () => {
        props.activeElement = 'form';
        list.objects.activeElement = parameters;
        await placesHandler.switchVisible(false);
        list.states.containerStyle.switchState();
        props.states.buttonStyle.switchState();
        fieldsHandler.switchVisible(true);
        fillForm(form, values);
    }

    return (
        <>
            <div className={`place ${style.getState()}`} onClick={clickHandler}>
                <span>{values[0]}</span>
            </div>
        </>
    )
}