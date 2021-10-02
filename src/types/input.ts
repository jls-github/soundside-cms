interface IInput {
    labelText: string,
    name: string,
    type: InputEnum
}

export enum InputEnum {
    checkbox = "checkbox", text = "text", textarea = "textarea", number = "number"
}

export default IInput