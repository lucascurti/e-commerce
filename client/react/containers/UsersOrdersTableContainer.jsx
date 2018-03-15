import React from 'react';
import UsersOrdersTable from '../components/UsersOrdersTable';
import { connect } from 'react-redux';

class UsersOrdersTableContainer extends React.Component {
  render() {
    return <UsersOrdersTable users={this.props.users} />;
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     onDelete: userOrder => {
//       dispatch(findUserOrder(userOrder)); OJO NO ESTA CREADA ESTA FUNCION findUserOrder()
//     },
//   };
// };

const mapStateToProps = (state, Props) => ({
  users: state.users,
});
// pasar  mapDispatchToProps en el connect
export default connect(mapStateToProps)(UsersOrdersTable);
