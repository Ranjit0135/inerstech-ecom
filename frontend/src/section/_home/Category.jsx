import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import HomeHeadingText from "../../components/HomeHeadingText";

const CategoryCard = ({ image, label }) => {
  return (
    <Box
      height="300px"
      textAlign="center"
      borderRadius="md"
      overflow="hidden"
      position="relative"
    >
      <Box
        position="relative"
        width="100%"
        borderRadius="50%"
        overflow="hidden"
      >
        <Image
          src={image}
          alt={label}
          width="100%"
          height="100%"
          objectFit="cover"
          borderRadius="50%"
          transition="transform 0.3s ease"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          backgroundColor="red"
          opacity="0"
          transition="opacity 0.3s ease"
          borderRadius="50%"
          _hover={{ opacity: "0.5" }}
        />
      </Box>
      <Text mt={2} fontSize="lg" fontWeight="bold" color="black">
        {label}
      </Text>
    </Box>
  );
};

const Category = () => {
  const categories = [
    { image: "/assets/categories/men.png", label: "Men" },
    { image: "/assets/categories/women.png", label: "Women" },
    { image: "/assets/categories/kids.png", label: "Kids" },
    { image: "/assets/categories/summer.png", label: "Summer" },
  ];

  return (
    <Box mt={6} width={{ base: "100%", lg: "70%" }} marginX="auto">
      <HomeHeadingText
        heading="Top Categories"
        paragraph="Follow the most popular trends and get exclusive items."
      />
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={5}
        justifyItems="center"
        justifyContent="space-between"
      >
        {categories.map((category, index) => (
          <Box key={index} maxW={{ base: "60%", lg: "100%" }}>
            <CategoryCard image={category.image} label={category.label} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Category;
