import React from 'react';
import AddProduct from '../components/AddProduct';
import { connect } from 'react-redux';

class AddProductContainers extends React.Component {
  render() {
    return <AddProduct />;
  }
}

const mapDispatchToProps = dispatch => ({
  addProduct: () => dispatch(addProduct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
