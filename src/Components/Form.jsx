import { useState } from "react";
const Form = () => {
  let [users, setUsers] = useState([]);
  let [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    gender: "",
    city: "",
  });

  let handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setUsers([...users, formData]);
  };

  const showUsers = () => {
    console.log(users);
  };

  return (
    <>
      <div
        style={{
          boxShadow: "0 0 10px black",
          width: "300px",
          padding: "20px",
          margin: "20px auto",
        }}
      >
        <h2>Registration Form</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            name="username"
            placeholder="enter username..."
            onChange={(event) => {
              setFormData({
                ...formData,
                name: event.target.value,
              });
            }}
          />{" "}
          <br /> <br />
          <label htmlFor="email"> Email : </label>
          <input
            type="email"
            name="email"
            placeholder="enter email..."
            onChange={(event) => {
              setFormData({
                ...formData,
                email: event.target.value,
              });
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            placeholder="enter password..."
            onChange={(event) => {
              setFormData({
                ...formData,
                password: event.target.value,
              });
            }}
          />{" "}
          <br />
          <br />
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(event) => {
              setFormData({
                ...formData,
                gender: event.target.value,
              });
            }}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(event) => {
              setFormData({
                ...formData,
                gender: event.target.value,
              });
            }}
          />{" "}
          Female <br />
          <br />
          <select
            onChange={(event) => {
              setFormData({
                ...formData,
                city: event.target.value,
              });
            }}
          >
            <option value="">Select City</option>
            <option value="New Delhi">New Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Bihar">Bihar</option>
          </select>{" "}
          <br />
          <br />
          <button>Register</button> &nbsp; &nbsp;
          <button onClick={showUsers}>Show Users</button>
          <h2>
            {users.length > 0 && (
              <ol>
                {users.map((ele) => {
                  return <li>{ele.name} </li>;
                })}
              </ol>
            )}
          </h2>
        </form>
      </div>
    </>
  );
};
export default Form;
