import "./Login1Layout.css";

const Login1Layout = ({ imgUrl, imgPostKey, children }) => {

    if(!imgPostKey)
        imgPostKey = "center";
    const imgPostClassName = {
        center: "bg-img-center",
        top: "bg-img-top",
        bottom: "bg-img-bottom",
        left: "bg-img-left",
        right: "bg-img-right",
    };

    const bgImgClassName = imgPostClassName[imgPostKey] || imgPostClassName.center;
    const bgImgStyles = { backgroundImage: `url('${ imgUrl }')` };

    return (
        <main className="layout layout-login-1">
            <div className={ "bg-img " + bgImgClassName } style={ bgImgStyles }>&nbsp;</div>
            <div className="form-container">
                <div className="form-card bg-white border">
                    { children }
                </div>
            </div>
        </main>
    );

};

export default Login1Layout;