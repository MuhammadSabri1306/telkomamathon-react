import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ArrowLeftIcon from "@heroicons/react/24/solid/ArrowLeftIcon";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SectionResult = ({ data, onPrev, onNext }) => {

    return (
        <section>
            <div className="px-5 pt-5 pb-4">
                <Image src="/img/telkomathon-logo.png" fluid alt="" />
            </div>
            <div className="px-3">
                <h1 className="text-center fw-bold">Registrasi</h1>
                <p className="text-center text-black-50 fw-semibold">Telkomathon Batch 5</p>
            </div>
            <Table striped responsive>
                <tr>
                    <td>Nama Lengkap</td>
                    <td>:</td>
                    <td>{ data.name }</td>
                </tr>
                <tr>
                    <td>NIK</td>
                    <td>:</td>
                    <td>{ data.nik }</td>
                </tr>
                <tr>
                    <td>Lokasi Kerja</td>
                    <td>:</td>
                    <td>{ data.loc }</td>
                </tr>
                <tr>
                    <td>Regional</td>
                    <td>:</td>
                    <td>{ data.regional }</td>
                </tr>
                <tr>
                    <td>Peserta Athon 1-4</td>
                    <td>:</td>
                    <td>{ data.isFirstTime ? "Tidak" : "Ya" }</td>
                </tr>
                <tr>
                    <td>Nama Atasan</td>
                    <td>:</td>
                    <td>{ data.picName }</td>
                </tr>
                <tr>
                    <td>NIK Atasan</td>
                    <td>:</td>
                    <td>{ data.picNik }</td>
                </tr>
                <tr>
                    <td>Jabatan Atasan</td>
                    <td>:</td>
                    <td>{ data.picRole }</td>
                </tr>
                <tr>
                    <td>Alamat</td>
                    <td>:</td>
                    <td>{ data.address }</td>
                </tr>
                <tr>
                    <td>No WhatsApp</td>
                    <td>:</td>
                    <td>{ data.waNumber }</td>
                </tr>
                <tr>
                    <td>Stream 1</td>
                    <td>:</td>
                    <td>{ data.stream1 }</td>
                </tr>
                <tr>
                    <td>Stream 2</td>
                    <td>:</td>
                    <td>{ data.stream2 }</td>
                </tr>
                <tr>
                    <td colSpan="3">Alasan ikut Batch 5 :<br/>{ data.reason }</td>
                </tr>
            </Table>
            <Row className="gap-3">
                <Col xs="auto">
                    <Button variant="primary" type="button" className="btn-icon"
                        aria-labelledby="btnPrevText" onClick={onPrev}>
                        <ArrowLeftIcon />
                        <span id="btnPrevText">Kembali</span>
                    </Button>
                </Col>
                <Col xs="auto" className="ms-auto">
                    <Button variant="primary" type="button" className="btn-icon"
                        aria-labelledby="btnNextText" onClick={onNext}>
                        <span id="btnNextText">Selanjutnya</span>
                        <ArrowRightIcon />
                    </Button>
                </Col>
            </Row>
        </section>
    );
};

export default SectionResult;