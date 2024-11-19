import React from "react";
// import FeaturedCard from "../../components/FeaturedCard";
import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import HomeHeadingText from "../../components/HomeHeadingText";
import { IoCartOutline } from "react-icons/io5";

const FeaturedCard = ({ image, name, price }) => {
  return (
    <Box width={"full"} borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src={image}
        alt={name}
        width="100%"
        height="250px"
        objectFit="cover"
      />

      <Box p="4">
        <Flex justify="space-between" align="center">
          <Box>
            <Text fontSize="xl" fontWeight="bold" isTruncated>
              {name}
            </Text>
            <Text fontSize="lg">${price}</Text>
          </Box>
          <IconButton
            aria-label="Add to Cart"
            icon={<IoCartOutline />}
            size="lg"
            variant="unstyled"
            _hover={{ transform: "scale(1.2)" }}
            _active={{ transform: "scale(1)" }}
            minWidth="auto"
          />
        </Flex>
      </Box>
    </Box>
  );
};

const FeaturedProduct = () => {
  const products = [
    {
      image: "/assets/product/shop-1.jpg",
      name: "Product 1",
      price: 29.99,
    },
    {
      image: "/assets/product/shop-2.jpg",
      name: "Product 2",
      price: 49.99,
    },
    {
      image: "/assets/product/shop-3.jpg",
      name: "Product 3",
      price: 19.99,
    },
    {
      image: "/assets/product/shop-4.jpg",
      name: "Product 4",
      price: 39.99,
    },
    {
      image: "/assets/product/shop-3.jpg",
      name: "Product 5",
      price: 19.99,
    },
    {
      image: "/assets/product/shop-1.jpg",
      name: "Product 6",
      price: 29.99,
    },
    {
      image: "/assets/product/shop-2.jpg",
      name: "Product 7",
      price: 49.99,
    },
    {
      image: "/assets/product/shop-4.jpg",
      name: "Product 8",
      price: 39.99,
    },
  ];

  return (
    <>
      <Box mt={6} width={{ base: "100%", lg: "70%" }} marginX="auto">
        <HomeHeadingText
          heading="Featured Products"
          paragraph="Our Featured Products"
        />
        <Flex flexWrap="wrap" justifyContent="space-between">
          {products.map((product, index) => (
            <Box
              key={index}
              mb={5}
              flexBasis={{ base: "100%", sm: "50%", md: "25%" }}
              p={3}
            >
              <FeaturedCard
                image={product.image}
                name={product.name}
                price={product.price}
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default FeaturedProduct;
