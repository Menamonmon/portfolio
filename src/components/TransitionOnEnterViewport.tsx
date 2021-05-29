import { useDisclosure } from "@chakra-ui/hooks";
import {
  CollapseProps,
  FadeProps,
  ScaleFadeProps,
  SlideFadeProps,
  SlideProps,
} from "@chakra-ui/transition";
import React, { useEffect, useRef } from "react";

interface Props {
  as: React.ComponentType<
    FadeProps | ScaleFadeProps | SlideFadeProps | SlideProps | CollapseProps
  >;
}

const TransitionOnEnterViewport: React.FC<Props> = ({
  children,
  as: TransitionComponent,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const selfRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      window.addEventListener("scroll", () => {
        const bounding = selfRef.current?.getBoundingClientRect();
        if (!bounding) return;
        if (
          bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.right <=
            (window.innerWidth || document.documentElement.clientWidth) &&
          bounding.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        ) {
          if (!isOpen) {
            onToggle();
          }
        }
      });
    }
  }, [onToggle, selfRef, isOpen]);
  return (
    <TransitionComponent in={isOpen}>
      <div ref={selfRef}>{children}</div>
    </TransitionComponent>
  );
};

export default TransitionOnEnterViewport;
