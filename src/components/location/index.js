import React from 'react';

const Location = () => {
    return(
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.932439865783!2d-122.66903098416968!3d45.53156507910176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a752d90af2bd%3A0xac4da428b0c0c9a7!2sModa+Center!5e0!3m2!1sen!2sus!4v1565901548381!5m2!1sen!2sus" 
                width="100%" 
                height="600px" 
                frameBorder="0" 
                allowfullscreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    )
}

export default Location;