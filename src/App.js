import foods from './foods.json';
import './App.css';
import { useEffect, useState } from 'react';
import FoodBox from './components/FoodBox';
import {Row} from "antd"
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar'

function App() {
  const [ foodList, setFoodList ] = useState([]);
  const [ searchResults, setSearchResults ] = useState([]);
  const [ searchQuery, setSearchQuery ] = useState("");

  const addFoodToList = (newFoodData) => {
    const newFoodList = [...foodList, newFoodData]
    setFoodList(newFoodList);
  }

  const searchQueryFunc = (query) => {
    setSearchQuery(query);
    const filtered = foodList.filter((item) => {
      return Object.values(item).join('').toLowerCase().includes(query.toLowerCase());
    })

    if (query.length >= 1){
      setSearchResults(filtered);
    }
  }

  const deleteFunc = (foodItem) => {
    setFoodList(foodList.filter(item => item !== foodItem))
    setSearchResults(searchResults.filter(item => item !== foodItem))
  }

  useEffect(() => {
    setFoodList(foods)
  }, [])


  if (foodList === undefined || foodList.length === 0) {
    return "loading";
  }

  return (
      <div className="App">
        <SearchBar searchQueryFunc={searchQueryFunc}/>
        <AddFoodForm addFoodFunc={addFoodToList}/>
        <p>Food List</p>
        { searchResults.length === 0 && searchQuery.length > 1 ?
          <p>Nothing found</p>
          :
        <Row>
          { searchResults.length !== 0 ? searchResults.map((food, index) => {
            return <FoodBox food={food} key={index} deleteFunc={deleteFunc}/>
          })
          : 
          foodList.map((food, index) => {
            return <FoodBox food={food} key={index} deleteFunc={deleteFunc}/>
          })
          }
        </Row>}
      </div>
  );
}

export default App;
