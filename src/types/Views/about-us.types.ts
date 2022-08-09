import { FormField } from "./views.types";

export interface View {
    activity: {
        open: string;
        close: string;
        fromDay: string;
        toDay: string;
    };
    address: {
        text: string;
        lat: number;
        long: number;
    }
    email: string;
    form: FormField[]
    phone: { owner: string; partner: string; }
    text: string;
}

export interface AboutUsProps {
    view: View;
}