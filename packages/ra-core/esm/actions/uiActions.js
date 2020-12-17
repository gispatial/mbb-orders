export var TOGGLE_SIDEBAR = 'RA/TOGGLE_SIDEBAR';
export var toggleSidebar = function () { return ({
    type: TOGGLE_SIDEBAR,
}); };
export var SET_SIDEBAR_VISIBILITY = 'RA/SET_SIDEBAR_VISIBILITY';
export var setSidebarVisibility = function (isOpen) { return ({
    type: SET_SIDEBAR_VISIBILITY,
    payload: isOpen,
}); };
export var REFRESH_VIEW = 'RA/REFRESH_VIEW';
export var refreshView = function () { return ({
    type: REFRESH_VIEW,
}); };
export var SET_AUTOMATIC_REFRESH = 'RA/SET_AUTOMATIC_REFRESH';
export var setAutomaticRefresh = function (enabled) { return ({
    type: SET_AUTOMATIC_REFRESH,
    payload: enabled,
}); };
