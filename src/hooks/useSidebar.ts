import { useSidebarStore } from "../store/Sidebar/useSidebarStore"

export const useSidebar = () => {
    const column = useSidebarStore(state => state.column)
    const setColum = useSidebarStore(state => state.setColumn)

    const collapseColumn = () => {
        setColum()
    }

    return {
        column,
        collapseColumn
    }
}