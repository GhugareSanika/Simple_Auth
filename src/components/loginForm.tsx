const LoginForm = () =>{
    return (
        <form>
            <input type="text" name="username" required placeholder="username"/>
            <input type="password" name="password" required placeholder="password"/>
            <button>Login</button>
        </form>
    )
}

export default LoginForm