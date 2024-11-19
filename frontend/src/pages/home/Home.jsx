import React from "react";
import { Box, Button, Divider, Heading, Text, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Global } from "@emotion/react";
import FeaturedProduct from "../../section/_home/FeaturedProduct";
import Category from "../../section/_home/Category";

const HomeHeading = ({ mainHeading, subHeading }) => {
  return (
    <VStack spacing={4} align="flex-start" color="white">
      <Heading as="h1" size="xl">
        {mainHeading}
      </Heading>
      <Text fontSize="lg">{subHeading}</Text>
    </VStack>
  );
};

const HomeButton = ({ button }) => {
  return <Button>{button}</Button>;
};

const CarouselItem = ({
  backgroundImage,
  mainHeading,
  subHeading,
  buttonText,
}) => {
  return (
    <Box
      height={{ base: "300px", md: "400px", lg: "500px" }}
      width="100%"
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width={{ base: "90%", lg: "70%" }}
        textAlign="left"
        padding="20px"
        color="white"
        borderRadius="md"
      >
        <HomeHeading mainHeading={mainHeading} subHeading={subHeading} />
        <HomeButton button={buttonText} />
      </Box>
    </Box>
  );
};

const Home = () => {
  const items = [
    {
      backgroundImage: "/assets/carousel/heroImage.webp",
      mainHeading: "Upto 50% discount",
      subHeading: "summerlook - 2024",
      buttonText: "Click for more",
    },
    {
      backgroundImage: "/assets/carousel/heroImage2.webp",
      mainHeading: "New Arrivals",
      subHeading: "winter collection - 2024",
      buttonText: "Shop Now",
    },
    {
      backgroundImage: "/assets/carousel/heroImage3.webp",
      mainHeading: "Exclusive Offer",
      subHeading: "limited time only",
      buttonText: "Discover More",
    },
  ];

  return (
    <>
      <Box position="relative" width="100%" overflow="hidden">
        <Global
          styles={`
          .swiper-button-next, .swiper-button-prev{
            color: #4a5568; 
          }
          .swiper-pagination-bullet-active{
          background-color: #4a5568;
          }
        `}
        />
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <CarouselItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Category />
      <Divider />
      <FeaturedProduct />
    </>
  );
};

export default Home;
