import { EndDate } from "./endDate/EndDate"
import { StartDate } from "./startDate/StartDate"

export const DatesField = ({ section }) => {
    return (
        <>
            <span className="dates__field">
                <StartDate section={section}></StartDate>
                <span> - </span>
                <EndDate section={section}></EndDate>
            </span>
        </>
    )
}