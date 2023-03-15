import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


//2nd class-will always have render method
class App extends React.Component {
  render(){
    return (
      <>
          <Header />
          <Main />
          <Footer />
      </>
    )
  }
}


//3rd export class--------
export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
