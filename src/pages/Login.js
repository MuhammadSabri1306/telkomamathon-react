import Login1Layout from "../layouts/Login1Layout";
import FormLogin from "../components/FormLogin";

const Login = () => {
    return (
        <>
        <Login1Layout imgUrl={ process.env.PUBLIC_URL + "/img/bg-login.svg" } imgPostKey={ "bottom" }>
            <FormLogin />
        </Login1Layout>
        </>
    );
};

export default Login;