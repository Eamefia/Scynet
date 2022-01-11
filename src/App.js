import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import FrameOne from "./landingPage/FrameOne"
import './App.css';
import FrameFour from "./landingPage/FrameFour";
import FrameThree from "./landingPage/FrameThree";
import FrameTwo from "./landingPage/FrameTwo";
import FrameFive from "./landingPage/FrameFive";
import FrameSeven from "./landingPage/FrameSeven";
import FrameEight from "./landingPage/FrameEight";
import FrameSix from "./landingPage/FrameSix";
import FrameNine from "./landingPage/FrameNine";
import FrameTen from "./landingPage/FrameTen";
import FrameEleven from "./landingPage/FrameEleven";
import 'bootstrap/dist/css/bootstrap.min.css';
import Trial from "./landingPage/Trial";



function App() {
  return (
    <div className="app">
         <Router>
           <Switch>
               <Route path="/frametwo">
                 <FrameTwo />
              </Route>
              <Route path="/framethree">
                <FrameThree />
              </Route>
              <Route path="/framefour">
               <FrameFour />
              </Route>
              <Route path="/framesix">
               <FrameSix />
              </Route>
              <Route path="/frameseven">
               <FrameSeven />
              </Route>
              <Route path="/frameeight">
               <FrameEight />
              </Route>
              <Route path="/framenine">
               <FrameNine />
              </Route>
              <Route path="/framefive">
               <FrameFive />
              </Route>
              <Route path="/ten">
                 <FrameTen />
              </Route>
              <Route path="/eleven">
                 <FrameEleven />
              </Route>
              <Route path="/trial">
                <Trial />
             </Route>
              <Route path="/">
               <FrameOne />
              </Route>
           </Switch>
         </Router>
    </div>
  );
}

export default App;
