
class Queue {
    constructor(props){
        this.data = []
    }

    empty(){
        if (this.data.length === 0) {
            return true
        } else {
            return false
        }
    }

    first(){
        if(this.data.length === 0) {
            return false
        }
        return this.data[0];
    }
    enqueue(x){
        this.data.push(x);
    }
    dequeue(){
        if(this.data.length === 0) {
            return false
        }
        let tmp = [];
        for (let i = 1; i < this.data.length; i++){
            tmp.push(this.data[i])
        }
        this.data = tmp;

    }

    size(){
        if(this.data.empty()) {
            return false
        }
        return this.data.length;
    }
}
