import "./Card.css"
function Card () {
    return(
        <>
        <div className="Card">
        
        <div className="App">
        <h3>IOS App</h3> <br />
        <p>Create, browse and <br />save palettes on the go</p>
        </div> 

        <div className="App">
        <h3>Andriod App</h3><br />
        <p>Thousands of palettes in  <br />your pocket </p>
        </div>

        <div className="App">
        <h3>Figma <br />Pluggin</h3><br />
        <p>All palettes right in your  <br />workspace</p>
        </div>

        <div className="App">
        <h3>Chrome <br />Extension</h3><br />
        <p>Get and edit a palette <br />every new tab</p>
        </div>

        <div className="App">
        <h3>Adobe <br />Extension</h3><br />
        <p>Use Coolors with your <br />favorite tools</p>
        </div>

        </div>

        <div className="used">
           <h3> Used by 5 + millions designers and by top companies</h3>
            </div>

       
        </>
    )
}

export default Card