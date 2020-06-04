import React from 'react';
import MainCommTable from '../components/MainCommTable';
import MainCommmodal from '../components/MainCommmodal';

class ServicesGs extends React.Component {
  state = {};

  render() {
    return (
      <MainCommTable
        TblHdrName={(MainCommTable.TblHdrName = 'Grocery Store Services')}
      ></MainCommTable>
    );
  }
}

export default ServicesGs;
