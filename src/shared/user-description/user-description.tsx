import React, { FC } from "react";
import styles from "./styles.module.css";
import TextArea from "../textarea/textArea";
import { UserState } from "../../entities/users/user-slice";
interface Props {
  state: UserState;
  setState: React.Dispatch<React.SetStateAction<UserState>>;
}

const UserDescription: FC<Props> = ({ state, setState }) => {
  return (
    <div className={styles.wrapper}>
      <TextArea
        className={styles.textArea}
        value={state.description[0]}
        onChange={(e) =>
          setState({
            ...state,
            description: [e.currentTarget.value],
          })
        }
      />
    </div>
  );
};

export default UserDescription;
