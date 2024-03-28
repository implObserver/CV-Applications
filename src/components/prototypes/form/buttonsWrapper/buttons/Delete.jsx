import { Button } from "../../field/input/inputTypes/Button";
import Fields from '../../../../dataManagments/JSON/Fields.json'
import { DeletePlace } from "../../../settings/container/contentSection/section/placesWrapper/place/PlaceHandler";
import { ClosePattern } from "../../handlers/formHandler/FormHandler";
import { usePropsContext } from "../../../../dataManagments/context/PropsContext";

export const Delete = () => {
    const props = usePropsContext();

    const clickHandler = async () => {
        const activePlace = props.activePlace;
        if (activePlace !== 'new') {
            DeletePlace(props.id);
        }
        ClosePattern(props.id);
    }

    return (
        <>
            <Button parameters={Fields.buttons.delete} onClick={clickHandler}></Button>
        </>
    )
};