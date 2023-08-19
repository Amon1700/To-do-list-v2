function input(prop) {
    return <div className="box">
      <input  onChange={prop.change} type="text" value={prop.value} placeholder="New Item"/>
      <button onClick={prop.click}>+</button>
  </div>
}

export default input;