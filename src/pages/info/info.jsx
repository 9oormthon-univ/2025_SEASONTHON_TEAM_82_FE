import React from "react";
import { STRINGS } from "../../content/strings";

import "./info.css";
import "../../components/ui/Page";
import Nav from "../../components/ui/nav/Nav";
import "../../styles/phone.css";

const Info = () => {

    return (
        <div className="PhoneCanvas">
            <div className="PhoneFrame InfoScrene">
                <div className="info-content">                
                
                </div>
                <Nav/>
            </div>
        </div>
    )
}

export default Info;