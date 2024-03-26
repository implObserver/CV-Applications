import { DescriptionField } from "./description/Description"
import { InfoField } from "./info/InfoField"
import { PlaceField } from "./placeField/PlaceField"

export const RightSection = ({ id }) => {
    return (
        <>
            <div className="resume__place__right-section">
                <PlaceField></PlaceField>
                <InfoField></InfoField>
                {(() => {
                    if (id === 'experience') {
                        return <DescriptionField></DescriptionField>
                    }
                })()}
            </div>
        </>
    )
}