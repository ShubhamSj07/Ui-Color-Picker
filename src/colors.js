import React from 'react'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function Colors() {
    const [colorNames] = React.useState(["#EEC213", "#F5C469", "#F4C724", "#F0DF87", "#F3B63A", "#FAD02E", "#FBD28B", "#FAD02E", "#FFF222", "#F3CC79","#F5CE93","#FF9900","#FCA31C","#F0E74A","#FFCD03"]);

    const copyColor = (e) => {
        let color = e.target.innerText;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(color);
            navigator.clipboard.readText();
            toast.success(`You have Copied ${color} Value Sucessfully!`);
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

export default Colors;