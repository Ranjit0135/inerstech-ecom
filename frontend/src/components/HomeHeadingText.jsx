import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const HomeHeadingText = ({ heading, paragraph }) => {
  return (
    <Box textAlign="center" mb={8}>
      <Heading as="h2" size="xl" mb={4}>
        {heading}
      </Heading>
      <Text fontSize="lg">{paragraph}</Text>
    </Box>
  );
};

export default HomeHeadingText;
