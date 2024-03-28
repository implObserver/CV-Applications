import { Button } from "../../field/input/inputTypes/Button";
import Fields from '../../../../dataManagments/JSON/Fields.json'
import { DeletePlace } from "../../../settings/container/contentSection/section/placesWrapper/place/PlaceHandler";
import { ClosePattern } from "../../handlers/formHandler/FormHandler";
import { Props } from "../../../../dataManagments/props/Global";

export const Delete = ({ id }) => {
    const props = Props.states[id];
    const clickHandler = async () => {
        const activePlace = props.activePlace;
        if (activePlace !== 'new') {
            DeletePlace(id);
        }
        ClosePattern(id);
    }

    return (
        <>
            <Button id={id} parameters={Fields.buttons.delete} onClick={clickHandler}></Button>
        </>
    )
};