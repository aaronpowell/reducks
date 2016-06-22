import creator from './stores';
import { addTodo, setVisibility, setTodoStatus, completeAll, incompleteAll } from './actions';
import inquirer from 'inquirer';

export default function (createStore, combineReducers) {

    const store = creator(createStore, combineReducers);

    store.subscribe(() => {
        const state = store.getState();

        prompter(state.visibilityFilter, ...(state.visibilityFilter ? state.completedTodos : state.todos));
    });

    var ok = '✓';

    if (process.platform === 'win32') {
        ok = '\u221A';
    }

    function prompter(visibilityFilter, ...tasks) {
        inquirer.prompt([{
            type: 'list',
            name: 'operation',
            message: 'What to do next?',
            default: 'add',
            choices: [
                ...tasks.map((task) => ({
                    name: `${task.name} [${ task.completed ? ok : ' ' }]`,
                    value: task
                })),
                new inquirer.Separator(),
                {
                    name: 'Add a todo',
                    value: 'add'
                },
                {
                    name: `Mark all as ${visibilityFilter ? 'todo' : 'done'}`,
                    value: `${visibilityFilter ? 'todo' : 'done'}-all`
                },
                {
                    name: 'Toggle visibility',
                    value: 'toggle-visibility'
                },
                {
                    name: 'Quit',
                    value: 'quit'
                }
            ]
        }, {
            type: 'input',
            name: 'todo',
            message: 'Todo:',
            when: ({ operation }) => operation === 'add'
        }]).then(({ operation, todo }) => {
            if (todo) {
                store.dispatch(addTodo(todo));
                return;
            }

            switch (operation) {
                case 'quit':
                    return;

                case 'toggle-visibility':
                    store.dispatch(setVisibility());
                    return;

                case 'todo-all':
                    store.dispatch(incompleteAll(store.getState().completedTodos));
                    return;

                case 'done-all':
                    store.dispatch(completeAll(store.getState().todos));
                    return;

                default:
                    store.dispatch(setTodoStatus(operation, !operation.completed));
                    break;
            }
        });
    }

    prompter();
};
