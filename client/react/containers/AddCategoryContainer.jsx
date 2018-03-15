import React from 'react';
import AddCategory from '../components/AddCategory';
import { connect } from 'react-redux';
import { fetchAddCategory } from '../action-creator/categories';

class AddCategoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  submitCategory = e => {
    e.preventDefault();
    this.props.addCategory(this.state);
    this.setState({
      name: '',
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <AddCategory
        submitForm={this.submitCategory}
        name={this.state.name}
        handleChange={this.handleChange}
        type="Add"
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addCategory: category => dispatch(fetchAddCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  AddCategoryContainer,
);
