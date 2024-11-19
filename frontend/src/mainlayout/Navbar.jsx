import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Divider,
  Text,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaSearch,
  FaShoppingCart,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <Box py={2} px={4} width={{ base: "100%", lg: "70%" }} margin="auto">
      <Flex justify="space-between" align="center">
        <Box>
          <Text fontSize="sm">
            Customer Support: +1 234 567 890 | support@example.com
          </Text>
        </Box>
        <HStack spacing={4}>
          <HStack spacing={2}>
            <Link href="https://facebook.com" isExternal>
              <FaFacebook />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <FaTwitter />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <FaInstagram />
            </Link>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};
const Navbar = () => {
  return (
    <Box px={4} width={{ base: "100%", lg: "70%" }} margin="auto">
      <Flex
        height={{ base: "auto", md: "10vh" }}
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          fontSize="40px"
          fontWeight="bold"
          display="flex"
          alignItems="center"
          justifyContent={{ base: "center", md: "flex-start" }}
          width={{ base: "100%", md: "auto" }}
          mb={{ base: 2, md: 0 }}
        >
          Ecommerce
          <Text color="red" as="span">
            .
          </Text>
        </Box>

        <Box
          width={{ base: "100%", md: "60%" }}
          display="flex"
          justifyContent={{ base: "center", md: "flex-start" }}
          mb={{ base: 2, md: 0 }}
        >
          <InputGroup>
            <Input
              type="text"
              placeholder="Search"
              _focus={{
                boxShadow: "none",
                borderBlockColor: "transparent",
              }}
            />
            <InputRightElement pointerEvents="none">
              <FaSearch color="gray.300" />
            </InputRightElement>
          </InputGroup>
        </Box>

        <HStack
          spacing={4}
          justifyContent={{ base: "center", md: "flex-end" }}
          width={{ base: "100%", md: "auto" }}
        >
          <IconButton
            aria-label="Cart"
            icon={<FaShoppingCart />}
            variant="unstyled"
            color="gray.600"
            fontSize="20px"
          />
          <Link to="/login">
            <IconButton
              aria-label="Account"
              icon={<FaUser />}
              variant="unstyled"
              color="gray.600"
              fontSize="20px"
            />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

const App = () => {
  return (
    <>
      <TopBar />
      <Divider />
      <Navbar />
    </>
  );
};

export default App;
