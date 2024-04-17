import { appModel } from "../../../main";
import { FillForm } from "../../prototypes/form/handlers/formHandler/FormHandler";
import { FormHandlers } from "../../prototypes/handlerFabric/formHandlers/FormHandlers";
import defaultPlaces from '../JSON/DefaultPlaces.json'

export const FirstRender = (() => {
    const detailsForm = () => {
        const section = appModel.settings.container.sections.personalDetails;
        const form = section.forms['personalDetails__form'];
        const values = defaultPlaces.personalDetails.PeterParker;
        section.activeElement = 'form';
        FormHandlers.fieldsHandlers[`personalDetails__form`].switchVisible(true);
        FillForm(form, values);
    }

    return { detailsForm };
})();