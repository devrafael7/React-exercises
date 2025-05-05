import { useState } from "react";

const CountBtn = ()=> {
    const [counter, setCount] = useState<number>(0);

    return (
        <>
            <h1>{counter}</h1>
            <button className="bg-blue-500" type="button" onClick={() => setCount(counter + 1)}>
                Click to increase
            </button>
        </>
    );
}

export default CountBtn;