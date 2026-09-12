import { useState } from "react";
export default function BetterSignupForm() {
  const [formData, setFormData] = useState({ firstname: "", lastname: "" ,password:""});
  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const changedValue = evt.target.value;
    setFormData((oldFormData) => {
      return { ...oldFormData,[changedField]:changedValue};
    });
  };
  return (
    <div>
      <label htmlFor="firstname">Enter firstname</label>
      <input
        type="text"
        placeholder="firstname"
        value={formData.firstname}
        onChange={handleChange}
        id="firstname"
        name="firstname"
      />
      <label htmlFor="lastname">Enter a username</label>
      <input
        type="text"
        placeholder="lastname"
        value={formData.lastname}
        onChange={handleChange}
        id="username"
        name="lastname"
      />
      <label htmlFor="password">Enter a password</label>
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
        id="password"
        name="password"
      />
      <button>Submit</button>
    </div>
  );
}
