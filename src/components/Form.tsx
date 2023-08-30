import { useRef, SyntheticEvent } from "react";

const submit = (e: SyntheticEvent) =>{
  e.preventDefault();

  const target = e.target as typeof e.target &{
    email: { value: string };
    password: { value: string };
  }

  const email = target.email.value;
  const password = target.password.value;

  alert(`${email}, ${password}`);
  console.log(`${email}, ${password}`);
}

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form 
      ref={formRef}
      onSubmit={submit}
    >
      <div>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
      </div>
      <div>
        <input type="submit" value="Log in" />
      </div>
    </form>
  )
}

export default Form