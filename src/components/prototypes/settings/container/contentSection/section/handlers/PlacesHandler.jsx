import { later } from "../../../../../../../helper/Timeout";
import { LineFiller } from "../../../../../details/lineFiller/LineFiller";

export const PlacesHandler = (() => {
    const prototype = LineFiller();
    const fillOfPlaces = async (props, key) => {
        await later(1).promise
        const placesStyles = Object.entries(props.objects.placesStyles);
        const addedPlaces = props.objects.addedPlaces;
        prototype.setElements(placesStyles, addedPlaces);
        prototype.changeVisibleElements(key);
    }

    return { fillOfPlaces };
})();