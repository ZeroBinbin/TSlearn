import * as React from 'react';
import { Provider } from 'mobx-react';
import SelectStore from './selectStore';
import SelectUI from '../ui/SelectUI'

export default class Select extends React.Component {
    render () {
        return <Provider select={SelectStore} >
           <SelectUI />
        </Provider>
    }
}