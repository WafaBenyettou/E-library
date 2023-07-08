import React, { useEffect, useRef } from 'react';

function Background({ timeout = 50 }) {
    const canvas = useRef();

    useEffect(() => {
        const context = canvas.current.getContext('2d');

        const width = document.body.offsetWidth;
        const height = document.body.offsetHeight;
        canvas.current.width = width;
        canvas.current.height = height;

        context.fillStyle = '#000';
        context.fillRect(0, 0, width, height);

        const columns = Math.floor(width / 20) + 1;
        const yPositions = Array.from({ length: columns }).fill(0);

        context.fillStyle = '#100';
        context.fillRect(0, 0, width, height);

        const matrixEffect = () => {
           context.fillStyle = 'rgba(255, 255, 255, 0.05)';
            context.fillRect(0, 0, width, height);

            context.fillStyle = 'rgba(0, 3, 143, 0.22)';
            context.font = '15pt monospace';

            yPositions.forEach((y, index) => {
                const text = String.fromCharCode(Math.random() * 128);
                const x = index * 20;
                context.fillText(text, x, y);

                if (y > 100 + Math.random() * 10000) {
                    yPositions[index] = 0;
                } else {
                    yPositions[index] = y + 20;
                }
            });
        };

        const interval = setInterval(matrixEffect, timeout);
        return () => {
            clearInterval(interval);
        };
    }, [canvas, timeout]);

    return (
        <div
            style={{
                background: 'white',
                overflow: 'hidden',
                position: 'fixed',
                height: '100%',
                width: '100%',
                zIndex: -1,
                left: '0',
                top: '0',
            }}
        >
            <canvas
                ref={canvas}
            />
        </div>
    );
}

export default Background;