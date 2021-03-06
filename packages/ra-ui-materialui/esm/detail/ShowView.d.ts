import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { ShowControllerProps } from 'ra-core';
import { ShowProps } from '../types';
export declare const ShowView: {
    (props: ShowViewProps): JSX.Element;
    propTypes: {
        actions: PropTypes.Requireable<PropTypes.ReactElementLike>;
        aside: PropTypes.Requireable<PropTypes.ReactElementLike>;
        basePath: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        defaultTitle: PropTypes.Requireable<any>;
        hasEdit: PropTypes.Requireable<boolean>;
        hasList: PropTypes.Requireable<boolean>;
        loading: PropTypes.Requireable<boolean>;
        loaded: PropTypes.Requireable<boolean>;
        record: PropTypes.Requireable<object>;
        resource: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<any>;
        version: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    defaultProps: {
        classes: {};
        component: typeof Card;
    };
};
interface ShowViewProps extends ShowProps, Omit<ShowControllerProps, 'resource'> {
    children: ReactElement;
}
export {};
