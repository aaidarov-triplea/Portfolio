import './about.css'
function Skills () {
    return (
        <>
            <div className='skills__wrapper'>
                <p className='subtitle'>Abilities</p>
                <h1 className='titles'>My skills</h1>

                <div className="skills__items">
                    <div className="item">
                        <div className='item__range'>HTML<label htmlFor="">100%</label></div>
                        <input type="range" value='100' disabled/>
                        <div className='item__range'>CSS<label htmlFor="">80%</label></div>
                        <input type="range" value='80' disabled/>
                        
                        <div className='item__range'>Javascript<label htmlFor="">50%</label></div>
                        <input type="range" value='50' disabled/>
                        
                        <div className='item__range'>React JS<label htmlFor="">50%</label></div>
                        <input type="range" value='50' disabled/>
                        
                        <div className='item__range'>Node JS<label htmlFor="">30%</label></div>
                        <input type="range" value='30' disabled/>
                        
                        <div className='item__range'>Git & Github<label htmlFor="">80%</label></div>
                        <input type="range" value='80' disabled/>
                        
                    </div>
                    <div className="skills__info">
                        <div className='item__range'>English<label htmlFor="">50%</label></div>
                        <input type="range" value='50' disabled/>
                        
                        <div className='item__range'>Russian<label htmlFor="">90%</label></div>
                        <input type="range" value='90' disabled/>
                        
                    </div>
                </div>       
            </div>
        </>
    )
}

export default Skills