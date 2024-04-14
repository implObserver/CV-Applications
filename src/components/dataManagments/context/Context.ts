import { createContext, useContext } from "react";

export const Context = createContext(undefined);

export function useThisContext() {
    const props = useContext(Context);
    if (props === undefined) {
        throw new Error('usePropsContext must be used with a propsContext');
    }
    return props;
}