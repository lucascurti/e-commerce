import React from 'react';
import AddProduct from '../components/AddProduct';
import { connect } from 'react-redux';
import { fetchAddProduct } from '../action-creator/product';

class AddProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      stock: 0,
      price: 0,
      image: '//www.google.com',
    };
  }
  submitProduct = e => {
    e.preventDefault();
    this.props.addProduct(this.state);
    this.setState({
      name: '',
      description: '',
      stock: 0,
      price: 0,
      image: '//www.google.com',
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <AddProduct
        submitForm={this.submitProduct}
        name={this.state.name}
        description={this.state.description}
        stock={this.state.stock}
        price={this.state.price}
        image={this.state.image}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addProduct: prod => dispatch(fetchAddProduct(prod)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  AddProductContainer,
);
