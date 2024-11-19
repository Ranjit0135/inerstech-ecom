import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  Link,
  Collapse,
  Button,
  useDisclosure,
  useBreakpointValue,
  Divider,
} from "@chakra-ui/react";

const FooterSection = ({ title, links, isText }) => {
  const { isOpen, onToggle } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box width={{ base: "100%", md: "auto" }}>
      {isMobile ? (
        <>
          <Button
            onClick={onToggle}
            variant="ghost"
            colorScheme="gray.400"
            w="full"
            justifyContent="space-between"
            textAlign="left"
            _hover={{ textDecoration: "none" }}
            rightIcon={isOpen ? "-" : "+"}
          >
            {title}
          </Button>
          <Divider />
          <Collapse in={isOpen}>
            <Stack spacing={2} pl={4} mt={2}>
              {links.map((link, index) =>
                isText ? (
                  <Text key={index} fontSize="13px" color="gray.400">
                    {link}
                  </Text>
                ) : (
                  <Link
                    key={index}
                    href="#"
                    fontSize="13px"
                    color="gray.400"
                    _hover={{ color: "teal.500", textDecoration: "underline" }}
                  >
                    {link}
                  </Link>
                )
              )}
            </Stack>
          </Collapse>
        </>
      ) : (
        <Stack spacing={2}>
          <Heading
            size="sm"
            color="white"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            {title}
          </Heading>
          {links.map((link, index) =>
            isText ? (
              <Text
                key={index}
                fontSize="13px"
                color="gray.400"
                textDecoration="none"
              >
                {link}
              </Text>
            ) : (
              <Link
                key={index}
                href="#"
                fontSize="13px"
                color="gray.400"
                _hover={{ color: "red.500", textDecoration: "underline" }}
              >
                {link}
              </Link>
            )
          )}
        </Stack>
      )}
    </Box>
  );
};

const Footer = () => {
  return (
    <Box as="footer" bg="gray.900" color="gray.400">
      <Box paddingY="10" width={{ base: "100%", lg: "70%" }} marginX="auto">
        <Container maxW="container.xl">
          <Flex
            direction={{ base: "column", md: "row" }}
            justify={{ md: "space-between" }}
            gap={8}
          >
            <Box flexBasis="20%">
              <Heading size="md" color="white">
                Logo
              </Heading>
              <Text fontSize="13px" color="gray.500" mt={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                iste quia cumque suscipit laboriosam repudiandae, a tempore
                consequuntur provident saepe quod dolore, doloribus voluptate
                fugit, distinctio dolorum dignissimos totam inventore.
              </Text>
            </Box>

            <Flex
              flexBasis="60%"
              justify="space-between"
              alignItems="flex-start"
              direction={{ base: "column", md: "row" }}
              gap={8}
            >
              <FooterSection title="Category" links={["Link 1", "Link 2"]} />
              <FooterSection
                title="Useful Links"
                links={["Link A", "Link B"]}
              />
              <FooterSection
                title="Contacts"
                links={["Address", "Email", "Phone"]}
                isText
              />
            </Flex>
          </Flex>
          <Divider borderColor="gray.700" my={6} />
          <Text fontSize="xs" textAlign="center" color="gray.500">
            © {new Date().getFullYear()} Company Name. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
