import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './form.css'
import ReusableButton from './ReuseableButton';

function MyForm() {
  const [inputs, setInputs] = useState({});
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <><div className="center">
<ReusableButton btnText="youText1"></ReusableButton>
          <hr></hr>
          <form onSubmit={handleSubmit}>
              <label>Enter your name:
                  <input
                      type="text"
                      name="username"
                      value={inputs.username || ""}
                      onChange={handleChange} />
              </label>
              <label>Enter your email:
                  <input
                      type="text"
                      name="age"
                      value={inputs.age || ""}
                      onChange={handleChange} />
              </label>
              <label>Enter your message:
                  <textarea
                      name="postContent"
                      defaultValue="I really enjoyed biking yesterday!"
                      rows={4}
                      cols={40} />
              </label>

              <input type="submit" />
          </form>
      </div></>
  )
}

export default MyForm;