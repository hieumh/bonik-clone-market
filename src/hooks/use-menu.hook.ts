import { THandler, TSetAction } from '@/model/common.model';
import { MouseEvent, useState } from 'react';

interface IReturnValue {
  anchorEl: HTMLElement | null;
  setAnchorEl: TSetAction<HTMLElement | null>;
  isOpen: boolean;
  handleClose: THandler;
  handleOpen: THandler;
}

const useMenu = (): IReturnValue => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false); // use a separate state for open/close

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    console.log('enter');
    setAnchorEl(event.currentTarget);
    setIsOpen(true); // set open state to true
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false); // set open state to false
  };

  return { anchorEl, isOpen, setAnchorEl, handleOpen, handleClose };
};

export default useMenu;
