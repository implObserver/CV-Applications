import { usePropsContext } from "../../../../../dataManagments/context/PropsContext";
import { DescriptionField } from "./description/Description"
import { InfoField } from "./info/InfoField"
import { PlaceField } from "./placeField/PlaceField"

export const RightSection = () => {
    const props = usePropsContext();

    return (
        <>
            <div className="resume__place__right-section">
                <PlaceField></PlaceField>
                <InfoField></InfoField>
                {(() => {
                    if (props.id === 'experience') {
                        return <DescriptionField></DescriptionField>
                    }
                })()}
            </div>
        </>
    )
}