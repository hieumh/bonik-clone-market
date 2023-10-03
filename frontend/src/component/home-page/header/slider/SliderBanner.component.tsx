import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import TemplateBanner from "./TemplateBanner.component";
import { Box, Radio, Stack } from "@mui/material";
import { ITemplateBanner } from "./banner.model";

interface ISliderBannerProps {
  banners?: ITemplateBanner[];
}

const SliderBanner: FC<ISliderBannerProps> = ({ banners = [] }) => {
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
    const interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentId]);

  return (
    <Box position="relative">
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
          {banners.map((banner, idx) => (
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
