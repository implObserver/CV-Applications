import { appModel } from "../../../main";
import defaultPlaces from '../JSON/DefaultPlaces.json'
import { IdealPlace } from "../../prototypes/settings/container/contentSection/section/placesWrapper/place/IdealPlace";
import { DropdownListsHandlers } from "../../prototypes/handlerFabric/dropdownListsHandlers/DropdownListsHandlers";
import { fillForm } from "../../prototypes/form/handlers/formHandler/FormHandler";

export const Load = (id) => {
    personalDetails(id);
    education(id);
    experience(id);
    
    try {
        appModel.resume.updater.update.switchState();
    } catch (error) {
        console.log(error)
    }
}


const personalDetails = (id) => {
    const section = appModel.settings.container.sections.personalDetails;
    const form = section.forms['personalDetails__form'];
    const list = section.dropdownLists['personalDetails__places'];
    const values = defaultPlaces.personalDetails.PeterParker;

    switch (id) {
        case 'Peter Parker': {
            list.objects.activeElement = IdealPlace(list, form, values);
        }
    }

    try {
        fillForm(form, values);
        const fields = Object.values(appModel.resume.updater[section.id][section.dropdownLists[`${section.id}__places`].objects.activeElement.getKey()]);
        for (let i = 0; i < fields.length; i++) {
            fields[i].setState(values[i]);
        }
    } catch (error) {
        console.log(error)
    }

}

const education = (id) => {
    const section = appModel.settings.container.sections.education;
    const form = section.forms['education__form'];
    const list = section.dropdownLists['education__places'];

    switch (id) {
        case 'Peter Parker': {
            const values = Object.entries(defaultPlaces.education.PeterParker);
            values.forEach(value => {
                const place = IdealPlace(list, form, value[1]);
                list.objects.elements.push(place);
            })
        }
    }

    try {
        list.states.containerUpdate.switchState();
        if (section.states.open.getState() === true) {
            setTimeout(() => {
                DropdownListsHandlers.placesHandlers[`${section.id}__places`].switchVisible(true);
            }, 1);
        }

    } catch (error) {
        console.log()
    }

}

const experience = (id) => {
    const section = appModel.settings.container.sections.experience;
    const form = section.forms['experience__form'];
    const list = section.dropdownLists['experience__places'];

    switch (id) {
        case 'Peter Parker': {
            const values = Object.entries(defaultPlaces.experience.PeterParker);
            values.forEach(value => {
                const place = IdealPlace(list, form, value[1]);
                list.objects.elements.push(place);
            })
        }
    }

    try {
        list.states.containerUpdate.switchState();
        if (section.states.open.getState() === true) {
            setTimeout(() => {
                DropdownListsHandlers.placesHandlers[`${section.id}__places`].switchVisible(true);
            }, 1);
        }
    } catch (error) {
        console.log()
    }
}