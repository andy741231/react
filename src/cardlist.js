import React from "react";
import Card from './myComponent';



const Cardlist = ({ robots }) => {
  const cardloop = robots.map((user, i) => {
    return (
    <Card 
    key={robots[i].id} 
    id={robots[i].id} 
    name={robots[i].name} 
    email={robots[i].email} 
    />
    )
  });
  return (
    <div>
    <div className='row'>
      {cardloop}
    </div>
    <div className='mt-5'></div>
    </div>
  )
}


// const Cardlist = ({ robots }) => {

//   return (
//     <div className='container'>
//       <div className='row'>
//         {
//         robots.map((user, i) => {
//           return (
//           <Card 
//           key={robots[i].id} 
//           id={robots[i].id} 
//           name={robots[i].name} 
//           email={robots[i].email} 
//           />
//         );
//         })
//       }
//       </div>
//       <div className='mt-5'></div>
//     </div>
    
//   );
// }

export default Cardlist;