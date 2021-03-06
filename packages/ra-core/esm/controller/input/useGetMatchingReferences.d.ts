import { PaginationPayload, SortPayload, Record, FilterPayload } from '../../types';
interface UseMatchingReferencesOption {
    reference: string;
    referenceSource: (resource: string, source: string) => string;
    resource: string;
    source: string;
    filter: FilterPayload;
    pagination: PaginationPayload;
    sort: SortPayload;
    id: string;
}
interface UseMatchingReferencesProps {
    error?: string;
    matchingReferences?: Record[];
    loading: boolean;
}
declare const _default: (props: UseMatchingReferencesOption) => UseMatchingReferencesProps;
export default _default;
