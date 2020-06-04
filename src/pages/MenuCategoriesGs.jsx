import React from 'react';
import MainCommTable from '../components/MainCommTable';
import MainCommmodal from '../components/MainCommmodal';

class MenuCategoriesGs extends React.Component {
  state = {};

  render() {
    return (
      <MainCommTable
        TblHdrName={
          (MainCommTable.TblHdrName = 'Grocery Store Menu Categories')
        }
      ></MainCommTable>
    );
  }
}

export default MenuCategoriesGs;
