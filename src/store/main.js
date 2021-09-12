import { reactive, readonly } from 'vue';
export class Store {
    constructor() {
        let data = this.data();
        this.setup(data);
        this.state = reactive(data);
    }
    setup(data) { }
    getState() {
        // TODO the readonly state should only be used in dev environment... otherwise just return the state
        return readonly(this.state);
    }
}
