import { useForm } from "../hooks/useForm";

export const FormApp = () => {
  const initialForm = {
    username: "joaquin",
    email: "joaquin@gmail.com",
    password: "12346",
  };

  const { formState, inputChange } = useForm(initialForm);
  const { username, email, password } = formState;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, email, password);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={username}
            onChange={inputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={inputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={inputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
