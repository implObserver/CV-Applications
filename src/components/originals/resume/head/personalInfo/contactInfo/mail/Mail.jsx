import { State } from "../../../../../../prototypes/state/State";
import { useThisContext } from "../../../../../../dataManagments/context/Context";

export const Mail = () => {
    const context = useThisContext();
    const update = State(context.label[1]);

    Object.assign(context.updater, { mail: update });

    return (
        <>
            <div className='mail'>
                <span>{update.getState()}</span>
            </div>
        </>
    )
}