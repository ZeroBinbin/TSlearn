import { observable, action, computed } from "mobx";
import { SelectList } from './SelectClass';

class SelectStore {
    @observable value: number | string | null = null;
    @observable list: SelectList;
    @computed get text(){
        if (this.value === null) return '';
        let option = this.list.getDataByValue(this.value);
        if (option !== null) {
            return option.text;
        }
        return '';
    }

    @action changeValue = (value: string | number) => {
        this.value = value;
    }
    @action clear = () => {
        this.value = null;
    }
}

export default SelectStore;