import creator from './stores';
import { addTodo, setVisibility, setTodoStatus, updateAll } from './actions';
import { createStore } from 'redux';
import inquirer from 'inquirer';

const store = creator(createStore);

store.subscribe(() => {
    const state = store.getState();

    prompter(state.visibilityFilter, ...state.todos);
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
            ...tasks.filter(todo => todo.completed === visibilityFilter).map((task) => ({
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
                store.dispatch(updateAll(false));
                return;

            case 'done-all':
                store.dispatch(updateAll(true));
                return;

            default:
                store.dispatch(setTodoStatus(operation, !operation.completed));
                break;
        }
    });
}

prompter();
