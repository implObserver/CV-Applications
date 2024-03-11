import { Head } from '../../../../../prototypes/sectionHead/Head';

export const ExperienceHead = ({ section, form }) => {
    const prototype = Head();

    const render = (
        <>
            <button
                className={`experience__head ${prototype.getState() === 0 ? 'close__head' : 'open__head'} ${prototype.getBlockStatus()}`}
                onClick={() => {
                    prototype.changeBlock('block')
                    prototype.getArrow().setPozitionArrow();
                    section.changeState();
                    prototype.changeState();
                    if (section.isFormOpen()) {
                        form.changeVisibleFields();
                    }
                    setTimeout(() => {
                        prototype.changeBlock('unblock')
                    }, 250);
                }}
            >
                <h2>Experience</h2>
                {prototype.getArrow().render}
            </button >
        </>
    );

    return Object.assign(prototype, { render });
};