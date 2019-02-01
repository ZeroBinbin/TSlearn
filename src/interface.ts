import { RouteComponentProps } from 'react-router';
import { RouterStore, ComputeStore, TodoListStore } from './stores';
export interface IBase extends RouteComponentProps<{}> {
    router: RouterStore
}

export interface ICompute extends IBase {
    compute: ComputeStore
}

export interface ITodoList extends IBase {
    todolist: TodoListStore
}

export interface IListItem {
    text: string,
    id: number,
}