import { FC } from "react";
import Button from "./button";

interface Props {
  className: string;
  text: string;
}

const ButtonContainer: FC<Props> = ({ className, text }) => {
  return (
    <Button.Wrapper>
      <Button.ButtonElement className={className} text={text}>
        <Button.Icon
          icon={
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 18L15.5 12L9.5 6"
                stroke="#EDEEF0"
                strokeOpacity="0.96"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
      </Button.ButtonElement>
    </Button.Wrapper>
  );
};

export default ButtonContainer;
