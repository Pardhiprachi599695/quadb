import React from "react"
import Home from "./Home"
import { BrowserRouter as Router,Route,Switch } from "react-router-dom"
import Summ from "./Summ"

const App =()=>{
  
  return(
    <Router >
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/summary/:showname" component={Summ}/>
          

        </Switch>

    </Router>

      
      
    
  )
}
export default App