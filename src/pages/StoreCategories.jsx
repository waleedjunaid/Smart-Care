import React from 'react';
import MainCommTable from '../components/MainCommTable';
import MainCommmodal from '../components/MainCommmodal';

class StoreCategories extends React.Component {
  state = {};

  render() {
    return (
      <MainCommTable
        TblHdrName={(MainCommTable.TblHdrName = 'Grocery Store Categories')}
      ></MainCommTable>
    );
  }
}

export default StoreCategories;
