import * as React from 'react';
import { observable, action, computed } from "mobx";
import { IListItem } from '../interface';


class TodoListStore {
    @observable _list: Array<IListItem> = [];
    @observable _value: string = '';

    @computed get list() {
        return this._list;
    }

    @action changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        this._value = event.target.value;
    }
    @action commit = () => {
        this._list.push({ text: this._value, id: Math.random() });
    }

    @action delete = (id: number) => {
        this._list = this._list.filter(l => l.id !== id);
    }
}

export default TodoListStore;