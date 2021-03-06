import { FC } from 'react';
import { ChipProps } from '@material-ui/core/Chip';
import { PublicFieldProps, InjectedFieldProps } from './types';
export declare const ChipField: FC<ChipFieldProps>;
export interface ChipFieldProps extends PublicFieldProps, InjectedFieldProps, Omit<ChipProps, 'label'> {
}
export default ChipField;
