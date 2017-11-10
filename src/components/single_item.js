import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getSingle, toggleComplete, deleteItem} from '../actions';
import $ from 'jquery';

import './single_item.css';
import cardBg01 from '../assets/images/cardBg01.jpg';
import cardBg02 from '../assets/images/cardBg02.jpg';
import cardBg03 from '../assets/images/cardBg03.jpg';
import cardBg04 from '../assets/images/cardBg04.jpg';
import cardBg05 from '../assets/images/cardBg05.jpg';
import cardBg06 from '../assets/images/cardBg06.jpg';
import cardBg07 from '../assets/images/cardBg07.jpg';
import cardBg08 from '../assets/images/cardBg08.jpg';
import cardBg09 from '../assets/images/cardBg09.jpg';



class SingleItem extends Component{
	componentDidMount(){
		this.props.getSingle(this.props.match.params.id);
	}  
	toggleComplete(){
		// console.log('toggle complete', this.props.single);
		this.props.toggleComplete(this.props.single._id);
		if(!this.props.single.complete){
			this.toastMsg('item completed', 3000);
		}
	}
	deleteTodo(itemTitle){
		console.log('at deleteTodo in single_item', itemTitle);
		this.props.deleteItem(this.props.single._id).then(()=>{
			this.props.history.push('/');
			// console.log(this.props);
			this.toastMsg(`Item deleted: ${itemTitle}`, 3500);
		});
	}


	toastMsg(msgString, time){ 
	    const msg = $('<div>',{
	        text: msgString,
	        class:'toast'       
	    }).css({
	        position: 'fixed',
	        right: '-150px',
	        top: '-125px',
	        'width': '200px',
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
	    $('body').append(msg);
	    setTimeout(function(){
	        $('.toast').remove();
	    }, time);
	}

	render(){
		const{single} = this.props;
		if(!single){
			return <div>...loading loading loading</div>
		}
		const cardBgs = [cardBg01, cardBg02, cardBg03, cardBg04, cardBg05, cardBg06, cardBg07, cardBg08, cardBg09];
		const randoNum = Math.floor(Math.random()*9);
		return(
			<div className="row">				
					<div className="card col s12">
						<div className="card-image">
							<img src={cardBgs[randoNum]} />
							<span className="card-title">{single.userId}</span>
						</div>
						<div className="card-content">
							<h3 className="itemTitle">
								{single.title}
								<small>Created by: <span>{single.userId}</span></small>
							</h3>
							<p>Details: {single.details}</p>
							<p>Status: {single.complete ? 'complete' : 'in progress'}</p>
						</div>
						<div className="card-action">
							<button className={`btn lighten-1 ${single.complete ? 'amber' : 'cyan btn-floating pulse'}`} onClick={()=>this.toggleComplete()}>
								{single.complete ? 'revert' : <i className="material-icons">check</i>}
							</button>
							<button style={{marginLeft:'30px'}} className="btn red accent-4" onClick={()=>this.deleteTodo(single.title)}>
								DELETE
							</button>
							<Link style={{marginLeft: '30px'}} to="/" className="btn green darken-1"> Back </Link>
						</div>
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