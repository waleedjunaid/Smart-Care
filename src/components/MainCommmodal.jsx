import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
} from 'reactstrap';
import {
  MdMenu,
  MdCreate,
  MdCheck,
  MdDelete,
  MdEdit,
  MdRefresh,
} from 'react-icons/md';

class MainCommmodal extends React.Component {
  state = {
    modal: false,
    modal_backdrop: false,
    modal_nested_parent: false,
    modal_nested: false,
    backdrop: true,
    BtnName: this.props.BtnName,
    MyModalName: 'New Record',
  };

  toggle = modalType => () => {
    if (!modalType) {
      return this.setState({
        modal: !this.state.modal,
      });
    }

    this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
    });
  };

  toggleEditmodal = (Modname, modalType) => () => {
    console.log('Here is edit modal name ' + Modname);
    this.state.MyModalName = Modname;
    if (!modalType) {
      return this.setState({
        modal: !this.state.modal,
      });
    }

    this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
    });
  };
  showBtnState() {
    return this.state.BtnName === '+ADD' ? (
      <Button
        className="btn btn-secondary btn-sm"
        onClick={this.toggle()}
        style={{ marginLeft: 252 }}
      >
        {this.state.BtnName}
      </Button>
    ) : (
      <React.Fragment>
        <MdCheck></MdCheck>
        <MdEdit onClick={this.toggleEditmodal('Edit Record')}></MdEdit>
        <MdDelete></MdDelete>
      </React.Fragment>
    );
  }
  render() {
    return (
      <React.Fragment>
        {this.showBtnState()}
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle()}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle()}>
            {this.state.MyModalName}
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="Name">Name</Label>
              <Input
                type="text"
                name="textname"
                placeholder="Eg: Muhamamd waleed"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Description">Description</Label>
              <Input type="text" name="textDesc" placeholder="" />
            </FormGroup>
            <FormGroup row>
              <Label for="exampleFile" sm={4}>
                Upload File
              </Label>
              <Col sm={10}>
                <Input type="file" name="file" />
                <FormText color="muted"></FormText>
              </Col>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle()}>
              Save
            </Button>
            <Button color="secondary" onClick={this.toggle()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default MainCommmodal;
