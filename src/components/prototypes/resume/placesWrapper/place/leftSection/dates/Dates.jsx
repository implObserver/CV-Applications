import { EndDate } from "./endDate/EndDate"
import { StartDate } from "./startDate/StartDate"

export const DatesField = ({ id, props, section }) => {
    return (
        <>
            <span className="dates__field">
                <StartDate id={id} props={props} section={section}></StartDate>
                <span> - </span> 
                <EndDate id={id} props={props} section={section}></EndDate>
            </span>
        </>
    )
}