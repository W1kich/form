import './app-filter.css';

const AppFilter = (props) =>{
	
	const buttonsData = [
		{name: 'all', label: 'Всі працівники', colored: false},
		{name: 'rise', label: 'На підвищення', colored: false},
		{name: 'moreThen1000', label: 'З/П більше 1000$', colored: true}
	];

	const buttons = buttonsData.map(({name, label, colored}) =>{
		const active = props.filter === name;
		const calzz = active ? 'btn-light' : "btn-outline-light";
		const style = colored ? {color: 'red'} : null
		return(
			<button type='button'
				className= {`btn ${calzz}`}
				key = {name}
				onClick={() => props.onFilterSelect(name)}
				style ={style}>
				{label}
			</button>
		)
	})
	

	
		return (
			<div className="btn-group">
				{buttons}
			</div>
		);
		
}

export default AppFilter;