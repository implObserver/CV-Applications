import { EndDate } from "./endDate/EndDate"
import { StartDate } from "./startDate/StartDate"

export const DatesField = () => {
    return (
        <>
            <span className="dates__field">
                <StartDate></StartDate>
                <span> - </span>
                <EndDate></EndDate>
            </span>
        </>
    )
}