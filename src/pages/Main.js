import React from 'react';
import Canvas from '../components/Canvas';

const draw = (ctx) => {
    ctx.fillRect(0, 0, 5, 5);
    ctx.fillRect(280, 190, 5, 5);
}

export default function Main() {
    return (
        <section id="main">
            <Canvas draw={draw} />
        </section>
    );
};