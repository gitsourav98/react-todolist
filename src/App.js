import React,{useState} from 'react';

function App() {
	const [userName, setUserName] = useState('Sourav');
	const [todoItems, setTodos] = useState([
		{ action: 'Buy book', done: true },
		{ action: 'Doctor at 5pm', done: false },
		{ action: 'Go to Gym', done: false },
	]);
	const [newTodo, addNewTodo] = useState('');

	const updateValue = (e) => {
      e.preventDefault();
		addNewTodo(e.target.value);
	};

	const Todo = ({ todo, index }) => (
		<tr>
			<td>{todo.action}</td>
			<td>
				<input
					type="checkbox"
					checked={todo.done}
					onChange={() => toggleDone(todo)}
				/>
			</td>
			<td>
				<button onClick={() => removeTodo(index)} className="btn btn-danger">Delete</button>
			</td>
		</tr>
	);

	const removeTodo = (index) => {
		const newTodos = [...todoItems];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	function newTodoItem() {
		setTodos([...todoItems, { action: newTodo, done: false }]);
		addNewTodo('');
	}

	function toggleDone(todo) {
		const updatedItems = todoItems.map((item) =>
			item.action === todo.action ? { ...item, done: !item.done } : item
		);
		setTodos(updatedItems);
	}

	return (
    <div>
    <div class="card-body " style={{width: '27rem',borderRadius:'10px' ,textAlign: 'center'}}>
		<div className="App p-3 mb-2 bg-secondary text-white" 
    style={{backgroundColor:'##414ba3', border:'1px solid', borderRadius:'10px'}}>
			<div className="col-12">
				<h2 className="bg- .text-light  p2">
					{userName}'s To do list
				</h2>
			</div>
			<div className="col-12">
				<input
					className="form-control"
					value={newTodo}
          placeholder ="Write Something here..."
					onChange={updateValue}
          style={{border:'1px solid', borderRadius:'10px'}}
				/>
				<button style={{margin:'10px'}} onClick={newTodoItem} className="btn btn-success">
					Add
				</button>
			</div>
			<div className="col-12">
				<div className="todo-list">
					<table className="table">
						<thead style={{fontSize:'20px'}}>
							<tr>
								<th>Task</th>
								<th>Complete</th>
                <th>Delete</th>
							</tr>
						</thead>
						<tbody className="text-white" style={{fontSize:'20px'}}>
							{todoItems.map((todo, index) => (
								<Todo key={index} index={index} todo={todo} />
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
    </div>
    </div>
	);
}

export default App;