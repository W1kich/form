import "./app-info.css";

const AppInfo = ({numperOfemploees, increaseEmployees}) =>{
	
	return (
		<div className="app-info">
			<h1>Облік працівників у компанії N</h1>
			<h2>Загальня кількість працівників: {numperOfemploees}</h2>
			<h2>Перемію отримують: {increaseEmployees}</h2>
		</div>
	);
} 

export default AppInfo;