import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form'

import './app.css';



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                {name: 'Gura O.', salary: 800, increase: true, like:true, id: 1},
                {name: 'Lisovoy R.', salary: 3000, increase: false, like:false, id: 2},
                {name: 'Mayboroda I.', salary: 5000, increase: false, like:false, id: 3}  
            ]
        }
        this.maxId = 4;
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => {
            //const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index +1);
            // const newArr = [...before, ...after];
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        if(newItem.name.length < 3 || newItem.salary == ''){
            alert('fuck you');
        }
        else{
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return{
                    data: newArr
                }
            })
        }
       
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }



    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return(
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;