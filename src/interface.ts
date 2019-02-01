import { RouteComponentProps } from 'react-router';
import { RouterStore, ComputeStore } from './stores';
export interface IBase extends RouteComponentProps<{}> {
    router: RouterStore
}

export interface ICompute extends IBase {
    compute: ComputeStore
}