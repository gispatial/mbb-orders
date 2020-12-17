export declare const TOGGLE_SIDEBAR = "RA/TOGGLE_SIDEBAR";
export interface ToggleSidebarAction {
    readonly type: typeof TOGGLE_SIDEBAR;
}
export declare const toggleSidebar: () => ToggleSidebarAction;
export declare const SET_SIDEBAR_VISIBILITY = "RA/SET_SIDEBAR_VISIBILITY";
export interface SetSidebarVisibilityAction {
    readonly type: typeof SET_SIDEBAR_VISIBILITY;
    readonly payload: boolean;
}
export declare const setSidebarVisibility: (isOpen: boolean) => SetSidebarVisibilityAction;
export declare const REFRESH_VIEW = "RA/REFRESH_VIEW";
export interface RefreshViewAction {
    readonly type: typeof REFRESH_VIEW;
}
export declare const refreshView: () => RefreshViewAction;
export declare const SET_AUTOMATIC_REFRESH = "RA/SET_AUTOMATIC_REFRESH";
export interface SetAutomaticRefreshAction {
    readonly type: typeof SET_AUTOMATIC_REFRESH;
    readonly payload: boolean;
}
export declare const setAutomaticRefresh: (enabled: boolean) => {
    type: string;
    payload: boolean;
};
