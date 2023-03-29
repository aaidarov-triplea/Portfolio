import './style.css'
import img from './logo1.jpg'

function Portfolio () {
    return ( 
        <div className='container'>
            <div className='portfolio-wrapper'>
            <p className='portfolio-subtitle'>PORTFOLIO</p>
            <h1 className='portfolio-title'>CREATIVE WORKS</h1>
            <div className="actu-bloc">
                <div className="actu-content">
                    <div className="img-container">
                        <div className="cover-img">
                            Read more
                        </div>
                        <img src={img} alt=""/>
                    </div>
                    <div>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Accusamus aut exercitationem nobis alias, labore nam. 
                        Sequi, voluptas quam! Sint maxime cum reprehenderit...
                        </p>
                    </div>
                </div>
            </div> 

            <div className="actu-bloc">
                <div className="actu-content">
                    <div className="img-container">
                        <div className="cover-img">
                            Read more
                        </div>
                        <img src={img} alt=""/>
                    </div>
                    <div>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Accusamus aut exercitationem nobis alias, labore nam. 
                        Sequi, voluptas quam! Sint maxime cum reprehenderit...
                        </p>
                    </div>
                </div>
            </div>
            </div>         
        </div>
     );
}

export default Portfolio;