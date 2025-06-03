import { createContext } from "react";

const ToolBoxContext = createContext({
    toolboxState: {},
    changeStroke: () => {},
    changeFill: () => {},
    changeSize: () => {},
});

export default ToolBoxContext;