import Fields from '../../../../JSON/Fields.json'
import { ResumeUpdater } from '../../../../resume/ResumeUpdater';
import { IdealPlace } from '../../../contentSection/section/placesWrapper/place/IdealPlace';
import { ClosePattern } from '../../FormHandler';
import { Button } from '../../input/Button';

export const Save = ({ props, id }) => {
  const clickHandler = async () => {
    if (props.activePlace === 'new') {
      const place = IdealPlace(props);
      props.places.push(place);
      ResumeUpdater[props.id].trigger.switchState();
    } else {
      props.activePlace.update();
    }
    ClosePattern(props);
  }

  return (
    <>
      <Button id={id} parameters={Fields.buttons.save} onClick={clickHandler}></Button>
    </>
  )
};