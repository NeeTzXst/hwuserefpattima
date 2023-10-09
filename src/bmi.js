import React, { useRef, useState } from 'react';

const BmiText = ({ bmi }) => {
    if (bmi < 18.5) return <h1>UnderWeight</h1>;
    if (bmi > 30) return <h1>OverWeight</h1>;
    return <h1>Normal</h1>;
};

function Bmi() {
    const w_inputRef = useRef(null);
    const h_inputRef = useRef(null);
    const [Bmi, setBmi] = useState(0);

    const calBmi = () => {
        let w = w_inputRef.current.value;
        let h = h_inputRef.current.value / 100;
        setBmi(w / Math.pow(h, 2));
    };

    return (
        <>
            <div>
            <h1>BMI Calculator</h1>
            Weight: <input
                type="text"
                ref={w_inputRef}
            /> kg.
            </div>
            <br />
            <div>
            Height: <input
                type="text"
                ref={h_inputRef}
            /> cm.
            </div>
            <br />
            <div>
            <button onClick={() => calBmi()}>Calculate!</button>
            </div>
            <div>
            <h4>
            Bmi value: {Bmi.toFixed(2)}
            <BmiText bmi={Bmi} />
            </h4>
            </div>
        </>
    );
}

export default Bmi;
