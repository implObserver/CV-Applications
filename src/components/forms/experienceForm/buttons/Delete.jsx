export const Delete = () => {
    const render = () => (<>
        <input
            type='button'
            id='delete'
            name='education__delete'
            className='delete'
            value='Delete'
        />
    </>)

    return { render };
}