import './style.css'

function Contacts () {
    return ( 
        <div className='container'>
        <div className='contact-wrapper'>
            <div className='contact-inner'>
            <span>LOCATION</span>
            <h1 className='contact__title'>CONTACT ME</h1>
            </div>
            <form className="form">
                <div className="form-header-container">
                    <h1 className='form-header-title'>GET IN TOUCH</h1>
                    <p className='form-header-text'>Feedback</p>
                </div>
                <input type='text' placeholder="Your Name" />
                <input type='email' placeholder="Your E-mail" />
                <input type='text' placeholder="Your Phone" />
                <input type='text' placeholder="Subject" />
                <textarea cols='40' rows='1' placeholder="Message" />
                <button className="form__btn">Say hello</button>
            </form> 
            </div>        
        </div>
     );
}

export default Contacts;