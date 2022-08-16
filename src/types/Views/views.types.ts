export type View = {
    label: string;
    value: string;
    data: any;
    isEmpty: Boolean;
};

export interface FormField {
    name: string;
    label: string;
    isRequired: boolean;
}