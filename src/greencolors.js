import React from 'react'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function GreenColors() {
    const [colorNames] = React.useState(["#BADC57", "#6AB04A", "#26AE60", "#2ECC72", "#7CEC9F", "#43BE31", "#45CE30", "#10A881", "#1BCA9B", "#019031","#75DA8B","#A6EDAC","#20F732","#21DB30","#C7F2CA"]);

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

export default GreenColors;