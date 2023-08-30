import { useRef, SyntheticEvent } from "react";

const submit = (e: SyntheticEvent) =>{
  e.preventDefault();
  const target = e.target as typeof e.target &{
    title: { value: string };
    colour: { value: string };
  }
  const title = target.title.value;
  const colour = target.colour.value;
  alert(`${title}, ${colour}`);
}

const Form = () => {
  const formRef = useRef<null>(null);

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