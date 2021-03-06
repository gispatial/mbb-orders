import { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { TabProps as MuiTabProps } from '@material-ui/core/Tab';
import { Record } from 'ra-core';
/**
 * Tab element for the SimpleShowLayout.
 *
 * The `<Tab>` component accepts the following props:
 *
 * - label: The string displayed for each tab
 * - icon: The icon to show before the label (optional). Must be a component.
 * - path: The string used for custom urls
 *
 * @example
 *     // in src/posts.js
 *     import * as React from "react";
 *     import FavoriteIcon from '@material-ui/icons/Favorite';
 *     import PersonPinIcon from '@material-ui/icons/PersonPin';
 *     import { Show, TabbedShowLayout, Tab, TextField } from 'react-admin';
 *
 *     export const PostShow = (props) => (
 *         <Show {...props}>
 *             <TabbedShowLayout>
 *                 <Tab label="Content" icon={<FavoriteIcon />}>
 *                     <TextField source="title" />
 *                     <TextField source="subtitle" />
 *                </Tab>
 *                 <Tab label="Metadata" icon={<PersonIcon />} path="metadata">
 *                     <TextField source="category" />
 *                </Tab>
 *             </TabbedShowLayout>
 *         </Show>
 *     );
 *
 *     // in src/App.js
 *     import * as React from "react";
 *     import { Admin, Resource } from 'react-admin';
 *
 *     import { PostShow } from './posts';
 *
 *     const App = () => (
 *         <Admin dataProvider={...}>
 *             <Resource name="posts" show={PostShow} />
 *         </Admin>
 *     );
 *     export default App;
 */
declare const Tab: {
    ({ basePath, children, contentClassName, context, className, icon, label, record, resource, value, ...rest }: TabProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        contentClassName: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        context: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        label: PropTypes.Validator<string>;
        path: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<string>;
    };
};
export interface TabProps extends MuiTabProps {
    basePath?: string;
    children: ReactNode;
    contentClassName?: string;
    context?: 'header' | 'content';
    className?: string;
    icon?: ReactElement;
    label: string;
    path?: string;
    record?: Record;
    resource?: string;
    value?: string;
}
export default Tab;
