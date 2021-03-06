import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { DrawerProps } from '@material-ui/core';
import { ClassesOverride } from '../types';
export declare const DRAWER_WIDTH = 240;
export declare const CLOSED_DRAWER_WIDTH = 55;
declare const Sidebar: {
    (props: SidebarProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<PropTypes.ReactNodeLike>;
    };
};
declare const useStyles: (props: {
    open?: boolean;
}) => Record<"root" | "paper" | "docked" | "paperAnchorLeft" | "paperAnchorRight" | "paperAnchorTop" | "paperAnchorBottom" | "paperAnchorDockedLeft" | "paperAnchorDockedTop" | "paperAnchorDockedRight" | "paperAnchorDockedBottom" | "modal" | "drawerPaper", string>;
export interface SidebarProps extends DrawerProps {
    children: ReactElement;
    closedSize?: number;
    classes: ClassesOverride<typeof useStyles>;
    size?: number;
}
export default Sidebar;
