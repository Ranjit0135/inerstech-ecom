import React from "react";
import BreadCumb from "../../components/BreadCumb";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
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
} from "@chakra-ui/react";

const About = () => {
  return (
    <>
    <Flex flexDirection={{base:"column",lg:"row"}} width="100%">
    <Box minHeight="50hv" p="20px" textAlign="center" width={{base:'100%',lg:'50%'}}>
      <img src="../../../public/assets/about us/cover.jpg" alt="" />
    </Box> 
    <Box minHeight="100hv"  p="20px" textAlign="center" width={{base:'100%',lg:'50%'}} >
      <Box>
        <Heading mb="10px">About The Ecommerce</Heading>
        <Text as= "i" fontWeight="bold">Farm-fresh Goodness, just a click Away.</Text>
        <Text my="10px" textAlign="justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, rem! Et obcaecati rem nulla, aut assumenda unde minima earum distinctio porro excepturi veritatis officiis dolorem quod. sapiente amet rerum beatae dignissimos aperiam id quae quia velit. Ab optio doloribus hic quas sit corporis numquam.</Text>

        <Text textAlign="justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, rem! Et obcaecati rem nulla, aut assumenda unde minima earum distinctio porro excepturi veritatis officiis dolorem quod. sapiente amet rerum beatae dignissimos aperiam id quae quia velit. Ab optio doloribus hic quas sit corporis numquam.</Text>
      </Box>
      <Flex mt="20px" m="10px" gap={{base:"10px",md:'40px'}} justifyContent="center" flexDirection="row">
        <Box bg="gray.200" borderRadius="20px" p={{base:"10px 20px", lg:"20p 30px"}}>
          <Text fontSize={{base:'20px',md:'30px'}} fontWeight="bold">200 +</Text>
          <Text fontSize={{base:'12px', md:'16px'}}>Vendors</Text>
        </Box>
        <Box bg="gray.200" borderRadius="20px" p={{base:"10px 20px", lg:"20p 30px"}}>
          <Text fontSize={{base:'20px',md:'30px'}} fontWeight="bold">200 +</Text>
          <Text fontSize={{base:'12px', md:'16px'}}>Vendors</Text>
        </Box>
        <Box bg="gray.200" borderRadius="20px" p={{base:"10px 20px", lg:"20p 30px"}}>
          <Text fontSize={{base:'20px',md:'30px'}} fontWeight="bold">200 +</Text>
          <Text fontSize={{base:'12px', md:'16px'}}>Vendors</Text>
        </Box>
      </Flex>
     </Box>
     </Flex>
    <Box textAlign="center">
      <Heading>Our Services</Heading>
      <Text mb={4}>
        Customer service should not be a department. It should be the entire company.
      </Text>
      <Flex justifyContent="center" alignItems="center" flexDirection={{base:'column',lg:'row'}} width="auto" margin="20px 60px" gap="30px">
        <Box textAlign="center" border="1px" borderColor="gray.300" p="20px 40px" borderRadius="20px" width="full" _hover={{bg:"yellow"}} cursor="pointer">
          <img 
            src="../../../public/assets/about us/Free_shipping-removebg-preview.png" 
            alt="About Us" 
            width="200px" 
            style={{ margin: '0 auto', padding: "20px" }} // Ensure the image is centered
          />
          <Heading size="md" mb={2}>Free Shipping</Heading>
          <Text>Free shipping on all US orders above $200</Text>
        </Box>
        <Box textAlign="center" border="1px" borderColor="gray.300" p="20px 40px" borderRadius="20px" width="full" _hover={{bg:"yellow"}} cursor="pointer">
          <img 
            src="../../../public/assets/about us/support-removebg-preview.png" 
            alt="About Us" 
            width="200px" 
            style={{ margin: '0 auto', padding: "20px" }} // Ensure the image is centered
          />
          <Heading size="md" mb={2}>24x7 Support</Heading>
          <Text>Contact us 24 hours a day, 7 days a week</Text>
        </Box>
        <Box textAlign="center" border="1px" borderColor="gray.300" p="20px 40px" borderRadius="20px" width="full" _hover={{bg:"yellow"}} cursor="pointer">
          <img 
            src="../../../public/assets/about us/saving-removebg-preview.png" 
            alt="About Us" 
            width="200px" 
            style={{ margin: '0 auto', padding: "20px" }} // Ensure the image is centered
          />
          <Heading size="md" mb={2}>30 Days Return</Heading>
          <Text>Simply return it within 30 days for an exchange</Text>
        </Box>
        <Box textAlign="center" border="1px" borderColor="gray.300" p="20px 40px" borderRadius="20px" width="full" _hover={{bg:"yellow"}} cursor="pointer">
          <img 
            src="../../../public/assets/about us/payment_secure-removebg-preview.png" 
            alt="About Us" 
            width="200px" 
            style={{ margin: '0 auto', padding: "15px" }} // Ensure the image is centered
          />
          <Heading size="md" mb={2}>Payment Secure</Heading>
          <Text>Contact us 24 hours a day, 7 days a week</Text>
        </Box>
      </Flex>
    </Box>


    <Box >
    <Swiper
  breakpoints={{
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 2,
    }
  }}
  spaceBetween={30} 
  navigation={true} 
  centeredSlides={true}
  loop={true}
  autoplay={{
    delay:3000,
    disableOnInteraction:false,
  }}
  modules={[Navigation,Autoplay]} 
  style={{
    width: '85%',       // Set width to 80% of the parent container
    height: '800px',     // Set a fixed height
    padding: '20px',     // Add padding inside the container
    margin: '20px auto', // Add margin and center the container
    backgroundColor: 'gray.100'  // Optional: background color
  }}
  className="mySwiper"
>
  <SwiperSlide >
  <Box p="20px 20px" border="1px" borderColor="gray.300" borderRadius="30px">
      <Flex flexDirection="column">
        <Box height={{base:"400px", md:'500px',lg:'500px'}}>
          <img 
            src="../../../public/assets/about us/John sir.jpg" 
            alt="About Us" 
            style={{ margin: '0 auto',borderRadius:"30px", width:"85%", height: "100%" }} // Ensure the image is centered
          />
        </Box>
         <Box p="20px">
          <Heading size="md" mt={4} pl="5px">John wor</Heading>
          <Text  pl="5px">( CEO )</Text>
       
        <Box p="10px 20px" border="1px" borderColor="gray.300" borderRadius="30px" mt="10px" >
          <Text textAlign='justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error assumenda nulla ipsum laborum autem ea fugit nam, ad necessitatibus, aspernatur quam ipsam commodi vel debitis ducimus maiores culpa officia perspiciatis.</Text>
        </Box>
        </Box>
      </Flex>
    </Box>
  </SwiperSlide>
  <SwiperSlide>
  <Box p="20px 20px"border="1px" borderColor="gray.300" borderRadius="30px">
      <Flex flexDirection="column">
      <Box height={{base:"300px", md:'500px',lg:'500px'}} width="auto">
          <img 
            src="../../../public/assets/about us/roshan sir.jpg" 
            alt="About Us" 
            style={{ margin: '0 auto',borderRadius:"30px", width:"85%", height: "100%" }} // Ensure the image is centered
          />
        </Box>
         <Box p="20px">
          <Heading size="md" mt={4} pl="5px">Roshan Maharjan</Heading>
          <Text  pl="5px">( Co-Founder )</Text>
       
        <Box p="10px 20px" border="1px" borderColor="gray.300" borderRadius="30px" mt="10px" >
          <Text textAlign='justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error assumenda nulla ipsum laborum autem ea fugit nam, ad necessitatibus, aspernatur quam ipsam commodi vel debitis ducimus maiores culpa officia perspiciatis.</Text>
        </Box>
        </Box>
      </Flex>
    </Box>
  </SwiperSlide>
  <SwiperSlide>
  <Box p="20px 20px"border="1px" borderColor="gray.300" borderRadius="30px">
      <Flex flexDirection="column">
      <Box height={{base:"400px", md:'500px',lg:'500px'}}>
          <img 
            src="../../../public/assets/about us/ranjit sir.jpg" 
            alt="About Us" 
            style={{ margin: '0 auto',borderRadius:"30px", width:"85%", height: "100%" }} // Ensure the image is centered
          />
        </Box>
         <Box p="20px">
          <Heading size="md" mt={4} pl="5px">Ranjit Rai</Heading>
          <Text  pl="5px">( Team Leader )</Text>
       
        <Box p="10px 20px" border="1px" borderColor="gray.300" borderRadius="30px" mt="10px" >
          <Text textAlign='justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error assumenda nulla ipsum laborum autem ea fugit nam, ad necessitatibus, aspernatur quam ipsam commodi vel debitis ducimus maiores culpa officia perspiciatis.</Text>
        </Box>
        </Box>
      </Flex>
    </Box>
  </SwiperSlide>
  <SwiperSlide>
  <Box p="20px 20px"border="1px" borderColor="gray.300" borderRadius="30px">
      <Flex flexDirection="column">
      <Box height={{base:"400px", md:'500px',lg:'500px'}}>
          <img 
            src="../../../public/assets/about us/Sujal sir.jpg" 
            alt="About Us" 
            style={{ margin: '0 auto',borderRadius:"30px", width:"85%", height: "100%" }} // Ensure the image is centered
          />
        </Box>
         <Box p="20px">
          <Heading size="md" mt={4} pl="5px">Sujal Subedi</Heading>
          <Text  pl="5px">( Manager )</Text>
       
        <Box p="10px 20px" border="1px" borderColor="gray.300" borderRadius="30px" mt="10px" >
          <Text textAlign='justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error assumenda nulla ipsum laborum autem ea fugit nam, ad necessitatibus, aspernatur quam ipsam commodi vel debitis ducimus maiores culpa officia perspiciatis.</Text>
        </Box>
        </Box>
      </Flex>
    </Box>
  </SwiperSlide>
</Swiper>
    </Box>
    <Box textAlign="center">
      <Heading  textAlign="center">Our Team</Heading>
      <Text  textAlign="center">Meet out expert team members.</Text>
    <Swiper
  breakpoints={{
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
    }
  }}
  spaceBetween={30} 
  navigation={true} 
  loop={true}
  autoplay={{
    delay:3000,
    disableOnInteraction:false,
  }}
  modules={[Navigation,Autoplay]} 
  style={{
    width: '90%',       // Set width to 80% of the parent container
    height: '600px',     // Set a fixed height
    padding: '20px',     // Add padding inside the container
    margin: '20px auto', // Add margin and center the container
    backgroundColor: 'gray.100'  // Optional: background color
  }}
  className="mySwiper"
>
  <SwiperSlide >
  <Box p="20px 20px" border="1px" borderColor="gray.300" borderRadius="30px">
      <Flex flexDirection="column">
        <Box height={{base:"400px", md:'400px',lg:'300px'}}>
          <img 
            src="../../../public/assets/about us/John sir.jpg" 
            alt="About Us" 
            style={{ margin: '0 auto',borderRadius:"30px", width:"80%", height: "100%" }} // Ensure the image is centered
          />
        </Box>
         <Box p="20px">
          <Heading size="md" mt={4} pl="5px">John wor</Heading>
          <Text  pl="5px">( CEO )</Text>
        </Box>
      </Flex>
    </Box>
  </SwiperSlide>
  <SwiperSlide>
  <Box p="20px 20px"border="1px" borderColor="gray.300" borderRadius="30px">
      <Flex flexDirection="column">
      <Box height={{base:"400px", md:'400px',lg:'300px'}} width="auto">
          <img 
            src="../../../public/assets/about us/roshan sir.jpg" 
            alt="About Us" 
            style={{ margin: '0 auto',borderRadius:"30px", width:"80%", height: "100%" }} // Ensure the image is centered
          />
        </Box>
         <Box p="20px">
          <Heading size="md" mt={4} pl="5px">Roshan Maharjan</Heading>
          <Text  pl="5px">( Co-Founder )</Text>
        </Box>
      </Flex>
    </Box>
  </SwiperSlide>
  <SwiperSlide>
  <Box p="20px 20px"border="1px" borderColor="gray.300" borderRadius="30px">
      <Flex flexDirection="column">
      <Box height={{base:"400px", md:'400px',lg:'300px'}}>
          <img 
            src="../../../public/assets/about us/ranjit sir.jpg" 
            alt="About Us" 
            style={{ margin: '0 auto',borderRadius:"30px", width:"80%", height: "100%" }} // Ensure the image is centered
          />
        </Box>
         <Box p="20px">
          <Heading size="md" mt={4} pl="5px">Ranjit Rai</Heading>
          <Text  pl="5px">( Team Leader )</Text>
        </Box>
      </Flex>
    </Box>
  </SwiperSlide>
  <SwiperSlide>
  <Box p="20px 20px"border="1px" borderColor="gray.300" borderRadius="30px">
      <Flex flexDirection="column">
      <Box height={{base:"400px", md:'400px',lg:'300px'}}>
          <img 
            src="../../../public/assets/about us/Sujal sir.jpg" 
            alt="About Us" 
            style={{ margin: '0 auto',borderRadius:"30px", width:"80%", height: "100%" }} // Ensure the image is centered
          />
        </Box>
         <Box p="20px">
          <Heading size="md" mt={4} pl="5px">Sujal Subedi</Heading>
          <Text  pl="5px">( Manager )</Text>
        </Box>
      </Flex>
    </Box>
  </SwiperSlide>
</Swiper>
    </Box>
    </>
  );
};

export default About;
