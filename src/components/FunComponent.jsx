import { useState } from "react"

function FunComponent() {
    const [value, setValue] = useState(0);

    return (
        <div>
            Componenete funcional
            <p>
                <button onClick={() => setValue(value - 1) }>-</button> {value}
                <button onClick={() => setValue(value + 1)}>+</button>
            </p>
        </div>
    )
}

export default FunComponent
