import IForm from "../../types/form";
import { InputEnum } from "../../types/input";

const initialFormData: IForm = {
  name: "",
  guest: true,
  inputs: [{ labelText: "", name: "", type: InputEnum["text"] }],
};

export default initialFormData;
