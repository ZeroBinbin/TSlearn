import { observable, action, computed, flow } from "mobx";
import { ResponseJSON, ResponseData } from "../classes/common";
import axios from 'axios';

class ComputeStore {
    @observable hasData: boolean = false;
    @observable name: string = '';
    @observable value: string = '';
    @observable success: boolean = true;
    @observable error: string = '';

    init = flow(function *() {
        try {
            const res = yield axios.get('/api/test');
            const responseJSON = new ResponseJSON(res);
            const data = this.getData();
            this.name = data.name;
            this.value = data.value;
            this.hasData = true;
        } catch (error) {
            this.success = false;
            this.error = error;
        }
    })
}

export default ComputeStore