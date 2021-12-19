import React, { FC, useMemo } from "react";
import { Transition } from "../transition/Transition";
import { useCSSStyle } from "../../hooks/use-css-style";
import { Ease } from "../../ease";
import { TransitionProps } from "../transition/TransitionProps.type";

type ZoomTransitionProps = TransitionProps & {
  delay?: number;
  ease?: string;
  from: number;
  to: number;
  transformOrigin?: string;
};

const ZoomTransition: FC<ZoomTransitionProps> = ({
  children,
  delay = 0,
  ease = Ease.ease,
  transformOrigin = "center",
  from,
  to,
  timeout,
  ...props
}) => {
  const defaultStyle = useCSSStyle(
    {
      transformOrigin: transformOrigin,
      willChange: "transform",
      transition: `transform ${timeout}ms ${ease} ${delay}ms`,
    },
    [timeout, ease, delay]
  );
  const transitionStyle = useMemo(
    () => ({
      entering: {
        transform: `scale(${to})`,
      },
      entered: {
        transform: `scale(${to})`,
      },
      exiting: {
        transform: `scale(${from})`,
      },
      exited: {
        transform: `scale(${from})`,
      },
    }),
    [from, to]
  );
  return (
    <Transition
      {...props}
      timeout={timeout}
      defaultStyle={defaultStyle}
      transitionStyle={transitionStyle}
      className={`ZoomInTransition`}
    >
      {children}
    </Transition>
  );
};

export { ZoomTransition };
