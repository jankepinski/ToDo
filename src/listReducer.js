export const listReducer = (state, {type, name, listId, id, stateString}) => {
    switch (type) {
        case "set-state":
            return JSON.parse(stateString);
        case "add-list":
            return [...state, {name: name, id: listId, tasks: []}]
        case "remove-list":
            return [...state].filter(list => list.id !== listId)
        case "add-task":
            return [...state].map(list => {
                if(list.id === listId){
                    return {...list, tasks: [...list.tasks, {name: name, id: id, completion: false}]}
                } else return list
            });
        case "remove-task":
            return [...state].map(list => {
                if(list.id === listId){
                    return {...list, tasks: [...list.tasks.filter(task => {
                        return task.id !== id
                    })]}
                } else return list
            })
        // case "switch-task-completion":
        //     return [...state].map(task => {
        //         if(task.id === id){
        //             return {...task, isCompleted: !task.isCompleted};
        //         } else {
        //             return {...task}
        //         }
        //     })
        default:
            break;
    }
}