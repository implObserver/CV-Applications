import { ColorSide } from "../../../../../../../prototypes/settings/container/parameters/ColorSide"
import { WhiteSide } from "../../../../../../../prototypes/settings/container/parameters/WhiteSide"

export const Right = () => {
    return (
        <>
            <div className="right__layout">
                <WhiteSide></WhiteSide>
                <ColorSide id={'right'}></ColorSide>
            </div>
        </>
    )
}