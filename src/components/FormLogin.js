import { useState } from "react";
import { useFormValidation } from "../helpers/form";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { publicUrl } from "../helpers/url";

const FormHeaderDescription = ({ isError }) => {
    if(isError)
        return ( <p className="text-center text-danger fw-semibold">Wrong Username or Password!</p> );
    return ( <p className="text-center text-black-50 fw-semibold">Login to get unlimited access to data & information.</p> );
};

const FormLogin = () => {

    const [hasLogin, setHasLogin] = useState(false);
    const { validated, validateForm } = useFormValidation();

    const handleSubmit = event => {
        const { isValid } = validateForm(event);
        if(isValid)
            setHasLogin(true);
    };

    return (
        <Form noValidate validated={ validated } onSubmit={ handleSubmit }>
            <div className="px-5 pt-5 pb-4">
                <Image src={ publicUrl("/img/telkomathon-logo.png") } fluid alt="" />
            </div>
            <div className="px-3">
                <h1 className="text-center fw-bold">Login</h1>
                <FormHeaderDescription isError={ hasLogin } />
            </div>
            <Form.Group className="form-required mb-4" controlId="inputEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" />
                <Form.Control.Feedback type="invalid">Email tidak valid</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="form-required mb-4" controlId="inputPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Enter password" />
                <Form.Control.Feedback type="invalid">Password tidak dapat dikosongkan</Form.Control.Feedback>
            </Form.Group>
            <Row className="gap-4 mb-4">
                <Col xs="auto">
                    <Form.Check type="checkbox" id="cbRememberMe" label="Remember for 30 days" />
                </Col>
                <Col xs="auto" className="ms-auto">
                    <Link to="/reset-password" relative="path" className="link-primary link-underline-opacity-0">
                        Forgot password?
                    </Link>
                </Col>
            </Row>
            <div className="d-grid gap-2 mb-4">
                <Button variant="primary" type="submit" size="lg">Sign In</Button>
                <Button variant="light" className="bg-light shadow-sm btn-icon" aria-labelledby="btnGoogleText">
                    <img src={ publicUrl("/img/social-icon-google-colorful.svg") } alt="" />
                    <span id="btnGoogleText">Sign in with Google</span>
                </Button>
            </div>
            <div className="text-center">
                <span>Don't have an account? </span>
                <Link to="/register" relative="path" className="link-primary">Sign up</Link>
            </div>
        </Form>
    );
};

export default FormLogin;