import ReferenceArrayFieldController from './ReferenceArrayFieldController';
import ReferenceFieldController from './ReferenceFieldController';
import ReferenceManyFieldController from './ReferenceManyFieldController';
import getResourceLinkPath, { LinkToType } from './getResourceLinkPath';
import useReferenceArrayFieldController from './useReferenceArrayFieldController';
import useReferenceManyFieldController from './useReferenceManyFieldController';
import { ListControllerProps } from '../useListController';
export declare type ReferenceArrayProps = ListControllerProps;
export declare type ReferenceManyProps = ListControllerProps;
export type { LinkToType };
export { useReferenceArrayFieldController, ReferenceArrayFieldController, ReferenceFieldController, getResourceLinkPath, useReferenceManyFieldController, ReferenceManyFieldController, };