import { FC } from "react";
import PersonIcon from "@mui/icons-material/Person";
import StyledIconButton from "@/common/button/StyledIconButon.component";

const UserAccount: FC = () => {
  return (
    <div>
      <StyledIconButton>
        <PersonIcon />
      </StyledIconButton>
    </div>
  );
};

export default UserAccount;
