import { FC } from "react";
import Input from "./Input";

const InputContainer: FC = () => {
  return (
    <Input.Container>
      <Input.Label />
      <Input.Field>
        <Input.Icon />
      </Input.Field>
    </Input.Container>
  );
};

export default InputContainer;
