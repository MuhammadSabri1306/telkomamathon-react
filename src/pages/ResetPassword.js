import Login1Layout from "../layouts/Login1Layout";
import FormResetPass from "../components/FormResetPass";

const ResetPassword = () => {
    return (
        <>
        <Login1Layout imgUrl={ process.env.PUBLIC_URL + "/img/bg-reset-pass.svg" }>
            <FormResetPass />
        </Login1Layout>
        </>
    );
};

export default ResetPassword;