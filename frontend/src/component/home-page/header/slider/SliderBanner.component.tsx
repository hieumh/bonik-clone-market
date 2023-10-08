import { ChangeEvent, FC, useEffect, useMemo, useRef, useState } from "react";
import TemplateBanner from "./TemplateBanner.component";
import { Box, Radio, Stack } from "@mui/material";
import { IBannerResponse, ITemplateBanner } from "./banner.model";
import { useQuery } from "@tanstack/react-query";
import { getBanner } from "./slider.helper";
import { BANNER_KEY } from "@/constants/server-state.constant";

interface ISliderBannerProps {}

const SliderBanner: FC<ISliderBannerProps> = () => {
  const { data: banners = [], isFetched } = useQuery<IBannerResponse[]>({
    queryFn: getBanner,
    queryKey: [BANNER_KEY],
    refetchOnWindowFocus: false,
    initialData: [],
  });
  const bannerRemapped = useMemo(() => {
    return banners.map(
      (banner) =>
        ({
          type: "vertical",
          title: banner.title,
          description: banner.description,
          href: banner?.product?.srcImg || "",
          productId: banner.productId,
        } as ITemplateBanner)
    );
  }, [banners]);

  const [transform, setTransform] = useState<number>(0);
  const parentBoxRef = useRef<HTMLDivElement>(null);
  const [currentId, setCurrentId] = useState<number>(0);

  const handleChangeSlide = (event: ChangeEvent<HTMLInputElement>) => {
    const idx = +event.target.value;
    setCurrentId(idx);
    showSlide(idx);
  };

  const showSlide = (id: number) => {
    setTransform(id * (parentBoxRef.current?.clientWidth || 0));
  };

  const nextSlide = () => {
    const elementIdx = (currentId + 1) % banners.length;
    showSlide(elementIdx);
    setCurrentId(elementIdx);
  };

  useEffect(() => {
    if (!isFetched) {
      return;
    }
    const interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentId, isFetched]);

  return (
    <Box position="relative" paddingBottom="2.625rem" minHeight="30rem">
      <Stack
        sx={{
          overflow: "hidden",
        }}
        ref={parentBoxRef}
      >
        <Stack
          flexDirection="row"
          sx={{
            transition: "transform 0.3s ease",
            transform: `translateX(-${transform}px)`,
          }}
        >
          {bannerRemapped.map((banner, idx) => (
            <TemplateBanner key={idx} {...banner} />
          ))}
        </Stack>
      </Stack>

      <Stack
        flexDirection="row"
        justifyContent="center"
        position="absolute"
        bottom="1.25rem"
        right="0"
        left="0"
      >
        {Array(banners.length)
          .fill(null)
          .map((_, id) => (
            <Radio
              checked={currentId === id}
              onChange={handleChangeSlide}
              value={id}
              name="radio-buttons"
              inputProps={{ "aria-label": String(id) }}
            />
          ))}
      </Stack>
    </Box>
  );
};

export default SliderBanner;
