export class ObjectResponse {
    
    constructor(success, data, msg) {
        this.success = success;
        this.data = data;
        this.msg = msg;
    }

    static set(success, data, msg) {
        return new ObjectResponse(success, data, msg);
    }
    
    reply(res) {
        res.json(this);
    }
}
