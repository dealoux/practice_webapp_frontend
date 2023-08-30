import { useReducer } from 'react'

const CheckBox = () => {
  const [checked, setChecked] = useReducer((checked) => !checked, false);

  return (
    <div>
      <input
        type = "checkbox"
        value={Number(checked)}
        onChange={setChecked} 
      />
      <label>
        {checked ? "checked" : "not checked"}
      </label>
    </div>
  )
}

export default CheckBox