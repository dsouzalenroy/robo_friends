import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';



class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfiled: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfiled: event.target.value})
  }

  render(){
    const { robots, searchfiled} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfiled.toLowerCase());
    })
    if(this.state.robots.length === 0){
      return <h1>Loading</h1>
    }else {
      return (
        <div className='tc'>
          <h1 className='f1'>Robofriends</h1>
          <SearchBox searchChange = {this.onSearchChange}/>
          <Scroll>
            <CardList robots = {filteredRobots}/>
          </Scroll>
        </div>
      );
    }
    }


}

export default App;
