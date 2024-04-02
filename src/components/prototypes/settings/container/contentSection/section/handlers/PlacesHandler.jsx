import { later } from "../../../../../../../helper/Timeout";

export const PlacesHandler = (() => {
    let timer = later(1);
    const pause = async (ms) => {
        timer = later(ms);
        return timer.promise;
    }

    const changeVisiblePlaces = async (props, key) => {
        timer.cancel();
        console.log(key)
        return key ? addPlaces(props) : removePlaces(props);
    };

    const addPlaces = async (props) => {
        await pause(1);
        const placesStyles = Object.entries(props.objects.placesStyles);
        console.log('aaa')
        console.log(placesStyles)
        const addedPlaces = props.objects.addedPlaces;
        for (const style of placesStyles) {
            console.log(style[0])
            if (!addedPlaces.includes(style[0])) {
                console.log(style[0])
                addedPlaces.push(style[0])
                style[1].switchState();
                await pause(50);
            }
        }
    };

    const removePlaces = async (props) => {
        const placesStyles = Object.entries(props.objects.placesStyles).reverse();
        const addedPlaces = props.objects.addedPlaces;
        console.log('eeee')
        console.log(placesStyles)
        for (const style of placesStyles) {
            console.log(style[0])
            if (addedPlaces.includes(style[0])) {
                console.log(style[0])
                addedPlaces.pop(style[0])
                style[1].switchState();
                await pause(50);
            }
        }
    }

    return { changeVisiblePlaces }
})();