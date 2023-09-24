import { useState } from "react";
import { preventFormSubmit } from "../../helpers/form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ArrowLeftIcon from "@heroicons/react/24/solid/ArrowLeftIcon";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { publicUrl } from "../../helpers/url";

const Form3 = ({ data, onPrev, onNext }) => {

    const [result, setResult] = useState({
        picName: data.picName || "",
        picNik: data.picNik || "",
        picRole: data.picRole || ""
    });

    const onPicNameChange = event => setResult({ ...result, picName: event.target.value });
    const onPicNikChange = event => setResult({ ...result, picNik: event.target.value });
    const onPicRoleChange = event => setResult({ ...result, picRole: event.target.value });

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
            <Form.Group className="mb-4" controlId="inputBandPost">
                <Form.Label>Nama Atasan</Form.Label>
                <Form.Control type="text" defaultValue={result.picName} onKeyUp={onPicNameChange} placeholder="Enter your answer here" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="inputDivision">
                <Form.Label>NIK Atasan</Form.Label>
                <Form.Control type="text" defaultValue={result.picNik} onKeyUp={onPicNikChange} placeholder="Enter your answer here" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="inputUnit">
                <Form.Label>Jabatan Atasan</Form.Label>
                <Form.Control type="text" defaultValue={result.picRole} onKeyUp={onPicRoleChange} placeholder="Enter your answer here" />
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

export default Form3;