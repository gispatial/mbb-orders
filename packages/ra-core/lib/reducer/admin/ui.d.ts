import { Reducer } from 'redux';
export interface UIState {
    readonly automaticRefreshEnabled: boolean;
    readonly sidebarOpen: boolean;
    readonly optimistic: boolean;
    readonly viewVersion: number;
}
declare const uiReducer: Reducer<UIState>;
export default uiReducer;
