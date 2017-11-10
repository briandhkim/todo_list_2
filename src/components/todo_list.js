import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getAll} from '../actions';
import $ from 'jquery';

import './todo_list.css';

class TodoList extends Component{
	// constructor(){
	// 	super(props);
	// 	this.renderList = this.renderList.bind(this);
	// }
	componentDidMount(){
		this.props.getAll();
	}

	toastMsg(msgString, time){ 
	    const msg = $('<div>',{
	        text: msgString,
	        class:'toast'       
	    }).css({
	        position: 'fixed',
	        right: '-150px',
	        top: '-125px',
	        'width': '230px',
	        'padding': '7px',
	        'background-color': 'rgba(0,0,0,0.7)',
	        'color' : 'white',
	        'z-index': 1000,
	        'border-radius': '15px',
	        'font-family': "'Orbitron', sans-serif",
	        'font-size': '15px'
	    }).animate({
	        right: '+=200px',
	        top: '+=135px'
	    }, 900);
	    setTimeout(function(){
	    	if($('.toast')[0]){
	    		return;
	    	}else{
	    		$('body').append(msg);
	    	}
	    },100);
	    
	    setTimeout(function(){
	        $('.toast').remove();
	    }, time);
	}

	renderList(){
		// console.log('at renderlist', this.props);
		if(this.props.todos.length >0){
			this.toastMsg(`you have ${this.props.todos.length} items to check`, 2500);
		}
		return this.props.todos.map((item, index)=>{
			return(
				 <li key={index} className="collection-item">
				 	<div>
					<Link to={`/item/${item._id}`} className={`${item.complete ? 'blue-text':'red-text text-accent-4'}`}> {item.title} </Link>
					<span className={`${item.complete? 'green-text text-darken-3':'white-text new'} badge secondary-content`}>
						{item.complete ? 'Complete' : 'status: '}
					</span>
					</div>
				</li>
			);
		});
	}

	render(){
		return(
			<div>
				<h1 className="center-align appTitle">do it</h1>
				<Link to="/add-item" className="btn addLink">Add Item</Link>
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