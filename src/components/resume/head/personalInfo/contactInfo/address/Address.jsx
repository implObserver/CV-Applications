import { State } from "../../../../../prototypes/toggle/Toggle";
import { DefaultResume, ResumeUpdater } from "../../../../ResumeUpdater";
import Fields from '../../../../../JSON/Fields.json'

export const Address = () => {
    const update = State(DefaultResume.address);
    Object.assign(ResumeUpdater, { [Fields.detailsForm.address.id]: update });

    return (
        <>
            <div className='address'>
                <span>{update.getState()}</span>
            </div>
        </>
    )
}