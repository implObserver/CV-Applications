import { Props } from "../props/Global"

export const removeSections = () => {
    const sections = ['education', 'experience'];

    sections.forEach(id => {
        Props.states[id].objects.places = [];
        Props.states[id].addedPlaces = [];
        Props.states.resumeUpdater[id].trigger.switchState();
    })
}