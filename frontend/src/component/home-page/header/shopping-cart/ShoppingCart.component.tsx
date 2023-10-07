import { FC, useMemo, useState } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import StyledIconButton from "@/common/button/StyledIconButton.component";
import useModal from "@/hooks/use-modal.hook";
import {
  Button,
  CircularProgress,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingCartItem from "./shopping-cart-item/ShoppingCartItem.component";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IPaginationResult } from "@/model/common.model";
import { AxiosError } from "axios";
import { getAllCart, removeShoppingCart } from "./shopping-cart.helper";
import { IShoppingCart, IShoppingCartView } from "@/model/shopping-cart.model";
import SomethingWentWrong from "@/common/something-went-wrong-banner/SomethingWentWrong.component";
import NoDataFound from "@/common/no-data-found/NoDataFound.component";
import { toast } from "react-toastify";
import { SOMETHING_WENT_WRONG } from "@/constants/common.constant";
import { SHOPPING_CART_KEY } from "@/constants/server-state.constant";

const ShoppingCart: FC = () => {
  const queryClient = useQueryClient();

  const { openModal, open, closeModal } = useModal(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const {
    data: shoppingCarts,
    isLoading,
    isSuccess,
  } = useQuery<IPaginationResult<IShoppingCart>>({
    queryFn: getAllCart,
    queryKey: [SHOPPING_CART_KEY],
    onError: (err) => {
      setError(err as AxiosError);
    },
    refetchOnWindowFocus: false,
  });
  const { mutateAsync: removeCart } = useMutation<
    IShoppingCart,
    unknown,
    number
  >({
    mutationFn: (id) => removeShoppingCart(id),
    onSuccess: (data) => {
      queryClient.setQueryData(
        [SHOPPING_CART_KEY],
        (prev: IPaginationResult<IShoppingCart> | undefined) =>
          ({
            ...prev,
            items: (prev?.items || []).filter(
              (shoppingCart) =>
                shoppingCart.cartProductId !== data.cartProductId
            ),
          } as IPaginationResult<IShoppingCart>)
      );
    },
    onError: () => {
      toast.error(SOMETHING_WENT_WRONG);
    },
  });

  const handleRemoveCart = (id: number) => {
    removeCart(id);
  };

  const shoppingCartRemapped: IShoppingCartView[] = useMemo(() => {
    return (shoppingCarts?.items || []).map((shoppingCart) => ({
      id: shoppingCart.cartProductId,
      name: shoppingCart.product.productName,
      quantity: shoppingCart.quantity,
      price: shoppingCart.product.price,
      srcImg: shoppingCart.product.srcImg,
    }));
  }, [shoppingCarts]);

  const totalPrice = useMemo(
    () =>
      shoppingCartRemapped.reduce(
        (sum, currentElement) => sum + currentElement.price,
        0
      ),
    [shoppingCartRemapped]
  );

  return (
    <div>
      <StyledIconButton onClick={openModal}>
        <ShoppingBagIcon />
      </StyledIconButton>

      <Drawer
        anchor="right"
        open={open}
        onClose={closeModal}
        sx={{ position: "relative" }}
      >
        <Stack
          flexDirection="column"
          minWidth="21.25rem"
          justifyContent="space-between"
          height="100vh"
        >
          {isLoading && (
            <Stack justifyContent="center" alignItems="center">
              <CircularProgress />
            </Stack>
          )}

          {isSuccess && !!shoppingCartRemapped?.length ? (
            <>
              <Stack overflow="auto">
                <Stack
                  flexDirection="row"
                  minHeight="74px"
                  marginX="20px"
                  alignItems="center"
                  gap="6px"
                >
                  <ShoppingBagOutlinedIcon />

                  <Typography variant="h3">3 Item</Typography>
                </Stack>

                {shoppingCartRemapped?.map((cart) => (
                  <ShoppingCartItem
                    key={cart.id}
                    {...cart}
                    removeCart={handleRemoveCart}
                  />
                ))}
              </Stack>

              <Stack position="sticky" bottom="0" padding="1rem" gap=".75rem">
                <Button variant="contained" href="/checkout">
                  Check Now ({totalPrice}
                  US$)
                </Button>

                <Button variant="outlined" href="/view-cart">
                  View Cart
                </Button>
              </Stack>
            </>
          ) : (
            <NoDataFound />
          )}

          {error && <SomethingWentWrong />}
        </Stack>
      </Drawer>
    </div>
  );
};

export default ShoppingCart;
