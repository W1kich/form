import { Component } from 'react';
import './employess-add-form.css';
// import './employees-add-form.scss';


class EmployessAddForm extends Component{

	state = {
		name: "",
		salary: ""
	}
	
	onSubmit = (e) =>{
		e.preventDefault();
		this.props.onAdd(this.state.name, this.state.salary);
	}
	onValueChange = (e) =>{
		this.setState({
			[e.target.name]: e.target.value
		})
	} 
	
	render (){
		const {name, salary} = this.state;

		return(
			<div className="app-add-form">
				<h3>Додайте нового працівника</h3>
				<form
					onSubmit={this.onSubmit}
					className="add-form d-flex">
					<input type="text"
							className="form-control new-post-label"
							placeholder="Як його звати ?" 
							name = "name"
							value={name}
							onChange={this.onValueChange} />
					<input type="number"
							className="form-control new-post-label"
							placeholder="З/П у $?" 
							name = "salary"
							value={salary}
							onChange={this.onValueChange} />

					<button type="submit"
									className="btn btn-outline-light"
									>
									Додати</button>
				</form>
			</div>
		);
	}
		
}

export default EmployessAddForm;