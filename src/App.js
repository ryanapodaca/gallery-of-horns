import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import data from './data/data.json'


//2nd class-will always have render method
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      selectedBeastTitle: '',
      selectedBeastImage: '',
      selectedBeastDescription: ''

    }
  }

  //Modal Methods

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleRenderModal = (title, image, description) => {
    this.setState({
      showModal: true,
      selectedBeastTitle: title,
      selectedBeastImage: image,
      selectedBeastDescription: description
    })
  }
  
  render(){
    return (
      <>
          <Header />
          <Main handleRenderModal={this.handleRenderModal} data={data} />
          <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
            <Modal.Header closeButton>{this.state.selectedBeastTitle}</Modal.Header>
            <img src={this.state.selectedBeastImage}/>
            {this.state.selectedBeastDescription}
          </Modal>
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
