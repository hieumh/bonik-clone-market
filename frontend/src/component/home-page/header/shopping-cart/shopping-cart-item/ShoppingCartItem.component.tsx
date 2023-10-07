import { FC, useState } from "react";
import { Link, IconButton, Stack, Typography } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { COLORS } from "@/constants/ui.constant";
import { useMutation } from "@tanstack/react-query";
import { updateProductQuantity } from "../shopping-cart.helper";
import { IShoppingCart, IShoppingCartView } from "@/model/shopping-cart.model";
import { SOMETHING_WENT_WRONG } from "@/constants/common.constant";
import { toast } from "react-toastify";

interface IShoppingCartItemProps extends IShoppingCartView {
  removeCart: (id: number) => void;
}

const ShoppingCartItem: FC<IShoppingCartItemProps> = ({
  id,
  quantity: initQuantity,
  srcImg,
  name,
  price,
  removeCart,
}) => {
  const [quantity, setQuantity] = useState<number>(initQuantity);
  const { mutateAsync: updateQuantity } = useMutation<
    IShoppingCart,
    unknown,
    { id: number; quantity: number }
  >({
    mutationFn: ({ id, quantity }) => updateProductQuantity(id, quantity),
    onSuccess: (data) => {
      setQuantity(data.quantity);
    },
    onError: () => {
      toast.error(SOMETHING_WENT_WRONG);
    },
  });

  const handleAddItem = () => {
    updateQuantity({ id, quantity: quantity + 1 });
  };

  const handleSubItem = () => {
    updateQuantity({ id, quantity: quantity - 1 });
  };

  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      borderBottom={`.0625rem solid ${COLORS.border}`}
      borderTop={`.0625rem solid ${COLORS.border}`}
      minHeight="7.75rem"
      padding="1rem"
      justifyContent="space-between"
    >
      <Stack flexDirection="column" justifyContent="center" alignItems="center">
        <IconButton onClick={handleAddItem}>
          <AddCircleOutlineOutlinedIcon />
        </IconButton>

        <Typography variant="h2">{quantity}</Typography>

        <IconButton onClick={handleSubItem} disabled={quantity <= 1}>
          <RemoveCircleOutlineOutlinedIcon />
        </IconButton>
      </Stack>

      <Link href={`/product/${name}`}>
        <img
          src={srcImg}
          alt={name}
          style={{
            width: "4.75rem",
            height: "4.75rem",
          }}
        />
      </Link>

      <Stack>
        <Typography variant="subtitle1" fontWeight={600}>
          {name}
        </Typography>

        <Typography variant="body2">{`${price} US$ x ${quantity}`}</Typography>

        <Typography
          variant="h4"
          color={COLORS.primary}
        >{`${price} US$`}</Typography>
      </Stack>

      <IconButton onClick={() => removeCart(id)}>
        <CloseIcon />
      </IconButton>
    </Stack>
  );
};

export default ShoppingCartItem;
