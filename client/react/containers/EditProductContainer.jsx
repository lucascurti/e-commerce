import React from 'react';
import EditProduct from '../components/EditProduct';
import { connect } from 'react-redux';
import { editProduct, updateProduct } from '../action-creator/product';
import { Redirect } from 'react-router-dom';

class EditProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      stock: 0,
      price: 0,
      image: '//www.google.com',
      redirect: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.product);
  }
  submitProduct = e => {
    e.preventDefault();
    this.props.submitForm(this.state, this.props.match.params.id);
    this.setState({
      redirect: true,
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/products/list" />;
    }

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
  product: state.product,
});

const mapDispatchToProps = dispatch => ({
  submitForm: (prod, id) => dispatch(updateProduct(prod, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  EditProductContainer,
);
