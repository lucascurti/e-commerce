import React from 'react';
import AddReview from '../components/AddReview';
import { connect } from 'react-redux';
import { setReview } from '../action-creator/review';

class AddReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      star: 0,
      userId: props.userId,
    };
  }
  submitReview = e => {
    e.preventDefault();
    this.props.setReview(this.props.productId, this.state);
    this.setState({
      title: '',
      description: '',
      star: 0,
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <AddReview
        submitForm={this.submitReview}
        title={this.state.title}
        description={this.state.description}
        star={this.state.star}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  userId: 1, // state.user.id
  productId: ownProps.match.params.id,
});

const mapDispatchToProps = dispatch => ({
  setReview: review => dispatch(setReview(review)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewContainer);
