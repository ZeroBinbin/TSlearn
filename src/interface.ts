import { RouteComponentProps } from 'react-router';
import { RouterStore, ComputeStore, TodoListStore, RemoteDataStore } from './stores';
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

export interface IRemoteData extends IBase {
    remoteData: RemoteDataStore,
}

export interface IResponseData {
    success: boolean,
    msg: string,
    data: object | any[],
}

export interface IResponseJSON {
    status: number,
    data?: IResponseData,
}