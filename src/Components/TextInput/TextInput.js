import { TextInputBox } from "./TextInput.styles.js"


const TextInput = ({...textConfig}) => {
  return (
    <TextInputBox {...textConfig} />
  )
}

export default TextInput