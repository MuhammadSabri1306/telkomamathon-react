import Login1Layout from "../layouts/Login1Layout";
import FormRegister from "../components/FormRegister";
import { publicUrl } from "../helpers/url";

const Register = () => {
    return (
        <>
        <Login1Layout imgUrl={ publicUrl("/img/bg-register.svg") }>
            <FormRegister />
        </Login1Layout>
        </>
    );
};

export default Register;