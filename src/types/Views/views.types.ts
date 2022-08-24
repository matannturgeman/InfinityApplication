import React from "react";

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
    helper?: string;
    type: string;
}

export type FormFields = FormField[];

export interface FormProps {
    form: FormFields;
    onSubmit: (e:  React.FormEvent) => void;
}
