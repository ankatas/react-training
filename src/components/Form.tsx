import { useState } from "react";

// todo: type FormProps
type FormProps = {
  onSubmit: (values: FormState) => void;
};

// todo: type FormState
type FormState = {
  name: string;
  email: string;
  phone: string;
};

function Form({ onSubmit }: FormProps) {
  // todo: useState()
  const [state, setState] = useState<FormState>({
    email: "",
    name: "",
    phone: "",
  });

  // todo: handleSubmit()

  // todo: update()
  function update(fieldName: keyof FormState, value: string) {
    setState({
      ...state,
      [fieldName]: value,
    });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(state);
      }}
    >
      <input
        value={state.email}
        onChange={(event) => {
          const value = event.currentTarget.value;

          setState({
            ...state,
            email: value,
          });
        }}
      />
      <input
        name="name"
        value={state.name}
        onChange={(e) => update("name", e.currentTarget.value)}
      />
      <input
        name="phone"
        value={state.phone}
        onChange={(e) => update("phone", e.currentTarget.value)}
      />
      <button>Submit</button>
    </form>
  );
}

export default Form;
