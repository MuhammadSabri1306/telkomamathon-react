import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

const SectionSuccess = () => {
    return (
        <section>
            <div className="px-5 pt-5 pb-4">
                <Image src="/img/telkomathon-logo.png" fluid alt="" />
            </div>
            <div className="p-3">
                <h4 className="mt-5 text-center fw-bold">Selamat!</h4>
                <p className="text-center text-black-50 fw-semibold">Pendaftaran Anda berhasil!<br/>Tunggu informasi selanjutnya ya.</p>
            </div>
            <div className="d-grid">
                <Link to="/" relative="path" className="btn btn-primary btn-lg">Kembali ke Halaman Utama</Link>
            </div>
        </section>
    );
};

export default SectionSuccess;