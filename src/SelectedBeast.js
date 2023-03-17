import React from 'react'
import Modal from 'react-bootstrap/Modal'

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
         <Modal
          show={this.props.showModal}
          onHide={this.props.handleCloseModal}>
          <Modal.Header
            closeButton>{this.props.selectedBeastTitle}
          </Modal.Header>
          <img src={this.props.selectedBeastImage} alt='selected beast' />
          {this.props.selectedBeastDescription}
        </Modal>
      </>
    )
  }
}

export default SelectedBeast; 