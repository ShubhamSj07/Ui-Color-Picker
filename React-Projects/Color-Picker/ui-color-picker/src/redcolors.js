import React from 'react'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function RedColors() {
    const [colorNames] = React.useState(["#E44236", "#FF3E4D", "#FF3031", "#D63031", "#EC4849", "#FF362E", "#E8290B", "#EB726A", "#FFACA6", "#F51C0C","#FCC6C2","#F08D86","#F79B94","#F25449","#FF1100"]);

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

export default RedColors;