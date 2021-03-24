import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
        <footer id="ContactUS">
            <div className="boxx" id="">
             <div className="label">
                 <h3>Contact Us: </h3>
             </div>   
        <div className="phone">
        <i class="fas fa-phone-alt">
            Phone: 0213111-111-111
        </i>
     < br />
     <br />
     <i class="fas fa-mobile-alt">
         Mobile: +92 000-12345678
     </i>
        </div>
        <div className="social">
        <i class="fab fa-facebook-f">
        https://www.facebook.com/e-learing
        </i>
        <br />
        <br/>
        <i class="fab fa-instagram">
        https://www.instagram.com/e-leaarning/?igshid=1g81od8cx5uoa
        </i>
        </div>
        </div> 
        </footer> 
        </>
    )
}

export default Footer
