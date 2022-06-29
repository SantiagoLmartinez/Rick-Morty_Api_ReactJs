import React from "react"

const CharacterComp = ({characters = []}) =>{
//  console.log(characters)
return(
    <div className="row">
            {characters.map((item, index)=>(
                <div key={index} className='col'>
                    <div className="card mb-3" style={{maxWidth:'200px'}}>
                        <img src={item.image} alt="" />
                        <div className="card-body">
                            <h4 className="card-title text-center">{item.name}</h4>
                            <hr />
                            <p>Status: {item.status}</p>
                            <p>Gender: {item.gender}</p>
                            <p>Species: {item.species}</p>
                        </div>
                    </div>
                </div>
            ))}

    </div>
)
}
export default CharacterComp