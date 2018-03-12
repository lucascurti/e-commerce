import React from 'react';
import AddCategory from '../components/AddCategory';
import { connect } from 'react-redux';
import { updateCategory } from '../action-creator/categories';

class EditCategoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  submitCategory = e => {
    e.preventDefault();
    console.log('MATCH', this.props.match);
    console.log('STATE', this.state);
    this.props.editCategory(this.props.match.params.id, this.state);
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
        type="Edit"
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  editCategory: (id, category) => {
    dispatch(updateCategory(id, category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(
  EditCategoryContainer,
);
