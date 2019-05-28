import React from 'react';
var counter = 0

const soma = () => {
    counter = counter + 1
    console.log(counter)
}

function Leitura(props) {
    console.log(props)
    return (
        <div>
        <h1>Leitura imported!!</h1>
        <button onClick={soma}>{counter}</button>
        </div>
    )
}

export default Leitura