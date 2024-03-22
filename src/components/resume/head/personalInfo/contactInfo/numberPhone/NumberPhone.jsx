import { State } from "../../../../../prototypes/toggle/Toggle";
import { DefaultResume, ResumeUpdater } from "../../../../ResumeUpdater";
import Fields from '../../../../../JSON/Fields.json'

export const NumberPhone = () => {
    const update = State(DefaultResume.phoneNumber);
    Object.assign(ResumeUpdater, { [Fields.detailsForm.phoneNumber.id]: update });

    return (
        <>
            <div className='number__phone'>
                <span>{update.getState()}</span>
            </div>
        </>
    )
}