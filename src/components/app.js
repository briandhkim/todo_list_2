import React from 'react';
import {Link, Route} from 'react-router-dom';
import TodoList from './todo_list';
import AddItem from './add_item';
import SingleItem from './single_item';
import 'materialize-css/dist/css/materialize.min.css';



const App = () => (
    <div className="container">
    	<Route exact path="/" component={TodoList} />
    	<Route path="/add-item" component={AddItem} />
    	<Route path="/item/:id" component={SingleItem} />
    </div>
);

export default App;
