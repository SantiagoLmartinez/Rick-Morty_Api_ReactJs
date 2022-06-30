import React from "react"

const CharacterComp = ({characters = []}) =>{
//  console.log(characters)
return(
    <div className="row">
            {characters.map((item, index)=>(
                <div key={index} className='col-12 col-sm-6 col-md-3 col-xl-2'>
                    <div className="card mb-3 " >
                    {/* <div className="card mb-3 mx-auto" style={{maxWidth:'200px'}}> */}
                        <img src={item.image} alt="" />
                        <div className="card-body">
                            <h4 className="card-title text-center">{item.name}</h4>
                            <hr />
                            {/* <p>Status: {item.status}</p> */}
                            <p className="card-text">Gender: {item.gender}</p>
                            <p className="card-text">Species: {item.species}</p>
                        </div>
                    </div>
                </div>
            ))}

    </div>
)
}
export default CharacterComp