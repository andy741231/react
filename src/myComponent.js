import React from 'react';

const Card = ({name, email, id}) => {
  return ( 

    <div className="col-md-4 mt-5">
        <div className='card p-3 bg-success text-light grow shadow-5'>
          <div className=""><p>{name} | {email}</p></div>
            <div className="card-body bg-secondary text-dark">
              <p></p>
              <img alt="" src={`https://robohash.org/${id}?300x300`}></img>
            </div>
          </div>
    </div>

  );
}


export default Card;
