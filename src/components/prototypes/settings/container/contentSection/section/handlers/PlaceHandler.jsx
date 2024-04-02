import { Props } from "../../../../../../dataManagments/props/Global";


export const DeletePlace = (id) => {
    const props = Props.states[id];
    const index = filter(props);
    props.objects.places.splice(index, 1);
    props.objects.addedPlaces.splice(index, 1)
    Props.states.resumeUpdater[props.id].trigger.switchState();
}

const filter = (props) => {
    let places = props.objects.places;
    const activePlace = props.objects.activePlace;
    let index = -1;
    for (let i = 0; i < places.length; i++) {
        if (places[i].getKey() === activePlace.getKey()) {
            index = i;
        }
    }
    return index;
}