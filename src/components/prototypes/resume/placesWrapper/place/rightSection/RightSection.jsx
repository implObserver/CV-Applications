import { DescriptionField } from "./description/Description"
import { InfoField } from "./info/InfoField"
import { PlaceField } from "./placeField/PlaceField"

export const RightSection = ({ id, section }) => {
    return (
        <>
            <div className="resume__place__right-section">
                <PlaceField id={id} section={section}></PlaceField>
                <InfoField id={id} section={section}></InfoField>
                {(() => {
                    if (id === 'experience') {
                        return <DescriptionField id={id} section={section}></DescriptionField>
                    }
                })()}
            </div>
        </>
    )
}