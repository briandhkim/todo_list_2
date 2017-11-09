import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getAll} from '../actions';

class TodoList extends Component{
	// constructor(){
	// 	super(props);
	// 	this.renderList = this.renderList.bind(this);
	// }
	componentDidMount(){
		this.props.getAll();
	}

	renderList(){
		return this.props.todos.map((item, index)=>{
			return <li key={index} className="collection-item"> {item.title} </li>;
		});
	}

	render(){
		return(
			<div>
				<h1 className="center-align">todo list 2</h1>
				<Link to="/add-item" className="btn">Add Item</Link>
				<ul className="collection">
					{this.renderList()}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		todos: state.todo.all
	}
}

export default connect(mapStateToProps, {getAll})(TodoList);