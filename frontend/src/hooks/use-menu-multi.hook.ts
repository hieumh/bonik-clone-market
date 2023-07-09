import { THandler } from "@/model/common.model";
import { useState, MouseEventHandler, useRef, RefObject } from "react";

interface IReturnModel<T extends HTMLElement> {
  parentRef: RefObject<T>;
  isHover: boolean;
  isHoverSub: boolean;
  shouldShowSubMenu: boolean;
  currentMenuIdx: number | null;

  handleEnterParent: THandler<MouseEventHandler<T>>;
  handleLeaveParent: THandler;

  handleEnterChild: THandler;
  handleLeaveChild: THandler;
}

const useMenuMulti = <T extends HTMLElement>(): IReturnModel<T> => {
  const parentRef = useRef<T>(null);

  const [isHover, setIsHover] = useState<boolean>(false);
  const [isHoverSub, setHoverSub] = useState<boolean>(false);
  const [currentMenuIdx, setCurrentMenuIdx] = useState<number | null>(null);

  const shouldShowSubMenu =
    (isHover && !!currentMenuIdx) || (isHoverSub && !!currentMenuIdx);

  const handleEnterParent =
    (idx: number): MouseEventHandler<T> =>
    () => {
      setCurrentMenuIdx(idx + 1);
      setIsHover(true);
    };

  const handleLeaveParent: MouseEventHandler<T> = () => {
    if (isHoverSub) return;

    setIsHover(false);
  };

  const handleEnterChild = () => {
    setHoverSub(true);
  };

  const handleLeaveChild = () => {
    setHoverSub(false);
  };

  return {
    parentRef,

    isHover,
    isHoverSub,
    shouldShowSubMenu,
    currentMenuIdx,

    handleEnterParent,
    handleLeaveParent,
    handleEnterChild,
    handleLeaveChild,
  };
};

export default useMenuMulti;
