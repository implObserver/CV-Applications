export const Cancel = (changeVisible, section) => {
    const render = (<>
        <input
            type='button'
            id='cancel'
            name='education__cancel'
            className='cancel'
            value='Cancel'
            onClick={() => {
                changeVisible();
                section.drawIt('button');
            }}
        />
    </>)

    return { render };
}