import { Head } from '../../../../../templates/sectionHead/Head';

export const EducationHead = ({ section, form }) => {
    const prototype = Head();
    
    const render = (
        <>
            <button
                className={`education__head ${prototype.getState() === 0 ? 'close__head' : 'open__head'} ${prototype.getBlockStatus()}`}
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
                <h2>Education</h2>
                {prototype.getArrow().render}
            </button >
        </>
    );

    return Object.assign(prototype, { render });
};
