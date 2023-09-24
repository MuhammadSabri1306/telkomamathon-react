import { useFormValidation } from "../../helpers/form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ArrowLeftIcon from "@heroicons/react/24/solid/ArrowLeftIcon";
import { Link } from "react-router-dom";

const FormEmail = ({ onContinue }) => {

    const { validated, validateForm } = useFormValidation();

    const handleSubmit = event => {
        const { isValid } = validateForm(event);
        if(isValid)
            onContinue();
    };

    return (
        <Form noValidate validated={ validated } onSubmit={ handleSubmit }>
            <div className="px-5 pt-5 pb-4">
                <Image src="/img/telkomathon-logo.png" fluid alt="" />
            </div>
            <div className="px-3">
                <h1 className="text-center fw-bold">Forgot Password?</h1>
                <p className="text-center text-black-50 fw-semibold">No worries, we’ll send you reset instructions.</p>
            </div>
            <Form.Group className="form-required mb-4" controlId="inputEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" />
                <Form.Control.Feedback type="invalid">Email tidak valid</Form.Control.Feedback>
            </Form.Group>
            <div className="d-grid mb-4">
                <Button variant="primary" type="submit" size="lg">Reset Password</Button>
            </div>
            <p className="text-center">
                <ArrowLeftIcon className="text-with-svg-icon me-1" />
                <span className="me-1">Back to</span>
                <Link to="/login" relative="path" className="link-primary">Sign in</Link>
            </p>
        </Form>
    );
};

export default FormEmail;