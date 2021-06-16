
 const all = todos
 const active = all.filter(todo => !todo.completed)
 const complete = all.filter(todo => todo.completed)