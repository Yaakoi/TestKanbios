import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getEmployees } from "../../actions/employeeActions";

class employees extends Component {
    componentDidMount(){
        this.props.getEmployees()
    }

    render(){
        const {employees} = this.props.employees
        console.log(Object.entries(employees))
        return (
            <div>
                {Object.entries(employees).map(([key, value], i) => {
			return (
				<div key={key}>
					id is: {value._id} ;
				</div>
			)
		})}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({employees:state.employees})

export default connect(mapStateToProps, {getEmployees})(employees)