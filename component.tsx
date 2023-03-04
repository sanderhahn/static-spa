import React from 'react';
import { replacer, Reviver } from 'json-utils';

console.log(JSON.stringify({
    a: 1n,
}, replacer));

const r = Reviver({});

export default function Component() {
    return <div>Component</div>;
}
