import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getEmployees} from "../../actions/employeeActions";
import "./employees.css"

class employees extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getEmployees()
    }

    renderTableData(employees) {
        return Object.values(employees)[0].employees.map(i => {
            return (
                <tr key={i._id}>
                    <td>{i._id}</td>
                    <td>{i.firstName}</td>
                    <td>{i.lastName}</td>
                    <td>{i.age}</td>
                    <td>{i.salary}</td>
                </tr>
            )
        })
    }

    renderTableHeader(employees){
        let header = Object.keys(Object.values(employees)[0].employees[0])
        return header.map((key, index)=> {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render(){
        const { employees } = this.props
        console.log(Object.values(employees)[0].employees)
        if (typeof Object.values(employees)[0].employees == "undefined"){
            return (
                <div className="spinner-box">
                    <div className="circle-border">
                        <div className="circle-core"></div>
                    </div>
                    <span>Chargement...</span>
                </div>
            )
        }
        else if (Object.values(employees)[0].employees.length == 0){
                return (
                <div className="empty">
                    <span>Il n'y a pas d'employés</span>
                </div>
                )
        }
        else{
            return (
                <div>
                    <h1 id='title'>Employees list</h1>
                    <table id="employees">
                        <tbody>
                            <tr>{this.renderTableHeader(employees)}</tr>
                            {this.renderTableData(employees)}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

employees.propTypes = {
    getEmployees: PropTypes.func.isRequired,
  };

const mapStateToProps = (state) => ({
    employees:state.employees,
    loading:state.loading
})

export default connect(mapStateToProps, {getEmployees})(employees)