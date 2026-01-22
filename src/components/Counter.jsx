import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className=" text-primary text-center fw-bold fs-2 mb-3">Counter</h1>
            <div className="counter-area d-flex align-items-center justify-content-center gap-5">
                <button className="btn btn-primary decreament" disabled={count === 0} onClick={() => setCount(count - 1)}>-</button>
                <span className="text-primary">Your count is <strong>{count}</strong></span>
                <button className="btn btn-primary increament" onClick={() => setCount(count + 1)}>+</button>
            </div>
        </>
    )
}

export default Counter;