import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import data from './data/data.json'
import SelectedBeast from './SelectedBeast'
import Form from 'react-bootstrap'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedData: data,
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
  //Form method

  handleSelectedHorns = (event) => {
    let selected = event.target.value;

    if (selected === '1 horn') {
      let newData = data.filter(obj => (obj.horns === 1))
      this.setState({
        sortedData: newData
      })
    } else if (selected === '2 horns') {
      let newData = data.filter(obj => (obj.horns === 2))
      this.setState({
        sortedData: newData
      })
    } else if (selected === '3 horns') {
      let newData = data.filter(obj => (obj.horns === 3))
      this.setState({
        sortedData: newData
      })
    } else if (selected === '100 horns') {
      let newData = data.filter(obj => (obj.horns === 100))
      this.setState({
        sortedData: newData
      })
    } else if (selected === 'all') {
      this.setState({
        sortedData: data
      })
    }
  }

  //render
  render() {
    return (
      <>
        <Header />
        <Form>
          <Form.Group>
            <Form.Select name='selected' onChange={this.handleSelectedHorns}>
              <option value='' >Select number of horns displayed</option>
              <option value='1 horn' >1 horn</option>
              <option value='2 horns' >2 horns</option>
              <option value='3 horns' >3 horns</option>
              <option value='100 horns' >100 horns</option>
              <option value='all' >All beasts</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Main
          handleRenderModal={this.handleRenderModal}
          data={this.state.sortedData}
        />
        <SelectedBeast
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          selectedBeastTitle={this.state.selectedBeastTitle}
          selectedBeastImage={this.state.selectedBeastImage}
          selectedBeastDescription={this.state.selectedBeastDescription}
        />
        <Footer />
      </>
    )
  }
}


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
