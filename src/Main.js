import React from 'react';
import HornedBeast from './HornedBeast';
// import data from './data/data.json';
import './Main.css';

class Main extends React.Component {
  render() {

    return (
      <main>
        {this.props.data.map((beastObj, index) => {
          return (
            <HornedBeast
              handleRenderModal={this.props.handleRenderModal}
              _id={beastObj._id}
              image_url={beastObj.image_url}
              title={beastObj.title}
              description={beastObj.description} keyword={beastObj.keyword}
              horns={beastObj.horns}
              key={index}
            />
          )
        })}
      </main>
    )
  }
}

export default Main;