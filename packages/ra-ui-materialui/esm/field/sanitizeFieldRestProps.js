var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var sanitizeFieldRestProps = function (_a) {
    var addLabel = _a.addLabel, allowEmpty = _a.allowEmpty, basePath = _a.basePath, cellClassName = _a.cellClassName, className = _a.className, emptyText = _a.emptyText, formClassName = _a.formClassName, fullWidth = _a.fullWidth, headerClassName = _a.headerClassName, label = _a.label, linkType = _a.linkType, link = _a.link, locale = _a.locale, record = _a.record, resource = _a.resource, sortable = _a.sortable, sortBy = _a.sortBy, sortByOrder = _a.sortByOrder, source = _a.source, textAlign = _a.textAlign, translateChoice = _a.translateChoice, props = __rest(_a, ["addLabel", "allowEmpty", "basePath", "cellClassName", "className", "emptyText", "formClassName", "fullWidth", "headerClassName", "label", "linkType", "link", "locale", "record", "resource", "sortable", "sortBy", "sortByOrder", "source", "textAlign", "translateChoice"]);
    return props;
};
export default sanitizeFieldRestProps;
