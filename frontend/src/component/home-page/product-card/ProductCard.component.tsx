import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { COLORS } from "@/constants/ui.constant";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createShoppingCart,
  removeShoppingCart,
  updateProductQuantity,
} from "../header/shopping-cart/shopping-cart.helper";
import { toast } from "react-toastify";
import { SOMETHING_WENT_WRONG } from "@/constants/common.constant";
import { IFlashDeal } from "@/model/flash-deal.model";
import { IShoppingCart } from "@/model/shopping-cart.model";
import { roundForCost } from "@/helpers/common.helper";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { SHOPPING_CART_KEY } from "@/constants/server-state.constant";
import useModal from "@/hooks/use-modal.hook";
import Notification from "@/common/notification/Notification.component";

interface IProductCard {
  flashDealProduct: IFlashDeal;
  cartProduct?: IShoppingCart;
}

const ProductCard: FC<IProductCard> = ({ flashDealProduct, cartProduct }) => {
  const queryClient = useQueryClient();

  const [quantity, setQuantity] = useState<number>(cartProduct?.quantity || 0);
  const isAddProductToCart = quantity === 0;
  const { openModal, open, closeModal } = useModal(false);

  const { isLoading, mutateAsync: createShoppingCartAsync } = useMutation({
    mutationFn: () => createShoppingCart(flashDealProduct.productId),
    onSuccess: (data) => {
      setQuantity(data.quantity);
      toast.success("Update quantity successfully");
      const currentCartProducts = queryClient.getQueryData([
        SHOPPING_CART_KEY,
      ]) as IShoppingCart[];

      queryClient.setQueryData<IShoppingCart[]>([SHOPPING_CART_KEY], [
        ...currentCartProducts,
        data,
      ] as IShoppingCart[]);
    },
    onError: () => {
      toast.error(SOMETHING_WENT_WRONG);
    },
  });

  const { mutateAsync: updateShoppingCartAsync } = useMutation({
    mutationFn: (quantity: number) =>
      updateProductQuantity(cartProduct!.cartProductId, quantity),
    onSuccess: (data: IShoppingCart) => {
      queryClient.setQueryData(
        [SHOPPING_CART_KEY],
        (oldData: IShoppingCart | undefined) =>
          oldData?.cartProductId === data?.cartProductId ? data : oldData
      );
      setQuantity(data.quantity);
      toast.success("Update quantity successfully");
    },
    onError: () => {
      toast.error(SOMETHING_WENT_WRONG);
    },
  });

  const { mutateAsync: deleteShoppingCart } = useMutation({
    mutationFn: () => removeShoppingCart(cartProduct!.cartProductId),
    onSuccess: (data: IShoppingCart) => {
      const currentCartProducts = queryClient.getQueryData([
        SHOPPING_CART_KEY,
      ]) as IShoppingCart[];

      queryClient.setQueryData(
        [SHOPPING_CART_KEY],
        currentCartProducts.filter(
          (cartProduct) =>
            cartProduct.cartProductId !== cartProduct!.cartProductId
        )
      );
      setQuantity(0);
      toast.success("Delete successfully");
    },
    onError: () => {
      toast.error(SOMETHING_WENT_WRONG);
    },
  });

  const handleAddQuantity = () => {
    if (quantity === 0) {
      createShoppingCartAsync();
      return;
    }

    updateShoppingCartAsync(quantity + 1);
  };

  const handleSubQuantity = () => {
    if (quantity - 1 === 0) {
      openModal();
      return;
    }

    updateShoppingCartAsync(quantity - 1);
  };

  return (
    <Card
      sx={{
        width: "17.625rem",
        mx: ".75rem",
        minHeight: "24.5rem",
      }}
    >
      <CardMedia
        component="img"
        image="https://cdn.pixabay.com/photo/2023/08/26/15/21/mushroom-8215265_1280.jpg"
        sx={{
          height: "17.625rem",
        }}
      />

      <CardContent
        sx={{
          padding: "1rem",
        }}
      >
        <Typography
          fontSize=".875rem"
          noWrap
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {flashDealProduct.product.productName}
        </Typography>

        <Rating
          size="small"
          name="rating"
          defaultValue={flashDealProduct.product.rating}
          precision={0.5}
          readOnly
        />

        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack flexDirection="row" gap=".375rem">
            {/* sale price */}
            <Typography color={COLORS.primary}>
              {roundForCost(flashDealProduct.product.price)} US$
            </Typography>

            {/* real price */}
            <Typography
              color={COLORS.textGrey}
              sx={{
                textDecoration: "line-through",
              }}
            >
              {roundForCost(flashDealProduct.product.price)} US$
            </Typography>
          </Stack>

          {isAddProductToCart ? (
            <Button disabled={isLoading} onClick={handleAddQuantity}>
              <AddIcon />
            </Button>
          ) : (
            <Stack
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Button disabled={isLoading} onClick={handleAddQuantity}>
                <AddCircleOutlineOutlinedIcon />
              </Button>

              <Typography variant="h2">{quantity}</Typography>

              <Button disabled={isLoading} onClick={handleSubQuantity}>
                <RemoveCircleOutlineOutlinedIcon />
              </Button>
            </Stack>
          )}
        </Stack>
      </CardContent>

      <Notification
        title="Delete this product in shopping cart"
        content="Do you want delete this item in shopping cart?"
        onClose={closeModal}
        open={open}
        actions={[
          {
            title: "Yes",
            ButtonProps: {
              variant: "contained",
            },
            onClick: deleteShoppingCart,
          },
          {
            title: "No",
            ButtonProps: {
              variant: "outlined",
            },
            onClick: closeModal,
          },
        ]}
      />
    </Card>
  );
};

export default ProductCard;
