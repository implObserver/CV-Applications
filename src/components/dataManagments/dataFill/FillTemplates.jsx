import { Props } from "../props/Global";
import defaultPlaces from '../JSON/DefaultPlaces.json'
import { IdealPlace } from "../../prototypes/settings/container/contentSection/section/placesWrapper/place/IdealPlace";

export const fillTemplates = () => {
    const personalPlaces = Object.entries(defaultPlaces.personal);
    const educationPlaces = Object.entries(defaultPlaces.education);
    const experiencePlaces = Object.entries(defaultPlaces.experience);
    console.log('FUUUUUUUUUUUUUUUUUUCK')
    Props.states.personalDetails.functions.addForm('details__form', ['unvisible__field']);
    Props.states.education.functions.addForm('education__form', ['unvisible__field']);
    Props.states.experience.functions.addForm('experience__form', ['unvisible__field']);

    Props.states.personalDetails.functions.addDropDownList('personalDetails__places', ['unvisible__place']);
    Props.states.education.functions.addDropDownList('education__places', ['unvisible__place']);
    Props.states.experience.functions.addDropDownList('experience__places', ['unvisible__place']);

    Props.states.personalDetails.objects.activePlace = IdealPlace('personalDetails', 'details__form', personalPlaces[0][1]);

    educationPlaces.forEach(place => {
        Props.states.education.dropdownLists['education__places'].objects.elements.push(IdealPlace('education', 'education__form', place[1]));
    })

    experiencePlaces.forEach(place => {
        Props.states.experience.dropdownLists['experience__places'].objects.elements.push(IdealPlace('experience', 'experience__form', place[1]));
    })
}