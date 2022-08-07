import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form'
import {Component} from 'react'

import './app.css';

class WhoAmI extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+++'
        }
    }

    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1
        }))
    }

    render() {
        const {name, surname, link} = this.props;
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
                <a href={link}>My profile</a>
            </div>
        )
    }
}

function App() {
    return (
        <div className="App">
            <WhoAmI name='John' surname='Smith' link='facebook.com'/>
            <WhoAmI name='Alex' surname='Shepard' link='vk.com'/>
        </div>
    );
}

function App2() {

    const data = [
        {name: 'Gura O.', salary: 800, increase: true, id: 1},
        {name: 'Lisovoy R.', salary: 3000, increase: false, id: 2},
        {name: 'Mayboroda I.', salary: 5000, increase: false, id: 3}  
    ];

    return(
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList data={data}/>
            <EmployersAddForm/>
        </div>
    );
}

export default App;