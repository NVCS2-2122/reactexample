import React from 'react'

function PiggyBank({amount}) {
    return (
        <div style={{
            backgroundColor: "pink",
            fontSize: "300%",
            color: "grey"
        }}>
            ${amount}
        </div>
    )
}

export default PiggyBank
