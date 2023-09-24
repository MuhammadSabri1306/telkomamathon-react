import { useFormValidation } from "../../helpers/form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ArrowLeftIcon from "@heroicons/react/24/solid/ArrowLeftIcon";
import { Link } from "react-router-dom";
import { publicUrl } from "../../helpers/url";

const FormNewPass = ({ onContinue }) => {

    const { validated, validateForm } = useFormValidation();

    const handleSubmit = event => {
        const { isValid } = validateForm(event);
        if(isValid)
            onContinue();
    };

    return (
        <Form noValidate validated={ validated } onSubmit={ handleSubmit }>
            <div className="px-5 pt-5 pb-4">
                <Image src={ publicUrl("/img/telkomathon-logo.png") } fluid alt="" />
            </div>
            <div className="px-3">
                <h1 className="text-center fw-bold">Forgot Password?</h1>
                <p className="text-center text-black-50 fw-semibold">Set a new password for your account.</p>
            </div>
            <Form.Group className="form-required mb-4" controlId="inputPass1">
                <Form.Label>New Password</Form.Label>
                <Form.Control required type="password" placeholder="Enter your new password (at least 8 characters)" />
                <Form.Control.Feedback type="invalid">Password tidak dapat dikosongkan.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="form-required mb-4" controlId="inputPass12">
                <Form.Label>Re-enter New Password</Form.Label>
                <Form.Control required type="password" placeholder="Re-enter your new password" />
                <Form.Control.Feedback type="invalid">Password tidak dapat dikosongkan.</Form.Control.Feedback>
            </Form.Group>
            <div className="d-grid gap-2 mb-4">
                <Button variant="primary" type="submit" size="lg">Continue</Button>
            </div>
            <p className="text-center">
                <ArrowLeftIcon className="text-with-svg-icon me-1" />
                <span className="me-1">Back to</span>
                <Link to="/login" relative="path" className="link-primary">Sign in</Link>
            </p>
        </Form>
    );
};

export default FormNewPass;