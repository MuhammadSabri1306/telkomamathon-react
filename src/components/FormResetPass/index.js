import { useState } from "react";
import FormEmail from "./FormEmail";
import FormVerify from "./FormVerify";
import FormNewPass from "./FormNewPass";
import SectionSuccess from "./SectionSuccess";

const FormResetPass = () => {
    const [step, setStep] = useState(1);
    
    if(step === 2)
        return ( <FormVerify onContinue={ () => setStep(3) } /> );

    if(step === 3)
        return ( <FormNewPass onContinue={ () => setStep(4) } /> );

    if(step === 4)
        return ( <SectionSuccess /> );

    return ( <FormEmail onContinue={ () => setStep(2) } /> );
};

export default FormResetPass;