import React, { useEffect, useRef } from 'react';

const Canvas = props => {
    const { draw, ...rest } = props;
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        draw(context);
    }, [draw]);

    return <canvas width="500px" height="500px" ref={canvasRef} {...rest}/>
}

export default Canvas;