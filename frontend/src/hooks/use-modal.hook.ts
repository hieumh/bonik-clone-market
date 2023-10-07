import { useState } from "react";
import { THandler } from "../model/common.model";

interface IReturnUseModal {
  open: boolean;
  openModal: THandler;
  closeModal: THandler;
  toggleModal: THandler;
}

const useModal = (initState?: boolean): IReturnUseModal => {
  const [open, setOpen] = useState<boolean>(initState || false);

  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
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
