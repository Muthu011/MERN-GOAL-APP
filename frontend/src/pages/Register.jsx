import { useState } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    password2: "",
    email: "",
  });
  const { name, password, password2, email } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // set
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // set
  };

  return (
    <div>
      <section className="heading">
        <h1>
          <FaUser></FaUser> Register
        </h1>
        <p>please create a account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={email}
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={name}
              id="name"
              name="name"
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              value={password}
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              value={password2}
              id="password2"
              name="password2"
              placeholder="Confirm your password"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Register;
