import React from 'react';
import CategoriesTable from '../components/CategoriesTable';
import { connect } from 'react-redux';
import { removeCategory } from '../action-creator/categories';

class CategoriesContainer extends React.Component {
  render() {
    return <CategoriesTable />;
  }
}

const mapDispatchToProps = dispatch => ({
  removeCategory: categoryId => dispatch(removeCategory(categoryId)),
});

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesTable);
