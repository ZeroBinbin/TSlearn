import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { IBase } from '../interface';
import { action } from 'mobx';

@inject('router')
@observer
class Home extends React.Component<IBase, {}> {
    render() {
        return <div>{this.props.router.history.action}</div>;
    }
}

export default Home;