import React from 'react';
import MainCommTable from '../components/MainCommTable';
import MainCommmodal from '../components/MainCommmodal';

class MoodsGs extends React.Component {
  state = {};

  render() {
    return (
      <MainCommTable
        TblHdrName={(MainCommTable.TblHdrName = 'Grocery Store Moods')}
      ></MainCommTable>
    );
  }
}

export default MoodsGs;
