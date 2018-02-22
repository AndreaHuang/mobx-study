import {observable,computed,autorun} from "mobx";
export class ObservableTodoStore{
	
	todos = observable.array();
	constructor(){
    	autorun( () => console.log("hello",this.todos)) ;
	}
	completedTodosCount =computed(function(){
		return this.todos.filter(todo=>todo.completed===true).length;
	});

	report = computed(function(){
		if(this.todos.length===0){
			console.log(this.todos);
			return "<none>";
		} 
		 return `Next todo: "${this.todos[0].task}". ` +
			`Progress: ${this.completedTodosCount}/${this.todos.length}`;//+'/'+ ${this.todos.length} ;
	})

	addTodo(task){
		this.todos.push({
			task:task,
			completed:false,
			assignee:null
		})
	}
}
