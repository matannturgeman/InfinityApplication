import { FormField } from "./views.types";

export interface View {
  social: {
    instagram: string;
    facebook: string;
  };
  activity: {
    open: string;
    close: string;
    fromDay: string;
    toDay: string;
  };
  address: {
    text: string;
    lat: number;
    lng: number;
  };
  email: string;
  form: FormField[];
  phone: { owner: string; partner: string };
  text: string;
}

export interface ContactUsProps {
  view: View;
}
