import React from 'react';
import EditProduct from '../components/EditProduct';
import { connect } from 'react-redux';

class EditProductContainer extends React.Component {
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
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.product);
  }
  submitProduct = e => {
    e.preventDefault();
    this.props.editProduct(this.state, this.props.match.id);
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
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  render() {
    return (
      <EditProduct
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
const mapStateToProps = state => ({
  product: state.product.selectedProduct,
});

const mapDispatchToProps = dispatch => ({
  editProduct: prod => dispatch(fetchEditProduct(prod)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  EditProductContainer,
);
