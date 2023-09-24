import { useState } from "react";
import { preventFormSubmit } from "../../helpers/form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ArrowLeftIcon from "@heroicons/react/24/solid/ArrowLeftIcon";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Form2 = ({ data, onPrev, onNext }) => {

    const [result, setResult] = useState({
        bandPost: data.bandPost || "",
        division: data.division || "",
        unit: data.unit || "",
        dirct: data.dirct || "",
        role: data.role || ""
    });

    const onBandPostChange = event => setResult({ ...result, bandPost: event.target.value });
    const onDivisionChange = event => setResult({ ...result, division: event.target.value });
    const onUnitChange = event => setResult({ ...result, unit: event.target.value });
    const onDirctChange = event => setResult({ ...result, dirct: event.target.value });
    const onRoleChange = event => setResult({ ...result, role: event.target.value });

    const handleSubmit = event => (preventFormSubmit(event) || true) && onNext(result);

    return (
        <Form noValidate onSubmit={ handleSubmit }>
            <div className="px-5 pt-5 pb-4">
                <Image src="/img/telkomathon-logo.png" fluid alt="" />
            </div>
            <div className="px-3">
                <h1 className="text-center fw-bold">Registrasi</h1>
                <p className="text-center text-black-50 fw-semibold">Telkomathon Batch 5</p>
            </div>
            <Form.Group className="mb-4" controlId="inputBandPost">
                <Form.Label>Band Position</Form.Label>
                <Form.Control type="text" defaultValue={data.bandPost} onKeyUp={onBandPostChange} placeholder="Enter your answer here" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="inputDivision">
                <Form.Label>Divisi</Form.Label>
                <Form.Control type="text" defaultValue={data.division} onKeyUp={onDivisionChange} placeholder="Enter your answer here" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="inputUnit">
                <Form.Label>Unit</Form.Label>
                <Form.Control type="text" defaultValue={data.unit} onKeyUp={onUnitChange} placeholder="Enter your answer here" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="inputDirct">
                <Form.Label>Direktorat</Form.Label>
                <Form.Control type="text" defaultValue={data.dirct} onKeyUp={onDirctChange} placeholder="Enter your answer here" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="inputRole">
                <Form.Label>Jabatan / Role</Form.Label>
                <Form.Control type="text" defaultValue={data.role} onKeyUp={onRoleChange} placeholder="Enter your answer here" />
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

export default Form2;