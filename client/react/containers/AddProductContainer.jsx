import React from 'react';
import AddProduct from '../components/AddProduct';
import { connect } from 'react-redux';
import { fetchAddProduct } from '../action-creator/addProduct';

class AddProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      quantify: 0,
      price: 0,
      image: '',
    };
  }
  submitProduct = e => {
    e.preventDefault();
    this.props.addProduct(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  render() {
    return (
      <AddProduct
        submitForm={this.submitProduct}
        name={this.state.name}
        description={this.state.description}
        quantify={this.state.quantify}
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
