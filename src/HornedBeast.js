import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteCount: 0
    }
  }

  handleImageClick = () => {
    this.props.handleRenderModal(this.props.title, this.props.image_url, this.props.description);
  }

  handleFavorite = () => {
    this.setState({
      favoriteCount: this.state.favoriteCount + 1
    })
  }
  render() {
    return (

      <Card style={{ width: '18rem' }}>
        <Card.Img onClick={this.handleImageClick} variant="top" src={this.props.image_url} id={this.props._id} alt={this.props.keyword} title={this.props.title} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
          <Card.Text>
            {this.props.horns} horns
          </Card.Text>
          <Card.Text>
          {this.state.favoriteCount}  ❤️ Votes ❤️
          </Card.Text>
          <Button variant="primary" onClick={this.handleFavorite}>❤️ Love Me ❤️ </Button>
        </Card.Body>
      </Card>
    )
  }
}

export default HornedBeast;