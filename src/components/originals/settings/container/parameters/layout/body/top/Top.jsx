import { ColorSide } from "../../../../../../../prototypes/settings/container/parameters/ColorSide"
import { WhiteSide } from "../../../../../../../prototypes/settings/container/parameters/WhiteSide"

export const Top = () => {

    return (
        <>
            <div className="top__layout">
                <ColorSide id={'top'}></ColorSide>
                <WhiteSide></WhiteSide>
            </div>
        </>
    )
}