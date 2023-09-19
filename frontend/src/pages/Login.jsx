import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });
  const { password, email } = formData;

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
          <FaSignInAlt></FaSignInAlt> Login
        </h1>
        <p>Login and start setting Goals</p>
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
            <button type="submit" className="btn btn-block">
              submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
