import { createContext, useContext } from "react";

export const FieldParametersContext = createContext(undefined);

export function useFieldContext() {
    const props = useContext(FieldParametersContext);
    if (props === undefined) {
        throw new Error('useFieldContext must be used with a fieldParametersContext');
    }
    return props;
}