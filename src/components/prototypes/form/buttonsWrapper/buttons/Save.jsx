import Fields from '../../../../dataManagments/JSON/Fields.json'
import { Props } from '../../../../dataManagments/props/Global';
import { IdealPlace } from '../../../settings/container/contentSection/section/placesWrapper/place/IdealPlace';
import { ClosePattern } from '../../handlers/formHandler/FormHandler';
import { Button } from '../../field/input/inputTypes/Button';
import { usePropsContext } from '../../../../dataManagments/context/PropsContext';

export const Save = () => {
  const props = usePropsContext();

  const clickHandler = async () => {
    if (props.activePlace === 'new') {
      const place = IdealPlace(props.id);
      props.places.push(place);
      Props.states.resumeUpdater[props.id].trigger.switchState();
    } else {
      props.activePlace.update();
    }
    ClosePattern(props.id);
  }

  return (
    <>
      <Button parameters={Fields.buttons.save} onClick={clickHandler}></Button>
    </>
  )
};