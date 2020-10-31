import React from 'react'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function GreyColors() {
    const [colorNames] = React.useState(["#99AAAB", "#2C3335", "#616C6F", "#DAE0E2", "#535C68", "#A4B0BD", "#333945", "#85847F", "#121211", "#CFCACA","#758AA2","#4C4B4B","#EAF0F1","#8C8787","#5E5E5E"]);

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

export default GreyColors;