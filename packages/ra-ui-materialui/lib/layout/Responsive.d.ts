import * as React from 'react';
import PropTypes from 'prop-types';
/**
 * @deprecated use useMediaQuery instead
 */
export declare const Responsive: {
    ({ xsmall, small, medium, large, width, ...rest }: ResponsiveProps): JSX.Element;
    propTypes: {
        xsmall: PropTypes.Requireable<PropTypes.ReactElementLike>;
        small: PropTypes.Requireable<PropTypes.ReactElementLike>;
        medium: PropTypes.Requireable<PropTypes.ReactElementLike>;
        large: PropTypes.Requireable<PropTypes.ReactElementLike>;
        width: PropTypes.Requireable<string>;
    };
};
export interface ResponsiveProps {
    xsmall?: JSX.Element;
    small?: JSX.Element;
    medium?: JSX.Element;
    large?: JSX.Element;
    width?: string;
}
declare const _default: React.ComponentType<Pick<Pick<ResponsiveProps, "width" | "medium" | "large" | "small" | "xsmall"> & Pick<PropTypes.InferProps<{
    xsmall: PropTypes.Requireable<PropTypes.ReactElementLike>;
    small: PropTypes.Requireable<PropTypes.ReactElementLike>;
    medium: PropTypes.Requireable<PropTypes.ReactElementLike>;
    large: PropTypes.Requireable<PropTypes.ReactElementLike>;
    width: PropTypes.Requireable<string>;
}>, never> & Pick<ResponsiveProps, never>, "medium" | "large" | "small" | "xsmall"> & import("@material-ui/core/withWidth").WithWidthProps>;
export default _default;
