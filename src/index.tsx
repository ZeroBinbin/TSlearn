import * as React from 'react';
import * as reactDom from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistroy from 'history/createBrowserHistory';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { ComputeStore } from './stores';
import Compute from './components/Compute';
import TodoList from './components/TodoList';
import Home from './components/Home';
import Root from './Root';
import TodoListStore from './stores/TodoListStore';
// for hmr
if ((module as any).hot) {
    (module as any).hot.accept();
}
// use strict
configure({ enforceActions: true });
const browserHistory = createBrowserHistroy();
const routerStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routerStore);
const rootStore = {
    router: routerStore,
    compute: new ComputeStore(),
    todolist: new TodoListStore()
}



class App extends React.Component {
    render() {
        return (
            <Provider {...rootStore}>
                <Root>
                    <Router history={history}>
                        <Switch>
                            <Route path="/compute" component={Compute} />
                            <Route path="/todolist" component={TodoList} />
                            <Route path="/" component={Home} />
                        </Switch>
                    </Router>
                </Root>
            </Provider>);
    }
}


reactDom.render(<App />, document.getElementById('root'))

