import { FC } from "react";
import PersonIcon from "@mui/icons-material/Person";
import StyledIconButton from "@/common/button/StyledIconButton.component";
import useModal from "@/hooks/use-modal.hook";
import { Dialog } from "@mui/material";
import LoginForm from "./login-dialog/LoginForm.component";

const UserAccount: FC = () => {
  const { open, closeModal, openModal } = useModal(false);
  console.log("open here", open);

  return (
    <div>
      <StyledIconButton onClick={openModal}>
        <PersonIcon />
      </StyledIconButton>

      <Dialog open={open} onClose={closeModal}>
        <LoginForm />
      </Dialog>
    </div>
  );
};

export default UserAccount;
