export class SelectOptionData {
    constructor(data) {
        this.value = data.value;
        this.text = data.text;
    }
    value: number | string;
    text: string;
}

export class SelectList {
    constructor(list: any[]) {
        for (let i = 0; i< list.length; i++) {
            if(list[i].value === null) continue;
            let hasRepeat = false;
            for(let j = 0; j < this.list.length; j++) {
                if (list[i].value === this.list[j].value) {
                    this.list[j] = list[i];
                    hasRepeat = true;
                }
            }
            if (!hasRepeat) {
                this.list.push(list[i]);
            }
        }
    }

    list: SelectOptionData[];

    getDataByValue(value) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].value === value) {
                return this.list[i];
            }
        }
        return null;
    }

    getDataByText(text) {
        let retArr: SelectOptionData[] = [];
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].text === text) {
                retArr.push(this.list[i]);
            }
        }
        return retArr;
    }
}
