import { useMemo } from 'react';

const generateBoxShadow = (n: number) => {
    let value = `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`;
    for (let i = 2; i <= n; i++) {
        value += `, ${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`;
    }
    return value;
};

const StarBackground = () => {
    const shadowsSmall = useMemo(() => generateBoxShadow(700), []);
    const shadowsMedium = useMemo(() => generateBoxShadow(200), []);
    const shadowsBig = useMemo(() => generateBoxShadow(100), []);

    return (
        <div className="stars-wrapper">
            <div
                className="star-layer"
                style={{
                    boxShadow: shadowsSmall,
                    animationDuration: '50s',
                    width: '1px',
                    height: '1px',
                    opacity: 0.8
                }}
            />
            <div
                className="star-layer"
                style={{
                    boxShadow: shadowsMedium,
                    animationDuration: '100s',
                    width: '2px',
                    height: '2px',
                    opacity: 0.6
                }}
            />
            <div
                className="star-layer"
                style={{
                    boxShadow: shadowsBig,
                    animationDuration: '150s',
                    width: '3px',
                    height: '3px',
                    opacity: 0.4
                }}
            />
        </div>
    );
};

export default StarBackground;
