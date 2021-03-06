import { Reducer } from 'redux';
interface ValidityRegistry {
    [key: string]: Date;
}
declare const validityReducer: Reducer<ValidityRegistry>;
export default validityReducer;
