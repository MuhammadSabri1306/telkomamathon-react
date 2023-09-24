import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SectionSuccess = () => {
    return (
        <section>
            <div className="px-5 pt-5 pb-4">
                <Image src="/img/telkomathon-logo.png" fluid alt="" />
            </div>
            <div className="p-3">
                <Row className="justify-content-center">
                    <Col xs="4" md="2" lg="4" className="ms-5">
                        <Image src="/img/icon-chat-green.svg" fluid alt="" />
                    </Col>
                </Row>
                <h1 className="text-center fw-bold">Congratulations!</h1>
                <p className="text-center text-black-50 fw-semibold">Your new password is set. Let’s try it now!</p>
            </div>
            <div className="d-grid">
                <Link to="/login" relative="path" className="btn btn-primary btn-lg">Back to Sign In page</Link>
            </div>
        </section>
    );
};

export default SectionSuccess;