import React from 'react'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function BlueColors() {
    const [colorNames] = React.useState(["#3498DB", "#2475B0", "#4834DF", "#4BCFFA", "#3C40C6", "#25CCF7", "#487EB0", "#192A56", "#30336B", "#0ABDE3","#6571B6","#B4BDF0","#0F1A59","#38427A","#0529F7"]);

    const copyColor = (e) => {
        let color = e.target.innerText;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(color);
            navigator.clipboard.readText();
            toast.success(`You have copied ${color} value sucessfully!`);
        }

    };


    return (
        <div className="row">
            {colorNames.map(color => (

                <div className="item" key={color} style={{ background: color }} onClick={copyColor}>
                    <div>{color}</div>
                </div>
            ))}
        </div>
    );
}

export default BlueColors;