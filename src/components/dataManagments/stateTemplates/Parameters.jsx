export const getParametersStatesTemplate = () => {
    const parameters = {
        states: {
            color: {},
            layoutColor: {},
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
            color: '#000000',
        }

    }

    return parameters;
}