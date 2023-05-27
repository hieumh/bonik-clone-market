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
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isOpen = Boolean(anchorEl);

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    console.log('mouse leave');
    setAnchorEl(null);
  };

  return {
    anchorEl,
    setAnchorEl,
    isOpen,
    handleOpen,
    handleClose,
  };
};

export default useMenu;
