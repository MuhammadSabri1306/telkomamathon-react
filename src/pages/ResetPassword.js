import Login1Layout from "../layouts/Login1Layout";
import FormResetPass from "../components/FormResetPass";
import { publicUrl } from "../helpers/url";

const ResetPassword = () => {
    return (
        <>
        <Login1Layout imgUrl={ publicUrl("/img/bg-reset-pass.svg") }>
            <FormResetPass />
        </Login1Layout>
        </>
    );
};

export default ResetPassword;