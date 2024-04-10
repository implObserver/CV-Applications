import { Props } from "../props/Global";
import defaultPlaces from '../JSON/DefaultPlaces.json'
import { IdealPlace } from "../../prototypes/settings/container/contentSection/section/placesWrapper/place/IdealPlace";

export const fillTemplates = () => {
    const personalPlaces = Object.entries(defaultPlaces.personal);
    const educationPlaces = Object.entries(defaultPlaces.education);
    const experiencePlaces = Object.entries(defaultPlaces.experience);

    Props.states.personalDetails.objects.activePlace = IdealPlace('personalDetails', personalPlaces[0][1]);

    educationPlaces.forEach(place => {
        Object.assign(Props.states.education.objects.places.push(IdealPlace('education', place[1])));
    })

    experiencePlaces.forEach(place => {
        Object.assign(Props.states.experience.objects.places.push(IdealPlace('experience', place[1])));
    })
}