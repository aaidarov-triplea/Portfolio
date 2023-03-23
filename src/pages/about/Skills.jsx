import './about.css'
function Skills () {
    return (
        <>
            <div className='skills__wrapper'>
                <p className='subtitle'>Abilities</p>
                <h1 className='titles'>My skills</h1>

                <div className="skills__items">
                    <div className="skills__info">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus sequi dicta ab ipsum, porro odio optio tempora labore quod pariatur voluptas consectetur. Eaque omnis amet itaque corporis culpa, sit nostrum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus sequi dicta ab ipsum, porro odio optio tempora labore quod pariatur voluptas consectetur. Eaque omnis amet itaque corporis culpa, sit nostrum.</p>
                    </div>
                    <div className="item">
                        <div>HTML</div>
                        <input type="range" value='100' disabled/>
                        <label htmlFor="">100%</label>
                        <div>CSS</div>
                        <input type="range" value='80' disabled/>
                        <label htmlFor="">80%</label>
                        <div>Javascript</div>
                        <input type="range" value='50' disabled/>
                        <label htmlFor="">50%</label>
                        <div>React JS</div>
                        <input type="range" value='50' disabled/>
                        <label htmlFor="">50%</label>
                        <div>Node JS</div>
                        <input type="range" value='30' disabled/>
                        <label htmlFor="">30%</label>
                        <div>Git & Github</div>
                        <input type="range" value='80' disabled/>
                        <label htmlFor="">80%</label>
                    </div>
                </div>       
            </div>
        </>
    )
}

export default Skills