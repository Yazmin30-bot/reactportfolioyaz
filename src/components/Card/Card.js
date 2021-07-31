import React from "react";
/* import "../Card/Card.css"; */

function Card(props) {

    return(
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
        <div className="card mb-4 shadow-sm">
            <img style={{"maxHeight" : "200", "minHeight" : "150","width" : "225"}} className="card-img-top" src={props.src} alt={props.alt}/>
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.descr}</p>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="btn-group">
                        <a className="btn btn-sm btn-outline-secondary nav-item" data-toggle="collapse"
                        href={`#multiCollapse${props.alt}`} role="button" aria-expanded="false"
                        aria-controls={`multiCollapse${props.alt}`}>Build with</a>
                        <button type="button" className="btn btn-sm btn-outline-secondary nav-item"><a
                            href={props.link}
                            target="blank">Link</a></button>
                        <button type="button" className="btn btn-sm btn-outline-secondary nav-item"><a
                            href={props.git}
                            target="blank">GitHub</a></button>
                    </div>
                </div>
                <div className="collapse multi-collapse list-inline" id={`multiCollapse${props.alt}`}>
                    <br></br>
                    <ul className="list-inline">
                        {props.tools.map((tool,index) => {
                            return   <li key={index} className="list-inline-item"><small className="text-muted">{tool}</small></li>   
                        })}
                       
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Card;