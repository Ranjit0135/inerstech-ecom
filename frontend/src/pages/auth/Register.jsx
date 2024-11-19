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
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This mail has been already taken by the former user",
      });
    }
  };

  return (
    <Flex
      height={"100vh"}
      padding={"10px"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      width={"100%"}
    >
      <Stack justify={"center"} align={"center"} width={"600px"}>
        <Heading fontSize={"4xl"} color="gray.600">
          Register
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)} width={"100%"}>
          <Box
            width={["100%", "90%", "80%", "600px"]}
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            oxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4} align={"center"} width={"100%"}>
              <FormControl id="username">
                <FormLabel>User Name*</FormLabel>
                <Input
                  placeholder="Enter your user name"
                  maxW={"800px"}
                  {...register("username", {
                    required: "User Name is required",
                  })}
                />
                {errors.username && (
                  <Text color="red.500">{errors.username.message}</Text>
                )}
              </FormControl>

              <FormControl id="email">
                <FormLabel>Email*</FormLabel>
                <Input
                  {...register("mail", {
                    required: "Email is required",
                    validate: (value) => {
                      if (!value.includes("@")) {
                        return "Email must contain @";
                      }
                      return true;
                    },
                  })}
                  placeholder="Enter your e-mail"
                  maxW={"800px"}
                />
                {errors.mail && (
                  <Text color="red.500">{errors.mail.message}</Text>
                )}
              </FormControl>
              <FormControl id="number">
                <FormLabel>Mobile Number*</FormLabel>
                <Input
                  type="number"
                  placeholder="Enter your Number"
                  {...register("number", {
                    required: "Number is required",
                  })}
                />
                {errors.number && (
                  <Text color="red.500">{errors.number.message}</Text>
                )}
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password*</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                    required: "Password is required",
                    validate: (value) => {
                      if (!/\d/.test(value)) {
                        return "Password must contain at least one number";
                      }
                      return true;
                    },
                  })}
                />
                {errors.password && (
                  <Text color="red.500">{errors.password.message}</Text>
                )}
              </FormControl>
              <Stack spacing={10} align={"center"}>
                <Button
                  disabled={isSubmitting}
                  type="register"
                  align={"center"}
                  bg={"#6c7fd8"}
                  color={"white"}
                  width={"100px"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
                {errors.root && (
                  <Text color="red.600">{errors.root.message}</Text>
                )}
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
};

export default Register;
