import React, {Component} from 'react';
import {connect} from 'react-redux';
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
			<ul className="collection">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state){
	return{
		todos: state.todo.all
	}
}

export default connect(mapStateToProps, {getAll})(TodoList);