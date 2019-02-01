import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { ICompute } from '../interface';

@inject('router', 'compute')
@observer
export default class Compute extends React.Component<ICompute, {}> {
    render() {
        const { router, compute } = this.props;
        console.log(compute.num);
        return <div>
            计数：{compute.count}
            <div>
                <button onClick={compute.increase}>++</button>
                <button onClick={compute.decrease}>--</button>
            </div>
        </div>;
    }
}