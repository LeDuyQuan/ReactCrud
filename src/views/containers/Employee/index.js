import React, { Component } from 'react';
import { EmployeeListContainer } from './EmployeeList';

class EmployeeListPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row event-page-wrapper">
        <EmployeeListContainer />
      </div>
    )
  };
}

export default EmployeeListPage;