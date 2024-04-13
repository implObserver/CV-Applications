import { Button } from "../../field/input/inputTypes/Button";
import Fields from '../../../../dataManagments/JSON/Fields.json'
import { deleteActivePlace } from "../../../settings/container/contentSection/section/handlers/PlaceHandler";
import { ClosePattern } from "../../handlers/formHandler/FormHandler";
import { usePropsContext } from "../../../../dataManagments/context/PropsContext";

export const Delete = () => {
    const props = usePropsContext();

    const clickHandler = async () => {
        const activePlace = props.dropdownLists[`${props.id}__places`].objects.activeElement;
        console.log(activePlace)
        if (activePlace !== 'new') {
            deleteActivePlace(props.id);
        }
        ClosePattern(props.id);
    }

    return (
        <>
            <Button parameters={Fields.buttons.delete} onClick={clickHandler}></Button>
        </>
    )
};