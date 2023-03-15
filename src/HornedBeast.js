import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteCount: 0,
    }
  }

  handleFavorite = () => {
    this.setState({
      favoriteCount: this.state.favoriteCount + 1
    })
  }
  render() {
    return (
      // <article>
      //   <h3>{this.props.title}</h3>
      //   <p>{this.state.favoriteCount} ❤️ Favorites</p>
      //   <p>{this.props.horns} Horns</p>
      //   <img onClick= {this.handleFavorite} src={this.props.image_url} id={this.props._id} alt={this.props.keyword} title={this.props.title}></img>
      //   <p>{this.props.description}</p>
      // </article>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" onClick={this.handleFavorite} src={this.props.image_url} id={this.props._id} alt={this.props.keyword} title={this.props.title} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{this.props.horns} Horn(s)</ListGroup.Item>
          <ListGroup.Item>{this.state.favoriteCount} ❤️ Favorites</ListGroup.Item>
        </ListGroup>
        <Card.Body />
      </Card>

    )

  }
}

export default HornedBeast;