// needed for createElement
import React from "react";

export const Hallo = () => {
    return (
        <div id="container">
            <h1>Hello Codevolution</h1>
        </div>
    );
}

export const HalloWithoutJSX = () => {
    return React.createElement( // 3 parametra
        'div',
        { id: 'container' },
        React.createElement('h1', null, 'Hello Codevolution')
    );
}