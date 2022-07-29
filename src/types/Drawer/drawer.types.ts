import { View } from "../Views/views.types";

export interface CustomDrawerProps {
    open: boolean;
    onClose: () => void;
    views: View[];
}