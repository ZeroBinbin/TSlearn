import * as React from 'react';
import { Provider } from 'mobx-react';
import { inject, observer } from 'mobx-react';
const style = require('./selectUI.css');

@inject('select')
@observer
export default class SelectUI extends React.Component {
    render () {
        return <div></div>
    }
}