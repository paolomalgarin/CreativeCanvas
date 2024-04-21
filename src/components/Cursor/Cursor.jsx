import { useEffect, useState } from 'react';
import '../../.vars.css'
import './Cursor.css'


// ------------------------- FUNZIONE -------------------------
function Cursor() {

    const [color, setColor] = useState(0);
    const [cursorShadow, setCursorShadow] = useState(null);
    const [isToLightUp, setIsToLightUp] = useState(false);

    useEffect(() => {
        const cursor = document.querySelector('.CursorShadow');
        setCursorShadow(cursor);

        const positionElement = (e) => {
            const mouseY = e.clientY;
            const mouseX = e.clientX;

            cursor.style.transform = `translate3d(${mouseX - 240}px, ${mouseY - 240}px, 0)`;
        }

        const changeColor = () => {
            setColor(prevColor => {
                // console.log("Colore attuale = " + prevColor);
                cursor.style.background = `radial-gradient(circle, rgba(${90 - prevColor}, ${90 - prevColor}, 202, 1) 0%, rgba(57, 58, 67, 1) 100%)`;

                if (prevColor >= 40)
                    setIsToLightUp(true);
                if (prevColor <= 0)
                    setIsToLightUp(false);

                return prevColor + (isToLightUp ? -10 : 10); // Utilizza prevColor + (isToLightUp ? -1 : 1) invece di prevColor + 1
            });
        }

        window.addEventListener('mousemove', positionElement);
        window.addEventListener('click', changeColor);
        document.addEventListener('mouseenter', positionElement);

        return () => {
            window.removeEventListener('mousemove', positionElement);
            window.removeEventListener('click', changeColor);
            document.removeEventListener('mouseenter', positionElement);
        };
    }, [isToLightUp]); // Aggiungi isToLightUp come dipendenza

    return <div className="CursorShadow" />
}

export default Cursor;
