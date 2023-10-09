import React from "react";

const Searchbox = () => {
    return (
        <div className="mt-5">
           <form class="row">
           
                <div class="col-auto ms-auto">
                    <input type="search" class="form-control" placeholder="Search"></input>
                </div>
                
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>

            </form>
        </div>
    )
}

export default Searchbox;