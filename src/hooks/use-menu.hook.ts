import { THandler, TSetAction } from "@/model/common.model";
import { MouseEvent, useState } from "react";

interface IReturnValue {
  anchorEl: HTMLElement | null;
  setAnchorEl: TSetAction<HTMLElement | null>;
  isOpen: boolean;
  handleClose: THandler;
  handleOpen: THandler;
}

const useMenu = (): IReturnValue => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  return { anchorEl, isOpen, setAnchorEl, handleOpen, handleClose };
};

export default useMenu;
