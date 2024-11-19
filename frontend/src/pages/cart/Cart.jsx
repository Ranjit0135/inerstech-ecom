import React, { useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Button,
  Input,
  Image,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { IoCloseCircleOutline } from "react-icons/io5";

const Cart = () => {
  const initialCartItems = [
    {
      id: 1,
      name: "Long Pant",
      price: 10,
      quantity: 2,
      image: "/assets/product/shop-1.jpg",
    },
    {
      id: 2,
      name: "Small Vest",
      price: 12,
      quantity: 1,
      image: "/assets/product/shop-2.jpg",
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Number(newQuantity) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Box mt={6} width={{ base: "100%", lg: "70%" }} marginX="auto">
      <Text fontSize="3xl" fontWeight="bold" mb={5}>
        Your Cart
      </Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th fontSize="lg">Product Name</Th>
            <Th fontSize="lg" isNumeric>
              Price
            </Th>
            <Th fontSize="lg" isNumeric>
              Quantity
            </Th>
            <Th fontSize="lg" isNumeric>
              Total
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {cartItems.map((item) => (
            <Tr key={item.id}>
              <Td fontSize="md" p={6}>
                <HStack spacing={4}>
                  <IconButton
                    variant="unstyled"
                    icon={<IoCloseCircleOutline />}
                    size="xl"
                    onClick={() => handleRemoveItem(item.id)}
                    aria-label="Remove item"
                  />
                  <Image
                    src={item.image}
                    alt={item.name}
                    boxSize="100px"
                    borderRadius="md"
                    objectFit="cover"
                  />
                  <Text>{item.name}</Text>
                </HStack>
              </Td>
              <Td fontSize="md" p={6} isNumeric>
                ${item.price}
              </Td>
              <Td fontSize="md" p={6} isNumeric>
                <Input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    handleQuantityChange(item.id, e.target.value)
                  }
                  width="60px"
                  textAlign="center"
                />
              </Td>
              <Td fontSize="md" p={6} isNumeric>
                ${item.price * item.quantity}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Box mt={4} textAlign="right">
        <Text fontSize="xl" fontWeight="bold">
          Total: ${totalPrice}
        </Text>
        <Button colorScheme="teal" size="lg" mt={4} my={"20px"}>
          Proceed to Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
