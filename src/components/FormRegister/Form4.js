import { useState } from "react";
import { useFormValidation } from "../../helpers/form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ArrowLeftIcon from "@heroicons/react/24/solid/ArrowLeftIcon";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";

const Form4 = ({ data, onPrev, onNext }) => {

    const [result, setResult] = useState({
        address: data.address || "",
        email: data.email || "",
        waNumber: data.waNumber || "",
        stream1: data.stream1 || "UIUX/PM",
        stream2: data.stream2 || "Front End"
    });

    const onAddressChange = event => setResult({ ...result, address: event.target.value });
    const onEmailChange = event => setResult({ ...result, email: event.target.value });
    const onWaNumberChange = event => setResult({ ...result, waNumber: `+62${ event.target.value }` });
    const onStream1Change = event => setResult({ ...result, stream1: event.target.value });
    const onStream2Change = event => setResult({ ...result, stream2: event.target.value });

    const { validated, validateForm } = useFormValidation();
    const handleSubmit = event => {
        const { isValid } = validateForm(event);
        if(isValid)
            onNext(result);
    };

    return (
        <Form noValidate validated={ validated } onSubmit={ handleSubmit }>
            <div className="px-5 pt-5 pb-4">
                <Image src="/img/telkomathon-logo.png" fluid alt="" />
            </div>
            <div className="px-3">
                <h1 className="text-center fw-bold">Registrasi</h1>
                <p className="text-center text-black-50 fw-semibold">Telkomathon Batch 5</p>
            </div>
            <Form.Group className="mb-4" controlId="txtAddress">
                <Form.Label>Alamat</Form.Label>
                <Form.Control as="textarea" rows="4" defaultValue={result.address} onKeyUp={onAddressChange} placeholder="Enter your answer here" />
            </Form.Group>
            <Form.Group className="form-required mb-4" controlId="inputEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" defaultValue={result.email} onKeyUp={onEmailChange} placeholder="Enter your answer here" />
                <Form.Control.Feedback type="invalid">Email tidak valid</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4" controlId="inputWaNumber">
                <Form.Label>No WhatsApp</Form.Label>
                <InputGroup hasValidation className="mb-4">
                    <InputGroup.Text id="inputWaNumberAddon">+62</InputGroup.Text>
                    <Form.Control type="tel" defaultValue={result.waNumber} onKeyUp={onWaNumberChange} placeholder="Enter your answer here"
                        aria-describedby="inputWaNumberAddon" />
                    <Form.Control.Feedback type="invalid">Email tidak valid</Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            <Form.Group className="mb-4" controlId="selectStream1">
                <Form.Label>Pilihan Stream 1</Form.Label>
                <Form.Select defaultValue={result.stream1} onChange={onStream1Change} aria-labelledby="selectStream1">
                    <option value="UIUX/PM">UIUX/PM</option>
                    <option value="Front End">Front End</option>
                    <option value="Opsi 3">Opsi 3</option>
                    <option value="Opsi 4">Opsi 4</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-5" controlId="selectStream2">
                <Form.Label>Pilihan Stream 1</Form.Label>
                <Form.Select defaultValue={result.stream2} onChange={onStream2Change} aria-labelledby="selectStream2">
                    <option value="UIUX/PM">UIUX/PM</option>
                    <option value="Front End">Front End</option>
                    <option value="Opsi 3">Opsi 3</option>
                    <option value="Opsi 4">Opsi 4</option>
                </Form.Select>
            </Form.Group>
            <Row className="gap-3">
                <Col xs="auto">
                    <Button variant="primary" type="button" className="btn-icon"
                        aria-labelledby="btnPrevText" onClick={onPrev}>
                        <ArrowLeftIcon />
                        <span id="btnPrevText">Kembali</span>
                    </Button>
                </Col>
                <Col xs="auto" className="ms-auto">
                    <Button variant="primary" type="submit" className="btn-icon"
                        aria-labelledby="btnNextText">
                        <span id="btnNextText">Selanjutnya</span>
                        <ArrowRightIcon />
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default Form4;