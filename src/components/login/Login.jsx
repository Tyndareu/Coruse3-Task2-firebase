export const Login = () => {
  return (
        <div className="container-auth">
            <h2>Login</h2>

            <form>
                <input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                />
                <input
                    name="pass"
                    type="password"
                    placeholder="Password"
                />

                <div className="container-buttons">
                    <button type="submit">Log In</button>
                    <button type="button"> Google </button>
                </div>
            </form>
        </div>
  )
}

export const Register = () => {
  return (
          <div className="container-auth">
              <h2>Create an account</h2>

              <form>
                  <input
                      name="email"
                      type="email"
                      placeholder="E-mail"
                  />
                  <input
                      name="pass"
                      type="password"
                      placeholder="Password"
                  />
                  <div className="container-buttons">
                      <button type="submit">Sign up</button>
                  </div>
              </form>
          </div>
  )
}
