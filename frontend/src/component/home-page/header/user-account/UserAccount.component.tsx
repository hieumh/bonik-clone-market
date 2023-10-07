import { FC } from "react";
import PersonIcon from "@mui/icons-material/Person";
import StyledIconButton from "@/common/button/StyledIconButton.component";
import useModal from "@/hooks/use-modal.hook";
import { Dialog } from "@mui/material";
import LoginForm from "./login-dialog/LoginForm.component";

const UserAccount: FC = () => {
  const { open, closeModal, openModal } = useModal(false);

  return (
    <div>
      <StyledIconButton onClick={openModal}>
        <PersonIcon />
      </StyledIconButton>

      <Dialog open={open}>
        <LoginForm closeDialog={closeModal} />
      </Dialog>
    </div>
  );
};

export default UserAccount;
