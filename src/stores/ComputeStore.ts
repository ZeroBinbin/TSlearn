import { observable, action, computed } from "mobx";

class ComputeStore {
    @observable count: number = 1;

    @computed get num () {
        return this.count;
    }

    @action increase = () => {
        this.count++;
    }
    @action decrease = () => {
        this.count--;
    }
}

export default ComputeStore