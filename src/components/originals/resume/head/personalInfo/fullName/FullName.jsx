import { State } from "../../../../../prototypes/state/State"
import { useThisContext } from "../../../../../dataManagments/context/Context";

export const FullName = () => {
    const context = useThisContext();
    const update = State(context.label[0]);
    Object.assign(context.updater, { fullName: update });

    return (
        <>
            <div className="full__name">
                <h1
                    style={{
                        color: `color-contrast(${context.color} vs #fff, #000)`
                    }}>
                    {update.getState()}
                </h1>
            </div>
        </>
    )
}