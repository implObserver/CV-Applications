import { State } from "../../../../../prototypes/toggle/Toggle";
import { DefaultResume, ResumeUpdater } from "../../../../ResumeUpdater";
import Fields from '../../../../../JSON/Fields.json'

export const Mail = () => {
    const update = State(DefaultResume.email);
    Object.assign(ResumeUpdater, { [Fields.detailsForm.email.id]: update });

    return (
        <>
            <div className='mail'>
                <span>{update.getState()}</span>
            </div>
        </>
    )
}