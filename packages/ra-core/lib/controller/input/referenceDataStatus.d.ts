import { Record, Translate } from '../../types';
import { MatchingReferencesError } from './types';
interface GetStatusForInputParams {
    input: {
        value: any;
    };
    matchingReferences: Record[] | MatchingReferencesError;
    referenceRecord: Record;
    translate: Translate;
}
export declare const getStatusForInput: ({ input, matchingReferences, referenceRecord, translate, }: GetStatusForInputParams) => {
    waiting: boolean;
    error: string;
    warning: string;
    choices: Record[];
};
export declare const REFERENCES_STATUS_READY = "REFERENCES_STATUS_READY";
export declare const REFERENCES_STATUS_INCOMPLETE = "REFERENCES_STATUS_INCOMPLETE";
export declare const REFERENCES_STATUS_EMPTY = "REFERENCES_STATUS_EMPTY";
export declare const getSelectedReferencesStatus: (input: {
    value: any;
}, referenceRecords: Record[]) => "REFERENCES_STATUS_READY" | "REFERENCES_STATUS_INCOMPLETE" | "REFERENCES_STATUS_EMPTY";
interface GetStatusForArrayInputParams {
    input: {
        value: any;
    };
    matchingReferences: Record[] | MatchingReferencesError;
    referenceRecords: Record[];
    translate: Translate;
}
export declare const getStatusForArrayInput: ({ input, matchingReferences, referenceRecords, translate, }: GetStatusForArrayInputParams) => {
    waiting: boolean;
    error: string;
    warning: string;
    choices: Record[];
};
export {};
