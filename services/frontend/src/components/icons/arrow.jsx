import React from 'react';

const Arrow = ({ width = 20, rotate = 0 }) => (
    <svg
        id="svg1878"
        viewBox="0 0 36.514 27.777"
        version="1.0"
        width={width}
        style={{ transform: `rotateZ(${rotate}deg)` }}
    >
        <defs id="defs3">
            <linearGradient
                id="linearGradient7619"
                x1="-451.31"
                gradientUnits="userSpaceOnUse"
                y1="-228.7"
                gradientTransform="matrix(-1.6732 0 0 -1.1476 -296.47 -123.48)"
                x2="-434.34"
                y2="-246.58"
            >
                <stop id="stop11464" stopColor="#80ff26" offset="0" />
                <stop id="stop11466" stopColor="#2c9600" offset="1" />
            </linearGradient>
        </defs>
        <g id="layer1" transform="translate(-425.76 -136.01)">
            <path
                id="path10079"
                strokeLinejoin="round"
                style={{ color: '#000000' }}
                d="m440.51 162.91v-5.35h20.89v-15.29h-20.89v-5.38l-13.87 13.03 13.87 12.99z"
                stroke="#116b1c"
                strokeWidth="1.75"
                fill="url(#linearGradient7619)"
            />
        </g>
    </svg>
);

export default Arrow;
