import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import "../styles/Footer.css";

function Footer() {

    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://www.linkedin.com/in/valeriyaf/"><LinkedInIcon /></a> 
                <a href="https://github.com/ValFin96"><GitHubIcon /></a>
                <a href="mailto:valeriya.finogeeva@gmail.com"><EmailIcon /></a>
            </div>
            <p> 
                &copy; 2023 valfin.com.au
            </p>
        </div>
    );
}

export default Footer;