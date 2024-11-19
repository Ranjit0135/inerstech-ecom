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
  Center,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
      console.log(data);
    });
  };

  return (
    <Flex
      maxW={"100%"}
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} color="grey">
            Log In
          </Heading>
          <p>Best place to buy and sell products</p>
        </Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            width={["100%", "90%", "80%", "600px"]}
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email*</FormLabel>
                <Input
                  type="Mail"
                  placeholder="Enter your mail"
                  maxW={"800px"}
                  {...register("email", {
                    required: "Email is required",
                    validate: (value) => {
                      if (!value.includes("@")) {
                        return "Email must contain @";
                      }
                      return true;
                    },
                  })}
                />
                {errors.email && (
                  <div className="text-red-500">{errors.email.message}</div>
                )}
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password*</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    minLength: 8,
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <div className="text-red-500">{errors.password.message}</div>
                )}
              </FormControl>
              <Stack spacing={6} align={"center"}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Text color={"grey"}>Forgot password?</Text>
                </Stack>
                <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
                  <Center>
                    <Text>Sign in with Google</Text>
                  </Center>
                </Button>

                <Button
                  disabled={isSubmitting}
                  type="register"
                  align={"left"}
                  bg={"#6c7fd8"}
                  color={"white"}
                  width={"100px"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  {isSubmitting ? "Logging in" : "Log in"}
                </Button>
                <Text color={"black"} align={"left"}>
                  Didnt have an account? <Text as="u">Register</Text>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
};

export default Login;
