import '../../../../../../../../styles/PlacesWrapper.css'
import { usePropsContext } from "../../../../../../../dataManagments/context/PropsContext";
import { DropdownListsHandlers } from '../../../../../../handlerFabric/dropdownListsHandlers/DropdownListsHandlers';
import { FormHandlers } from '../../../../../../handlerFabric/formHandlers/FormHandlers';
import { State } from "../../../../../../state/State";


export const Place = ({ parameters }) => {
    const props = usePropsContext();
    const values = parameters.getValues();
    const style = State('unvisible__place', 'visible__place', props.dropdownLists[`${props.id}__places`].defaultStates.elementStyle);
    console.log('ASSIGN')
    Object.assign(props.dropdownLists[`${props.id}__places`].objects.elementsStyles, { [parameters.getKey()]: style });
   
    const clickHandler = async () => {
        props.objects.activePlace = parameters;
        await DropdownListsHandlers.placesHandlers[`${props.id}__places`].switchVisible(false);
        props.states.drawnNode.setState('form');
        FormHandlers.fieldsHandlers[Object.values(props.forms)[0].id].switchVisible(true);
        setTimeout(() => {
            fillForm();
        }, 1);
    }

    const fillForm = () => {
        const inputs = Object.entries(props.forms[parameters.formId].objects.inputs);
        for (let i = 0; i < inputs.length; i++) {
            inputs[i][1].setState(values[i])
        }
    }

    return (
        <>
            <div className={`place ${style.getState()}`} onClick={clickHandler}>
                <span>{values[0]}</span>
            </div>
        </>
    )
}