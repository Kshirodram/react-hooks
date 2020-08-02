import React, {
  createContext,
  useState,
  useCallback,
  useRef,
  useEffect,
  useMemo,
} from "react";

import Header from "./Header";
import Body from "./Body";
import Icon from "./Icon";

export const ExpandableContext = createContext();
const { Provider } = ExpandableContext;

const Expandable = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );
  const componentJustMounted = useRef(true);
  useEffect(() => {
    if (!componentJustMounted) {
      // console.log("@@@@@@", onExpand, expanded)
      // onExpand(expanded);
    }
    componentJustMounted.current = false;
  }, [expanded]);
  const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);
  console.log(value);
  return <Provider value={value}>{children}</Provider>;
};

Expandable.Header = Header;
Expandable.Body = Body;
Expandable.Icon = Icon;

export default Expandable;
