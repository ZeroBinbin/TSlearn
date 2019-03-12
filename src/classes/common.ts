import { IResponseJSON, IResponseData } from '../interface'

export class ResponseData implements IResponseData {
    constructor(resonseData) {
        this.success = resonseData.success;
        this.msg = resonseData.msg;
        this.data = resonseData.data;
    }
    success: boolean;    
    msg: string;
    data: any | any[];
    isSuccess() {
        return this.success;
    }
    getData() {
        return this.data || null
    }
}

export class ResponseJSON implements  IResponseJSON{
    constructor(response) {
        this.status = response.status;
        this.data = new ResponseData(response.data);
    }
    status: number;    
    data?: ResponseData;
    is200() {
        return this.status === 200;
    }
    hasData() {
        return this.data !== undefined;
    }
    getData() {
        if (!this.is200() || !this.hasData()) { 
            throw Error(`服务器连接异常,错误代码：${ this.status }`)
        };
        if (!this.data.isSuccess()) {
            throw Error(`服务器处理异常，错误信息：${ this.data.msg }`)
        };
        return this.data.getData();
    }
}