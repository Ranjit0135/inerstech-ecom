import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <>
      <Flex
        maxW={"500%"}
        minH={"100vh"}
        flex={"wrap"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} color="grey">
              About Us
            </Heading>
          </Stack>

          <Box
            rounded={"lg"}
            width={"900px"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            This is a site for buying and selling products.
            <Box my={"20px"}>
              <FaInstagram size="30px" /> <FaFacebook size="30px" />
              <FaWhatsapp size="30px" /> 9841895623
            </Box>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default AboutUs;
