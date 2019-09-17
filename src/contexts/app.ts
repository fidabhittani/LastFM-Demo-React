import { createContext } from "react";

const AppContext = createContext({});
const { Provider, Consumer } = AppContext;

export const AppProvider = Provider;
export const AppConsumer = Consumer;

export default AppContext;
