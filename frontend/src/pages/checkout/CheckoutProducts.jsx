import React from "react";
import {
  Box,
  Flex,
  Grid,
  Image,
  Text,
  VStack,
  Divider,
  Input,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const CheckoutProduct = ({ product }) => {
  const { name, image, price, quantity } = product;

  return (
    <Flex
      p={4}
      borderWidth="1px"
      borderRadius="md"
      mb={4}
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Image
        src={image}
        alt={name}
        boxSize="100px"
        objectFit="cover"
        borderRadius="md"
        mb={{ base: 4, md: 0 }}
        mr={{ md: 4 }}
      />

      <VStack align="start" spacing={1} flex="1">
        <Text fontWeight="bold" fontSize="lg">
          {name}
        </Text>
        <Text>Quantity: {quantity}</Text>
        <Text color={useColorModeValue("gray.600", "gray.400")}>
          ${price.toFixed(2)}
        </Text>
      </VStack>
    </Flex>
  );
};

const OrderSummary = ({ products }) => (
  <Box
    p={4}
    borderWidth="1px"
    borderRadius="md"
    bg={useColorModeValue("white", "gray.700")}
  >
    <Text fontSize="2xl" fontWeight="bold" mb={6}>
      Order Summary
    </Text>

    {products.map((product, index) => (
      <CheckoutProduct key={index} product={product} />
    ))}

    <Divider my={6} />

    <Flex justify="space-between" fontWeight="bold" fontSize="lg">
      <Text>Total:</Text>
      <Text>
        $
        {products
          .reduce((acc, product) => acc + product.price * product.quantity, 0)
          .toFixed(2)}
      </Text>
    </Flex>
  </Box>
);

const BillingDetails = () => (
  <Box
    className="hello"
    p={4}
    borderWidth="1px"
    borderRadius="md"
    bg={useColorModeValue("white", "gray.700")}
  >
    <Text fontSize="2xl" fontWeight="bold" mb={6}>
      Billing Details
    </Text>
    <VStack spacing={4} align="stretch">
      <Input placeholder="Full Name" />
      <Input placeholder="Email Address" />
      <Input placeholder="Phone Number" />
      <Input placeholder="Address" />
      <Input placeholder="City" />
      <Input placeholder="Postal Code" />
      <Button colorScheme="teal" size="lg" mt={4}>
        Proceed to Payment
      </Button>
    </VStack>
  </Box>
);

const CheckoutPage = () => {
  const products = [
    {
      name: "Product 1",
      image: "https://via.placeholder.com/200",
      price: 19.99,
      quantity: 1,
    },
    {
      name: "Product 2",
      image: "https://via.placeholder.com/200",
      price: 29.99,
      quantity: 2,
    },
    {
      name: "Product 2",
      image: "https://via.placeholder.com/200",
      price: 29.99,
      quantity: 2,
    },
    {
      name: "Product 2",
      image: "https://via.placeholder.com/200",
      price: 29.99,
      quantity: 2,
    },
  ];

  return (
    <Box mt={6} width={{ base: "100%", lg: "70%" }} marginX="auto">
      <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={6}>
        <BillingDetails />
        <OrderSummary products={products} />
      </Grid>
    </Box>
  );
};

export default CheckoutPage;
