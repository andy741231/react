import React from "react";

const Searchbox = ({schange}) => {
    return (
        <div className="mt-5">
           <form className="row">
           
                <div className="col-auto ms-auto">
                    <input type="search" className="form-control" placeholder="Search" onChange={schange}></input>
                </div>
                
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

            </form>
        </div>
    )
}

/*
STATE
PROPS - Pure Components
Class extends render()
constructor()
this
super()
onchange

*/
export default Searchbox;