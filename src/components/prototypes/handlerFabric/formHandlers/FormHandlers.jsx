import { getFieldsHandler } from "./fieldsHandler/FieldsHandler";

export const FormHandlers = (() => {
    const handlers = {
        fieldsHandlers: {},
    }

    const addFieldsHandler = (formId, props) => {
        const handler = getFieldsHandler(props);
        Object.assign(handlers.fieldsHandlers, { [formId]: handler });
    }

    return Object.assign(handlers, { functions: { addFieldsHandler } });
})();