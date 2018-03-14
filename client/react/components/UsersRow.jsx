import React from 'react';
import ModalUserDelete from './ModalUserDelete';

export default ({ user, onDelete }) => (
  <tr key={user.id}>
    <td>{user.id}</td>
    <td>{user.firstName}</td>
    <td>{user.lastName}</td>
    <td>{user.email}</td>
    <td>{user.rol === 'admin' ? <span>✅</span> : <span>❌</span>}</td>
    <td className="action-buttons">
      <button
        type="button"
        className="btn btn-danger btn-sm"
        data-toggle="modal"
        data-target={`#modalDelete${user.id}`}
      >
        Delete
      </button>
      <ModalUserDelete user={user} onDelete={onDelete} />

      {user.rol !== 'admin' ? (
        <button type="button" className="btn btn-secondary btn-sm">
          Give admin privileges
        </button>
      ) : (
        <span />
      )}
    </td>
  </tr>
);
