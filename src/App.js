import React from "react";

import Cardlist from './cardlist';
import { robots } from './robot';
import Searchbox from "./Searchbox";


const App = () => {
    return (
      <div className="container">
        <h1 className="text-center text-uppercase">Robot App</h1>
        <Searchbox />
        <Cardlist robots={robots} />
      </div>
    )
}


export default App;