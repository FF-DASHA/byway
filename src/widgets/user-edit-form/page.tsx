import React, { useState, type FunctionComponent } from "react";
import styles from "./styles.module.css";
import { initialState } from "../../entities/categories/category-slice";
import { UserState } from "../../entities/users/user-slice";
import Button from "../../shared/button/button";
import Input from "../../shared/input/Input";
import { Title } from "../../shared/title/title";
import UserDescription from "../../shared/user-description/user-description";

interface Props {
  initialValue: UserState;
  onChange: (value: UserState) => void;
}

export const UserEditForm: FunctionComponent<Props> = ({
  initialValue,
  onChange,
}) => {
  const [state, setState] = useState<UserState>(initialValue);

  return (
    // форма редактирования
    <form onSubmit={(e) => e.preventDefault()}>
      <Input.Field
        className={styles.name}
        onChange={(e) => setState({ ...state, name: e.currentTarget.value })}
        placeholder={initialState.name}
      />

      <Input.Container className={styles.headline}>
        <Input.Label label="Headline" />
        <Input.Field
          className={styles.input}
          onChange={(e) =>
            setState({ ...state, headline: e.currentTarget.value })
          }
          placeholder={initialState.headline}
        />
      </Input.Container>

      <div className={styles.description}>
        <Title text="Description" className={styles.title} />
        <UserDescription state={state} setState={setState} />
      </div>

      <div className={styles.language}>
        <Title text="Language" className={styles.title} />
        <Input.Container className={styles.languageContainer}>
          <Input.Field
            className={styles.input}
            onChange={(e) =>
              setState({ ...state, language: e.currentTarget.value })
            }
            placeholder={initialState.language}
          />
          <Input.Icon
            className={styles.icon}
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="#1C2024"
                  strokeOpacity="0.92"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </Input.Container>
      </div>

      <div className={styles.links}>
        <Title text="Links" className={styles.title} />
        <Input.Field
          className={styles.link}
          onChange={(e) =>
            setState({
              ...state,
              socials: { ...state.socials, [0]: e.currentTarget.value },
            })
          }
          placeholder={initialState.socials[0]}
        />

        <Input.Field
          className={styles.link}
          onChange={(e) =>
            setState({
              ...state,
              socials: { ...state.socials, [1]: e.currentTarget.value },
            })
          }
          placeholder={initialState.socials[1]}
        />
        <Input.Field
          className={styles.input}
          onChange={(e) =>
            setState({
              ...state,
              socials: { ...state.socials, [2]: e.currentTarget.value },
            })
          }
          placeholder={initialState.socials[2]}
        />
      </div>

      <Button.ButtonElement
        type="button"
        className={styles.button}
        text="Save changes"
        onClick={() => {
          onChange(state);
        }}
      />
    </form>
  );
};
