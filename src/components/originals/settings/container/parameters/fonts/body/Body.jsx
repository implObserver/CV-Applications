import { Props } from "../../../../../../dataManagments/props/Global"
import { FontContainer } from "../../../../../../prototypes/settings/container/parameters/FontContainer"
import { State } from "../../../../../../prototypes/state/State"

export const FontsBody = () => {
    const color = State(Props.states.resumeUpdater.colorTheme.head.getState());
    Object.assign(Props.states.parameters.states.fontsContainerColor, color);
    
    return (
        <>
            <div className="fonts__body">
                <FontContainer className={'serif'}></FontContainer>
                <FontContainer className={'sans'}></FontContainer>
                <FontContainer className={'mono'}></FontContainer>
            </div>
        </>
    )
}