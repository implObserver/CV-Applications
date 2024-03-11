import { Head } from '../../../../../prototypes/contentSection/head/Head';

export const EducationHead = () => {
    const prototype = Head();

    const render = (section, form) => (
        <>
            <button
                className={`education__head ${prototype.getState() === 0 ? 'close__head' : 'open__head'} ${prototype.getBlockStatus()}`}
                onClick={() => {
                    prototype.changeBlock('block')
                    prototype.getArrow().setPozitionArrow();
                    section.changeState();
                    prototype.changeState();
                    if (section.isFormOpen()) {
                        form.changeVisible();
                    }
                    setTimeout(() => {
                        prototype.changeBlock('unblock')
                    }, 250);
                }}
            >
                <h2>Education</h2>
                {prototype.getArrow().render}
            </button >
        </>
    );

    return Object.assign(prototype, { render });
};
