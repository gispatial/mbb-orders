import PropTypes from 'prop-types';
import { Record } from 'ra-core';
/**
 * Action Toolbar for the Show view
 *
 * Internal component. If you want to add or remove actions for a Show view,
 * write your own ShowActions Component. Then, in the <Show> component,
 * use it in the `actions` prop to pass a custom component.
 *
 * @example
 *     import Button from '@material-ui/core/Button';
 *     import { TopToolbar, EditButton, Show } from 'react-admin';
 *
 *     const PostShowActions = ({ basePath, record, resource }) => (
 *         <TopToolbar>
 *             <EditButton basePath={basePath} record={record} />
 *             // Add your custom actions here //
 *             <Button color="primary" onClick={customAction}>Custom Action</Button>
 *         </TopToolbar>
 *     );
 *
 *     export const PostShow = (props) => (
 *         <Show actions={<PostShowActions />} {...props}>
 *             ...
 *         </Show>
 *     );
 */
declare const ShowActions: {
    ({ className, ...rest }: ShowActionsProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        data: PropTypes.Requireable<object>;
        hasEdit: PropTypes.Requireable<boolean>;
        hasList: PropTypes.Requireable<boolean>;
        resource: PropTypes.Requireable<string>;
    };
};
export interface ShowActionsProps {
    basePath?: string;
    className?: string;
    data?: Record;
    hasEdit?: boolean;
    hasList?: boolean;
    resource?: string;
}
export default ShowActions;
