import { useState } from "react";
import Todo_items from "./assets/todo_items";
import Input from "./assets/input";
import Heading from "./assets/heading";

function App() {
  const [items, setitems] = useState([])
  const [item, setitem] = useState("")

  function handleClick() {
    if(item.length !== 0)
    items.push(item)
    setitem("")
  }

  function handleChange(event) {
    setitem(event.target.value);
  }
  function remove_item(id) {
    setitems(preval => {
      return preval.filter((val, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Heading />

      <div className="box">
      {items.map((val, index) => (
        <Todo_items key={index}
          id={index}
          item={val}
          delete_item={remove_item} />))}
      </div>

      <Input click={handleClick} change={handleChange} value={item} />

    </div>
  );
}

export default App;