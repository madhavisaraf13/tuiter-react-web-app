// //import logo from './logo.svg';
//import React from "react";
// import './App.css';
// import Labs from "./labs";
// import HelloWorld from "./labs/a3/hello-world";
// import Tuiter from "./tuiter";

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
  
// // }
// // export default App;

// function App() {
//    return (
//       <div className="container">
//          <HelloWorld/>
//          <Labs/>
//          <Tuiter/>
//       </div>
//    );
// }
// export default App;

// // import Labs from "./labs";
// // import HelloWorld from "./labs/a3/hello-world";
// // import Tuiter from "./tuiter";
// import {HashRouter} from "react-router-dom";
// import {Routes, Route} from "react-router";

// function App() {
//    return (
//       <HashRouter>
//            <div className="container">
//           <Routes>
//             <Route path="/labs/*" element={<Labs/>}/>
//             <Route path="/hello" element={<HelloWorld/>}/>
//             <Route path="/tuiter/*" element={<Tuiter/>}/>
//           </Routes>
//            </div>
//       </HashRouter>
//    );
// }
// export default App;

import React from "react";
import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import {HashRouter, Route,Routes,Navigate} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="container">
        <Routes>
          <Route path="/"         element={<Navigate to="/labs/a3"/>}/>
          <Route path="/labs/*"   element={<Labs/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/tuiter/*" element={<Tuiter/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;