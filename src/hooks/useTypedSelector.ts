import { useSelector, TypedUseSelectorHook } from "react-redux"
import { RootState } from "../core/storeNew"

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector