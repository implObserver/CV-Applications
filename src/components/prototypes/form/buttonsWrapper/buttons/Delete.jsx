import { timeout } from "../../../../helper/Timeout";

export const Delete = (changeVisible, drawIt, placesWrapper, masterKey) => {
    <>
        <input
            type='button'
            id='delete'
            name='education__delete'
            className='delete'
            value='Delete'
            onClick={async () => {
                placesWrapper.deletePlace(masterKey);
                changeVisible();
                await timeout(450);
                drawIt('button');
            }}
        />
    </>
};