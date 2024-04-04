export const getParametersStatesTemplate = () => {
    const parameters = {
        states: {

        },
        objects: {
            parametersStyles: {
                layout: {},
                color: {},
                fonts: {},
            },
            addedParameters: []
        },
        defaultStates: {
            parameterVisible: { value: 'unvisible__parameter' },
        }

    }

    return parameters;
}