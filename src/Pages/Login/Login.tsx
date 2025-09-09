import { LoginContainer, LoginForm, LoginImage } from "./LoginStyle";

const Login = () => {
    return (
        <LoginContainer>
            <LoginImage></LoginImage>
            <LoginForm>
                <h1>Login Page</h1>
                <div>
                    <label>UserName</label>
                    <input type="text" placeholder="Username" />
                    <label>Password</label>
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                </div>
            </LoginForm>
        </LoginContainer>
    )
}

export default Login;