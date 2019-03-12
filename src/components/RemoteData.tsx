import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { IRemoteData } from '../interface';

@inject('router', 'remoteData')
@observer
export default class RemoteData extends React.Component<IRemoteData, {}> {
    componentDidMount() {
        this.props.remoteData.init();
    }

    render() {
        const { router, remoteData: { hasData , success, name, value, error } } = this.props;
        const state: number = Number(hasData) |Number(success);
        if (hasData && success) {
            return <div>
                <div>name: {name}</div>
                <div>value: {value}</div>
            </div>
        } else if (hasData && !success) {
            console.log(error);
            return <div>请求失败</div>
        }
        return <div>数据加载中...</div>;
    }
}