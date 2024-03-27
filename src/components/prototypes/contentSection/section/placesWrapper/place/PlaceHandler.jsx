import { ResumeUpdater } from "../../../../../resume/ResumeUpdater";

export const DeletePlace = (props) => {
    const index = filter(props);
    props.places.splice(index, 1);
    ResumeUpdater[props.id].trigger.switchState();
}

const filter = (props) => {
    let places = props.places;
    const activePlace = props.activePlace;
    let index = -1;
    for (let i = 0; i < places.length; i++) {
        if (places[i].getKey() === activePlace.getKey()) {
            index = i;
        }
    }
    return index;
}