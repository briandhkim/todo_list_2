import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getSingle, toggleComplete, deleteItem} from '../actions';

class SingleItem extends Component{
	componentDidMount(){
		this.props.getSingle(this.props.match.params.id);
	}  
	toggleComplete(){
		// console.log('toggle complete', this.props.single._id);
		this.props.toggleComplete(this.props.single._id);
	}
	deleteTodo(){
		console.log('at deleteTodo in single_item', this.props);
		this.props.deleteItem(this.props.single._id).then(()=>{
			this.props.history.push('/');
		});
	}

	render(){
		const{single} = this.props;
		if(!single){
			return <div>...loading loading loading</div>
		}

		return(
			<div>
				<h3>
					{single.title}
				</h3>
				<p>Details: {single.details}</p>
				<p>Created by: {single.userId}</p>
				<p>Status: {single.complete ? 'complete' : 'in progress'}</p>
				<button className={`btn ${single.complete ? 'amber' : 'cyan'} lighten-1`} onClick={()=>this.toggleComplete()}>
					{single.complete ? 'revert' : 'complete'}
				</button>
				<button style={{marginLeft:'30px'}} className="btn red accent-4" onClick={()=>this.deleteTodo()}>
					DELETE
				</button>
				<div className="center-align">
					<Link to="/" className="btn green darken-1"> Back </Link>
				</div>
			</div>
		)
	}
}


function mapStateToProps(state){
	return {
		single: state.todo.single
	}
}

export default connect(mapStateToProps,{getSingle, toggleComplete, deleteItem})(SingleItem);