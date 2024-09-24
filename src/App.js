import { useEffect, useState } from 'react';
import './App.css';
import MyMeals from './MyMeals';
import { addMeal, getAllMeals, editMeal, deleteMeal } from './FetchMeals';


function App() {

  const [myMeal, setMeal] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [mealId, setMealId] = useState("");

  useEffect(() => {
    getAllMeals(setMeal)
  }, [])

  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setMealId(_id)
  }


  return (
    <div>
      <h1>Meal Plan</h1>
      <form onSubmit={(e) => e.preventDefault()}>
      <input
      type="text"
      placeholder="Add a meal"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
      <button 
      disabled={!title}
      onClick=
        {editing ? () => editMeal(mealId, title, setTitle, setMeal, setEditing) :
        () => addMeal(title, setTitle, setMeal)}>
        {editing ? "Edit" : "Add"}
      </button>
      </form>

      {myMeal.map((meal) => 
      <MyMeals 
      key={meal._id} 
      text={meal.title}
      updatingInInput={() => updatingInInput(meal._id, meal.title)}
      deleteMeal={() => deleteMeal(meal._id, setMeal)}
      />)}
      
    </div>
  );
}

export default App;
