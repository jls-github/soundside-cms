import IInput from "./input";

interface IForm {
  name: string;
  guest: boolean;
  inputs?: IInput[];
  id?: number;
}

export default IForm;
