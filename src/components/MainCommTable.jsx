import Page from 'components/Page';
import React, { Component } from 'react';
import { Datatable, Headers } from '@o2xp/react-datatable';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Button,
} from 'reactstrap';
import { MdAutorenew, MdWbAuto, MdRefresh } from 'react-icons/md';
import {
  FaAutoprefixer,
  FaAngleLeft,
  FaAngleRight,
  FaAlignJustify,
  FaAlignRight,
} from 'react-icons/fa';
import MainCommmodal from '../components/MainCommmodal';
import { MdMenu, MdCreate, MdCheck, MdDelete } from 'react-icons/md';
import bn from 'utils/bemnames';

const tableTypes = ['', 'bordered', 'striped', 'hover'];

const TablePage = () => {
  return;
};

const bem = bn.create('MainCommTable');

//ExampleTable
let options = {
  keyColumn: 'id',
  data: {
    columns: [
      {
        id: 'ID',
        label: 'ID',
        colSize: '80px',
      },
      {
        id: 'Name',
        label: 'Name',
        colSize: '150px',
      },
      {
        id: 'Image',
        label: 'Image',
        colSize: '50px',
      },
      {
        id: 'Description',
        label: 'Description',
        colSize: '80px',
      },
      {
        id: 'Btns',
        label: 'Buttons',
        colSize: '50px',
      },
    ],
    rows: [
      {
        ID: '1',
        Name: 'Sami',
        Image: (
          <img
            className=""
            style={{
              height: 25,
              width: 25,
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3iHB3Arq6qgMTcqL3P5v9LrMoHMxl61UZaG6XLXGWRPrMwCsp&usqp=CAU"
          ></img>
        ),
        Description: 'Hello world',
        Btns: (
          <MainCommmodal BtnName={(MainCommmodal.value = 's')}></MainCommmodal>
        ),
      },
      {
        ID: '2',
        Name: 'Waleed',
        Image: (
          <img
            className=""
            style={{
              height: 25,
              width: 25,
            }}
            src="https://i1.sndcdn.com/avatars-000140236585-4061qc-t500x500.jpg"
          ></img>
        ),
        Description: 'Hello world',
        Btns: (
          <MainCommmodal BtnName={(MainCommmodal.value = 's')}></MainCommmodal>
        ),
      },
      {
        ID: '3',
        Name: 'David',
        Image: (
          <img
            className=""
            style={{
              height: 25,
              width: 25,
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3iHB3Arq6qgMTcqL3P5v9LrMoHMxl61UZaG6XLXGWRPrMwCsp&usqp=CAU"
          ></img>
        ),
        Description: 'Hello world',
        Btns: (
          <MainCommmodal BtnName={(MainCommmodal.value = 's')}></MainCommmodal>
        ),
      },
      {
        ID: '4',
        Name: 'Steyn',
        Image: (
          <img
            className=""
            style={{
              height: 25,
              width: 25,
            }}
            src="https://i1.sndcdn.com/avatars-000140236585-4061qc-t500x500.jpg"
          ></img>
        ),
        Description: 'Hello world',
        Btns: (
          <MainCommmodal BtnName={(MainCommmodal.value = 's')}></MainCommmodal>
        ),
      },
    ],
  },
};

class MainCommTable extends React.Component {
  state = {
    BtnState: this.props.BtnState,
    TblHdrName: this.props.TblHdrName,
  };

  render() {
    console.log('Table Btn state  ' + this.state.BtnState);
    return (
      <Page
        title="Store Categories"
        breadcrumbs={[{ name: 'Store Categories', active: true }]}
      >
        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>
                {this.state.TblHdrName}
                <Button
                  className="btn btn-secondary btn-sm"
                  style={{ marginLeft: 100 }}
                >
                  <MdRefresh></MdRefresh>
                </Button>
                <MainCommmodal
                  BtnName={(MainCommmodal.value = '+ADD')}
                ></MainCommmodal>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <Datatable options={options} />
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default MainCommTable;
