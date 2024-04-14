import { State } from "../../../../../../prototypes/state/State";
import { useThisContext } from "../../../../../../dataManagments/context/Context";

export const Address = () => {
    const context = useThisContext();
    const update = State(context.label[3]);

    Object.assign(context.updater, { address: update });

    return (
        <>
            <div className='address'>
                <span>{update.getState()}</span>
            </div>
        </>
    )
}