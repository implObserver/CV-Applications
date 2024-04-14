import { Color } from "./color/Color";
import { Fonts } from "./fonts/Fonts";
import { Layout } from "./layout/Layout";
import '../../../../../styles/Parameters.css'
import { Ref } from "../../../../prototypes/ref/Ref";
import { appModel } from "../../../../../main";

export const Parameters = () => {
  return (
    <>
      <div className='parameters'>
        <Layout></Layout>
        <Color></Color>
        <Fonts></Fonts>
      </div>
    </>
  );
};
