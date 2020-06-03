import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteAppointment } from '../../actions/profile';

const Appointment = ({ appointment, deleteAppointment }) => {
  const appointments = appointment.map((app) => (
    <tr key={app._id}>
      <td>{app.title}</td>
      <td className="hide-sm">{app.name}</td>
      <td className="hide-sm">{app.email}</td>
      <td className="hide-sm">{app.address}</td>
      <td>
        <Moment format="YYYY/MM/DD">{moment.utc(app.from)}</Moment>
      </td>
      <td className="hide-sm">{app.phone}</td>
      <td>
        <button
          onClick={() => deleteAppointment(app._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Appointment Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Name</th>
            <th className="hide-sm">Email</th>
            <th className="hide-sm">Address</th>
            <th className="hide-sm">Time</th>
            <th className="hide-sm">Phone</th>
            <th />
          </tr>
        </thead>
        <tbody>{appointments}</tbody>
      </table>
    </Fragment>
  );
};

Appointment.propTypes = {
  appointment: PropTypes.array.isRequired,
  deleteAppointment: PropTypes.func.isRequired
};

export default connect(null, { deleteAppointment })(Appointment);
