import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employeer-list/employees-list';
import EmployessAddForm from '../employees-add-form/employess-add-form';
import './app.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			data:
			[
				{name: "Denis B.", salary: 1500 , increase: false, rise: true, id:1}, 
				{name: "John C.", salary: 800 , increase: false, rise: false, id:2}, 
				{name: "Alex B.", salary: 3000, increase: false, rise: false, id:3}, 
				{name: "Mikle M.", salary: 5000, increase: true, rise: false, id:4}
			], 
			term: '',
			filter: 'all'
		}
	}

	deleteItem= (id) => {
		this.setState(({data}) => {
			return{
				data: data.filter(item => item.id !== id)
			}
		})
	}

	addItem = (nameA, salaryA, increaseA = false, riseA = false, idA = this.state.data.length + 1) => {
		this.setState(({data}) =>{
			if(nameA === "" && salaryA === "" && nameA.length < 4){
				alert("Введіть коректні дані");
			}else{
				const copyArr = [...data];
				copyArr.push({name: nameA, salary: salaryA, increase: increaseA,rise: riseA , id: idA});
				return{
					data: copyArr
				}
			}
		})
	}
	
	onToggleProp = (id, prop) =>{
		this.setState(({data}) => ({
			data: data.map(item =>{
				if(item.id === id){
					return {...item, [prop]: !item[prop]}
				}
				return item;
			}) 
		}))
	}

	searchEmp = (items, term) =>{
		if(term.length === 0){
			return items;
		}
		
		return items.filter((item) =>{
			return item.name.indexOf(term) > -1;
		})
	}

	onUpdateSearch = (term) =>{
		this.setState({term});
	}

	
	filterPost = (items, filter) =>{
		if(filter === 'all'){
			return items;
		}else if(filter === 'rise'){
			return items.filter((item) =>{
				return item.rise === true;
			})
		}else if(filter === 'moreThen1000'){
			return items.filter((item) =>{
				return item.salary> 1000;
			})
		}		
	}

	onFilterSelect = (filter) =>{
		this.setState({filter});
	}

	render(){
		const {data, term, filter} = this.state;
		const visibleData = this.filterPost((this.searchEmp(data, term)), filter);
		
		return (
			<div className="app">
				<AppInfo
				numperOfemploees = {data.length}
				increaseEmployees = {data.filter(item => item.increase).length}/>
				<div className="search-panel">
					<SearchPanel
					onUpdateSearch = {this.onUpdateSearch}/>
					<AppFilter filter = {filter} onFilterSelect ={this.onFilterSelect}/>
				</div>
				<EmployeesList 
				data = {visibleData}
				onDelete = {this.deleteItem}
				onToggleProp = {this.onToggleProp}
				/>
				<EmployessAddForm 
				onAdd = {this.addItem}/>
			</div>
		);
	}
}
export default App;