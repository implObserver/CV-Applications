import { appModel } from "../../../../../../../main"
import { FontContainer } from "../../../../../../prototypes/settings/container/parameters/FontContainer"
import { State } from "../../../../../../prototypes/state/State"

export const FontsBody = () => {
    const color = State('#ffa500');
    Object.assign(appModel.settings.container.parameters.styles.colors, { fontsContainerColor: color });

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