import { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";
import SectionResult from "./SectionResult";
import SectionSuccess from "./SectionSuccess";

const FormRegister = () => {

    const [step, setStep] = useState(7);
    const [data, setData] = useState({
        name: null,
        nik: null,
        loc: null,
        regional: null,
        isFirstTime: null,
        bandPost: null,
        division: null,
        unit: null,
        dirct: null,
        role: null,
        picName: null,
        picNik: null,
        picRole: null,
        address: null,
        email: null,
        waNumber: null,
        stream1: null,
        stream2: null,
        reason: null
    });

    const collect = newEntries => {
        for(let key in newEntries) {
            setData(prevData => ({ ...prevData, [key]: newEntries[key] }))
        }
    };

    const onForm1Next = result => (collect(result) || true) && setStep(2);
    const onForm2Prev = () => setStep(1);
    const onForm2Next = result => (collect(result) || true) && setStep(3);
    const onForm3Prev = () => setStep(2);
    const onForm3Next = result => (collect(result) || true) && setStep(4);
    const onForm4Prev = () => setStep(3);
    const onForm4Next = result => (collect(result) || true) && setStep(5);
    const onForm5Prev = () => setStep(4);
    const onForm5Next = result => (collect(result) || true) && setStep(6);
    const onResultPrev = () => setStep(5);
    const onResultNext = () => setStep(7);

    if(step === 2)
        return ( <Form2 data={ data } onPrev={ onForm2Prev } onNext={ onForm2Next } /> );
    if(step === 3)
        return ( <Form3 data={ data } onPrev={ onForm3Prev } onNext={ onForm3Next } /> );
    if(step === 4)
        return ( <Form4 data={ data } onPrev={ onForm4Prev } onNext={ onForm4Next } /> );
    if(step === 5)
        return ( <Form5 data={ data } onPrev={ onForm5Prev } onNext={ onForm5Next } /> );
    if(step === 6)
        return ( <SectionResult data={ data } onPrev={ onResultPrev } onNext={ onResultNext } /> );
    if(step === 7)
        return ( <SectionSuccess /> );
    return ( <Form1 data={ data } onNext={ onForm1Next } /> );

};

export default FormRegister;