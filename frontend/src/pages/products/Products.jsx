import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import {
  Box,
  Grid,
  GridItem,
  Flex,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Center,
  Select,
  InputGroup,
  Input,
  InputRightElement,
  InputLeftElement,
  Checkbox,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RadioGroup,
  Radio,
  HStack,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaSearch,
  FaShoppingCart,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
const Products = () => {
  return (
    <>
    
    <Flex width="100%" flexDirection={{base:"column",md:'row'}} justifyContent="space-between"  >
      <Flex width={{base:'100%',md:"60%"}} flexDirection="row" gap="20px" px={"20px"} pt={"30px"} pl={"50px"} alignItems='center'>
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
          <Text>Showing 1–12 of 50 Results</Text>
        </Flex>
      <Box width={{base:'100%',md:'40%'}} p="40px">
       <Flex flexDirection="row" alignItems={"center"} gap="10px">
        <Text>Sort by</Text>
        <Select placeholder='Popularity' width={{base:'90%' ,md:"65%"}}>
          <option value='option1'>New Collection</option>
          <option value='option2'>Top Sell</option>
          <option value='option3'>Top Ratted</option>
        </Select>
       </Flex>
      </Box>
      </Flex>
      <Flex width="100%" flexDirection={{base:"column",md:'row'}} justifyContent="center" >
        <Box width={{base:'100%',md:"25%"}} py={"20px"} pl={"50px"}>
        <RadioGroup defaultValue='1'>
         <Flex spacing={2} direction='column' my={"10px"}>
          <Heading fontSize="25px" mb={"10px"}>Shop by Categories</Heading>
          <Radio colorScheme='green' value='1'>Women’s Clothing (9)</Radio>
          <Radio colorScheme='green' value='2'>Man Fashion (1)</Radio>
          <Radio colorScheme='green' value='3'>Man Fashion (1)</Radio>
          <Radio colorScheme='green' value='4'>Jewelry & Watches (3)</Radio>
          <Radio colorScheme='green' value='5'>Bags & Shoes (7)</Radio>
          <Radio colorScheme='green' value='6'>Toys & Kids (2)</Radio>
          <Radio colorScheme='green' value='7'>Electronics (6)</Radio>
          <Radio colorScheme='green' value='8'>Computers (4)</Radio>
          </Flex>
          </RadioGroup>
         <Box width="200px">
          <Heading fontSize="25px" mb={"10px"}>Shop by Price</Heading>
          <RangeSlider aria-label={['min', 'max']} defaultValue={[0, 30]}>
          <RangeSliderTrack>
          <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
          </RangeSlider>
          <Flex alignItems={"center"} gap="10px" my="20px">
            <Button>Filter</Button>
            <Text>Price: 20$-80$</Text>
          </Flex>
          </Box>
          <RadioGroup defaultValue='1'>
         <Flex spacing={2} direction='column'>
          <Heading fontSize="25px" mb={"10px"}>Shop by Size</Heading>
          <Radio colorScheme='green' value='1'>L Large</Radio>
          <Radio colorScheme='green' value='2'>XL Extra Large</Radio>
          <Radio colorScheme='green' value='3'>M Medium</Radio>
          <Radio colorScheme='green' value='4'>S Small</Radio>
          <Radio colorScheme='green' value='5'>XS Extra Small</Radio>
          </Flex>
          </RadioGroup>
          <RadioGroup defaultValue='1'>
         <Flex spacing={2} direction='column' my={"10px"}>
          <Heading fontSize="25px" mb={"10px"}>Shop by Color</Heading>
          <Radio colorScheme='red'w="100%" value='1'>Red</Radio>
          <Radio colorScheme='green' value='2'>Green</Radio>
          <Radio colorScheme='purple' value='3'>Purple</Radio>
          <Radio colorScheme='black' value='4'>Black</Radio>
          <Radio colorScheme='orange' value='5'>Orange</Radio>
          <Radio colorScheme='blue' value='6'>Blue</Radio>
          </Flex>
          </RadioGroup>
           </Box>
        <Box width={{base:'100%',md:'65%'}} py={"20px"}>
        <Flex justifyContent="center" alignItems="center" gap="10px" flexWrap={{base:"nowrap",lg:"wrap"}} position="relative" overflow={"hidden"} flexDirection={{base:"column",lg:"row"}} pr={"50px"}>
        <ProductCard icon={ FaRegHeart} icon1={IoMdSearch} title="Stylis men cap" text="$22.22" img={"../../../public/assets/product/jrrr-removebg-preview.png"} />
        <ProductCard icon={ FaRegHeart} icon1={IoMdSearch} title="Stylis men cap" text="$22.22" img={"../../../public/assets/product/shop-1.jpg"} />
        <ProductCard icon={ FaRegHeart} icon1={IoMdSearch} title="Stylis men cap" text="$22.22" img={"../../../public/assets/product/shop-2.jpg"} />
        <ProductCard icon={ FaRegHeart} icon1={IoMdSearch} title="Stylis men cap" text="$22.22" img={"../../../public/assets/product/shop-3.jpg"} />
        <ProductCard icon={ FaRegHeart} icon1={IoMdSearch} title="Stylis men cap" text="$22.22" img={"../../../public/assets/product/shop-4.jpg"} />
        <ProductCard icon={ FaRegHeart} icon1={IoMdSearch} title="Stylis men cap" text="$22.22" img={"../../../public/assets/product/anime.jpg"} />
        <ProductCard icon={ FaRegHeart} icon1={IoMdSearch} title="Stylis men cap" text="$22.22" img={"../../../public/assets/product/shop-1.jpg"} />
        <ProductCard icon={ FaRegHeart} icon1={IoMdSearch} title="Stylis men cap" text="$22.22" img={"../../../public/assets/product/shop-2.jpg"} />
        <ProductCard icon={ FaRegHeart} icon1={IoMdSearch} title="Stylis men cap" text="$22.22" img={"../../../public/assets/product/shop-3.jpg"} />
        </Flex>
        <Flex gap={'5px'} justifyContent={"center"} mt="50px" fontSize="20px">
          <Box p="10px"color="black" _hover={{
            bg:"black",
            color:"white"
          }}>Prev</Box>
           <Box p="10px"color="black" _hover={{
            bg:"black",
            color:"white"
          }}>1</Box>
           <Box p="10px"color="black" _hover={{
            bg:"black",
            color:"white"
          }}>2</Box>
           <Box p="10px"color="black" _hover={{
            bg:"black",
            color:"white"
          }}>3</Box>
           <Box p="10px"color="black" _hover={{
            bg:"black",
            color:"white"
          }}>4</Box>
           <Box p="10px"color="black" _hover={{
            bg:"black",
            color:"white"
          }}>5</Box>
           <Box p="10px"color="black" _hover={{
            bg:"black",
            color:"white"
          }}>Next</Box>
        </Flex>
        </Box>
      </Flex>
    </>
  );
};

const   ProductCard = ({ icon: Icon, icon1:Icon1, title,text,img }) =>(
  <Box width="250px" height="auto" m="auto" 
  className="john" position={"relative"}
 >
  <Box bg={"#EDF2F7"}>
  <img src={img} alt="" style={{
   width: "100%",
   height: "300px",
   
  }} />
  </Box>
  <Flex justifyContent="space-between" alignItems="center" p="10px 20px" pt={"20px"}>
   <Box>
     <Text fontSize={"20px"}>{title}</Text>  
     <Text>{text}</Text>
   </Box>
  </Flex>
  <Flex alignItems={"center"} justifyContent={"center"} fontSize={"20px"} color={'white'} width={"full"} height={"auto"} gap={"3px"} position={"absolute"} top={"250px"} left={"0"} display={"none"} sx={{".john:hover &":{
    display:"flex",
  },}}>
   <Box bg={"black"} p={"10px"} _hover={{bg:"#C53030"}} ><Icon /></Box>
   <Box bg={"#4A5568"} p={"9px"} _hover={{bg:"#C53030"}} fontSize={"15px"} fontWeight={"bold"}>Add to Cart</Box>
   <Box bg={"black"} p={"10px"} _hover={{bg:"#C53030"}} ><Icon1 /></Box>
  </Flex>
 </Box>                  
);

export default Products;
