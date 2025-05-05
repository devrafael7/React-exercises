import { useState } from "react";

const DefaultBtn = ()=>{
    const [message, setMessage] = useState<string>("You good?");

    return (
        <>
            <h1 className="">
                {message}
            </h1>
            <button onClick={() => setMessage("You've clicked it!")}>
                Click On Me!
            </button>
        </>
    );
};

export default DefaultBtn;