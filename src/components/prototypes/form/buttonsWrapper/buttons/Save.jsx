import Fields from '../../../../dataManagments/JSON/Fields.json'
import { Props } from '../../../../dataManagments/props/Global';
import { IdealPlace } from '../../../settings/container/contentSection/section/placesWrapper/place/IdealPlace';
import { ClosePattern } from '../../handlers/formHandler/FormHandler';
import { Button } from '../../field/input/inputTypes/Button';

export const Save = ({ id }) => {
  const props = Props.states[id];

  const clickHandler = async () => {
    if (props.activePlace === 'new') {
      const place = IdealPlace(id);
      props.places.push(place);
      Props.states.resumeUpdater[props.id].trigger.switchState();
    } else {
      props.activePlace.update();
    }
    ClosePattern(id);
  }

  return (
    <>
      <Button id={id} parameters={Fields.buttons.save} onClick={clickHandler}></Button>
    </>
  )
};