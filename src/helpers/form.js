import { useState } from "react";

export const preventFormSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
};

export const useFormValidation = (params = {}) => {
    if(params.prevent === undefined)
        params.prevent = true;

    const [validated, setValidated] = useState(false);
    const validateForm = (event) => {
        const form = event.currentTarget;
        let isValid = true;
        
        if(form.checkValidity() === false) {
            preventFormSubmit(event);
            isValid = false;
        } else if(params.prevent)
            preventFormSubmit(event);

        setValidated(true);
        return { form, event, isValid };
    };

    return { validated, validateForm };
};