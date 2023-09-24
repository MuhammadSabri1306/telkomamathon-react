import { useState } from "react";
import { preventFormSubmit } from "../../helpers/form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { publicUrl } from "../../helpers/url";

const Form1 = ({ data, onNext }) => {

    const [result, setResult] = useState({
        name: data.name || "",
        nik: data.nik || "",
        loc: data.loc || "",
        regional: data.regional || "TREG-1",
        isFirstTime: data.isFirstTime !== false
    });

    const onNameChange = event => setResult({ ...result, name: event.target.value });
    const onNikChange = event => setResult({ ...result, nik: event.target.value });
    const onLocChange = event => setResult({ ...result, loc: event.target.value });
    const onRegionalChange = event => setResult({ ...result, regional: event.target.value });
    const onIsFirstTimeChange = event => setResult({ ...result, isFirstTime: event.target.value });

    const handleSubmit = event => (preventFormSubmit(event) || true) && onNext(result);

    return (
        <Form noValidate onSubmit={ handleSubmit }>
            <div className="px-5 pt-5 pb-4">
                <Image src={ publicUrl("/img/telkomathon-logo.png") } fluid alt="" />
            </div>
            <div className="px-3">
                <h1 className="text-center fw-bold">Registrasi</h1>
                <p className="text-center text-black-50 fw-semibold">Telkomathon Batch 5</p>
            </div>
            <Form.Group className="mb-4" controlId="inputName">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control type="text" defaultValue={result.name} onKeyUp={onNameChange} placeholder="Enter your answer here" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="inputNik">
                <Form.Label>NIK</Form.Label>
                <Form.Control type="text" defaultValue={result.nik} onKeyUp={onNikChange} placeholder="Enter your answer here" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="inputLoc">
                <Form.Label>Lokasi Kerja</Form.Label>
                <Form.Control type="text" defaultValue={result.loc} onKeyUp={onLocChange} placeholder="Enter your answer here" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="selectRegional">
                <Form.Label>Regional</Form.Label>
                <Form.Select defaultValue={result.regional} onChange={onRegionalChange} aria-labelledby="selectRegional">
                    <option value="TREG-1">TREG-1</option>
                    <option value="TREG-2">TREG-2</option>
                    <option value="TREG-3">TREG-3</option>
                    <option value="TREG-4">TREG-4</option>
                    <option value="TREG-5">TREG-5</option>
                    <option value="TREG-6">TREG-6</option>
                    <option value="TREG-7">TREG-7</option>
                </Form.Select>
            </Form.Group>
            <div className="mb-5">
                <Form.Label>Pernah jadi peserta Telkomathon Batch 1-4 ?</Form.Label>
                <Row className="gap-3">
                    <Col xs="auto">
                        <Form.Check type="radio" id="cbIsFirstTimeNo" onChange={onIsFirstTimeChange}
                            checked={!result.isFirstTime} value={false} label="Ya" />
                    </Col>
                    <Col xs="auto">
                        <Form.Check type="radio" id="cbIsFirstTimeYes" onChange={onIsFirstTimeChange}
                            checked={result.isFirstTime} value={true} label="Tidak" />
                    </Col>
                </Row>
            </div>
            <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit" className="btn-icon"
                    aria-labelledby="btnNextText">
                    <span>Selanjutnya</span>
                    <ArrowRightIcon />
                </Button>
            </div>
        </Form>
    );
};

export default Form1;