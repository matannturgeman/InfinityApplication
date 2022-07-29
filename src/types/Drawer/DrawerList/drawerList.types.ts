import { View } from "../../Views/views.types";

export interface DrawerListProps {
    toggleDrawer: (event: KeyboardEvent | MouseEvent) => void;
    views: View[];
}