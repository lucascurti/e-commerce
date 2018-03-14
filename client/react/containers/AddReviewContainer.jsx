import React from 'react';
//import AddReview from '../components/AddReview';
import { connect } from 'react-redux';
import { setReview } from '../action-creator/review';

class AddReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      star: 0,
    };
  }
  submitReview = e => {
    e.preventDefault();
    this.props.addReview(this.state);
    this.setState({
      name: '',
      description: '',
      star: 0,
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  render() {
    return (
      <AddReview
        submitForm={this.submitReview}
        title={this.state.name}
        description={this.state.description}
        star={this.state.star}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setReview: review => dispatch(setReview(review)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewContainer);
