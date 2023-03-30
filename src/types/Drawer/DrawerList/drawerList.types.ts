import { View } from "../../Views/views.types";

export interface DrawerListProps {
    onClose: () => void;
    views: View[];
}