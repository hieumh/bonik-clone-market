import { useState } from 'react';
import { THandler } from '../model/common.model';

interface IReturnUseModal {
  open: boolean;
  openModal: THandler;
  closeModal: THandler;
  toggleModal: THandler;
}

const useModal = (initState: boolean): IReturnUseModal => {
  const [open, setOpen] = useState<boolean>(initState || false);

  const closeModal = () => {
    setOpen(true);
  };

  const openModal = () => {
    setOpen(false);
  };

  const toggleModal = () => {
    setOpen((prev) => !prev);
  };

  return {
    open,
    openModal,
    closeModal,
    toggleModal,
  };
};

export default useModal;
