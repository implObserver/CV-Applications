import { State } from "../../../../../../prototypes/state/State";
import { useThisContext } from "../../../../../../dataManagments/context/Context";

export const NumberPhone = () => {
    const context = useThisContext();
    const update = State(context.label[2]);

    Object.assign(context.updater, { numberPhone: update });

    return (
        <>
            <div className='number__phone'>
                <span>{update.getState()}</span>
            </div>
        </>
    )
}