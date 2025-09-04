import React from "react";
import { STRINGS } from "../../content/strings";

import "./my.css";
import "../../components/ui/Page";
import Nav from "../../components/ui/nav/Nav";
import "../../styles/phone.css";

const My = () => {

    return (
        <div className="PhoneCanvas">
            <div className="PhoneFrame MyScene">
                <div className="my-content">                
                
                </div>
                <Nav/>
            </div>
        </div>
    )
}

export default My;