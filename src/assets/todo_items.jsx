function todo_items(props) {
    return<div className="item">
                <button type="submit" onClick={() => { props.delete_item(props.id) }}>-</button>
                <p>{props.item}</p>
            </div>
}

export default todo_items