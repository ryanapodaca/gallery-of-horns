import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data/data.json';
import './Main.css';

class Main extends React.Component {
  render() {

    return (
      // <>
      //   <HornedBeast
      //    title= {'Fred'} 
      //    imageURL= {'fred.com'} description={'red'}></HornedBeast>
      //   <HornedBeast 
      //   title= {'Gus'} 
      //   imageURL= {'gus.com'} 
      //   description={'blue'}></HornedBeast>

      // </>
      <main>
        {data.map((beastObj, index) => {
          return <HornedBeast _id={beastObj._id} image_url={beastObj.image_url} title={beastObj.title} description={beastObj.description} keyword={beastObj.keyword} horns={beastObj.horns} key={index}/>
        })
        }
      </main>
    )
  }
}

export default Main;