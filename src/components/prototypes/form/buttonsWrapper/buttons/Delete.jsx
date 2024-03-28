import { Button } from "../../input/Button";
import Fields from '../../../../dataManagments/JSON/Fields.json'
import { DeletePlace } from "../../../settings/container/contentSection/section/placesWrapper/place/PlaceHandler";
import { ClosePattern } from "../../FormHandler";

export const Delete = ({ props, id }) => {
    const clickHandler = async () => {
        const activePlace = props.activePlace;
        if (activePlace !== 'new') {
            DeletePlace(props);
        }
        ClosePattern(props);
    }

    return (
        <>
            <Button id={id} parameters={Fields.buttons.delete} onClick={clickHandler}></Button>
        </>
    )
};