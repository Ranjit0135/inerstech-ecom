import "./styles.css";
import { useState, useCallback, useEffect } from "react";
import data from "./data.json";
import {
  Box,
  Button,
  HStack,
  Text,
  Table,
  Tbody,
  Tr,
  SimpleGrid,
  Center
} from "@chakra-ui/react";
import { UseOrder } from "./Hooks";

function Card({ item, handleAdd }) {
  return (
    <>
      <Box>
        <Text>{item.name}</Text>
        <Button onClick={() => handleAdd(item)}>Add</Button>
      </Box>
    </>
  );
}

export default function Addtocart() {
  const [product, setProduct] = useState([]);
  const { order, setOrder } = UseOrder();
  const fetchData = useCallback(async () => {
    setProduct(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleAddItem = async (itemClick) => {
    setOrder((prev) => {
      const isItemInCart = prev.find((item) => item.id === itemClick.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === itemClick.id ? { ...item, amount: item.amount + 1 } : item
        );
      }
      return [...prev, { ...itemClick, amount: 1 }];
    });
  };
  const handleRemove = async (id) => {
    setOrder((prev) =>
      prev.reduce((value, item) => {
        if (item.id === id) {
          if (item.amount === 1) {
            return value;
          }
          return [...value, { ...item, amount: item.amount - 1 }];
        } else {
          return [...value, item];
        }
      }, [])
    );
  };
  const handleRemoveItem = async (id) => {
    setOrder((prev) =>
      prev.reduce((value, item) => {
        if (item.id === id) {
          if (item.amount === item.amount) {
            // eslint-disable-next-line no-self-compare
            return value;
          }
          return [...value, { ...item, amount: item.amount - item.amount }];
        } else {
          return [...value, item];
        }
      }, [])
    );
  };
  console.log(order);
  return (
    <Box bg={"tomato"} p={".75rem"}>
      {product
        .map((rs, index) => {
          return (
            <>
              <Card key={index} item={rs} handleAdd={handleAddItem} />
            </>
          );
        })
        .slice(0, 6)}
      <Box bg={"twitter.400"}>
        {order.map((rs, index) => {
          return (
            <>
              <HStack justifyContent={"space-between"} p={".75rem"} key={index}>
                <Box>
                  <Text
                    w={"10rem"}
                    overflow={"hidden"}
                    whiteSpace={"nowrap"}
                    textOverflow={"clip"}
                  >
                    {rs.name}
                  </Text>
                </Box>
                <SimpleGrid
                  columns={[1, null, 3]}
                  w={"300px"}
                  justifyContent={"space-evenly"}
                >
                  <Button
                    mx={".75rem"}
                    fontSize={"18px"}
                    colorScheme={"red"}
                    onClick={() => handleRemove(rs.id)}
                  >
                    -
                  </Button>
                  <Center>
                    <Text>{rs.amount}</Text>
                  </Center>
                  <Button
                    mx={".75rem"}
                    fontSize={"18px"}
                    colorScheme={"green"}
                    onClick={() => handleAddItem(rs)}
                  >
                    +
                  </Button>
                </SimpleGrid>
                <Button
                  fontSize={"18px"}
                  colorScheme={"red"}
                  onClick={() => handleRemoveItem(rs.id)}
                >
                  delete
                </Button>
              </HStack>
            </>
          );
        })}
      </Box>
    </Box>
  );
}
