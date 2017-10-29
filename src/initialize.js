
import {hireEmployee, selectEmployee} from './actors'
export default (store) => {
    store.dispatch(hireEmployee(0, "Jesse Robertson", null))
    store.dispatch(selectEmployee(0))
    return Promise.resolve(store)
}