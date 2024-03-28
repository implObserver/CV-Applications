import { createContext, useContext } from "react";

export const PropsContext = createContext(undefined);

export function usePropsContext() {
    const props = useContext(PropsContext);
    if (props === undefined) {
        throw new Error('usePropsContext must be used with a propsContext');
    }

    return props;
}