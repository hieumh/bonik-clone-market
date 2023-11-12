import { THandler } from "@/model/common.model";
import {
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  SxProps,
} from "@mui/material";
import { FC } from "react";

interface INotificationAction {
  title: string;
  onClick: THandler;
  sx?: SxProps;
  ButtonProps?: Omit<ButtonProps, "onClick" | "sx">;
}

interface INotificationProps {
  title: string;
  content: string;
  onClose: THandler;
  open: boolean;
  actions: INotificationAction[];
}

const Notification: FC<INotificationProps> = ({
  title,
  content,
  onClose,
  open,
  actions,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-label="notification-need-handler"
    >
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>{content}</DialogContent>

      <DialogActions>
        {actions?.map((action) => (
          <Button
            sx={action.sx}
            onClick={action.onClick}
            {...action.ButtonProps}
          >
            {action.title}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
};

export default Notification;
