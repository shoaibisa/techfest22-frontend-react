
import React from "react"

import './Footer.css'


const Footer = () => {
        return (
                <>
                        <div className="footer">
                                <div className="social-icons">
                                        <a href="https://www.facebook.com/techfestsliet/" target="_blank" rel="noopener
            noreferrer"><i className="fa fa-facebook-square fa-2x"> </i></a>
                                        <a href="https://twitter.com/techfestsliet" target="_blank" rel="noopener
            noreferrer"><i className="fa fa-twitter-square fa-2x"></i></a>
                                        <a href="https://instagram.com/techfestsliet_" target="_blank" rel="noopener
            noreferrer"><i className="fa fa-instagram fa-2x"></i></a>
                                        <a href="https://www.linkedin.com/company/techfest-sliet" target="_blank" rel="noopener
            noreferrer"><i className="fa fa-linkedin-square fa-2x"></i></a>
                                        <a href="https://www.youtube.com/channel/UCTSrKfF90hZq7reWgd2oyZg" target="_blank" rel="noopener
            noreferrer"><i className="fa fa-youtube-play fa-2x"></i></a>
                                </div>
                                <div className="rotate-translate"> </div>
                                <div className="translate-rotate"></div>
                        </div>
                </>
        );
}

export default Footer;