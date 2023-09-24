import Login1Layout from "../layouts/Login1Layout";
import FormRegister from "../components/FormRegister";

const Register = () => {
    return (
        <>
        <Login1Layout imgUrl={ process.env.PUBLIC_URL + "/img/bg-register.svg" }>
            <FormRegister />
        </Login1Layout>
        </>
    );
};

export default Register;