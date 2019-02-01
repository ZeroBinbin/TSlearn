import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { ITodoList } from '../interface';


@inject('router', 'todolist')
@observer
export default class TodoList extends React.Component<ITodoList, {}> {
    render() {
        const { todolist } = this.props;
        return <div>
            <input type="text" onChange={todolist.changeInput} />
            <button onClick={todolist.commit}>确定</button>
            <div>
                {
                    todolist.list.map(l => (<div>{l.text} <span onClick={() => { todolist.delete(l.id) }}>x</span></div>))
                }
            </div>
        </div>;
    }
}