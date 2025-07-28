import { useActionState } from "react";

function UseActionState() {
  const [state, action, pending] = useActionState(
    (state, formData) => {
      const formName = formData.get("name");
      const formEmail = formData.get("email");
      return {
        msg: formName + " +++ " + formEmail,
      };
    },
    {
      msg: "",
    }
  );
  return (
    <form className="grid gap-2 w-fit" action={action}>
      <div className="grid">
        <label htmlFor="name">name</label>
        <input type="text" id="name" name="name" disabled={pending} />
      </div>
      <div className="grid">
        <label htmlFor="email">email</label>
        <input type="email" id="email" name="email" disabled={pending} />
      </div>
      <div className="grid">
        <input type="submit" disabled={pending} />
        {state?.msg && <p>{state?.msg}</p>}
      </div>
    </form>
  );
}

export default UseActionState;
