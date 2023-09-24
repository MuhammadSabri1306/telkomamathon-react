import Login1Layout from "../layouts/Login1Layout";
import FormLogin from "../components/FormLogin";
import { publicUrl } from "../helpers/url";

const Login = () => {
    return (
        <>
        <Login1Layout imgUrl={ publicUrl("/img/bg-login.svg") } imgPostKey={ "bottom" }>
            <FormLogin />
        </Login1Layout>
        </>
    );
};

export default Login;