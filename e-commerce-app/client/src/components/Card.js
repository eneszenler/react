import {
  Box,
  Image,
  Button,
  Heading,
  Flex,
  HStack,
  TagLabel,
  TagRightIcon,
} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {useBasket} from "../contexts/BasketContext";
import {Tag} from "antd";

function Card({item}) {
  const {addToBasket, items} = useBasket();
  const findBasketItem = items.find((basket_item) => basket_item._id === item._id);

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="3"
      bg="#fff"
      style={{minHeight: "500px", maxHeight: "500px"}}
      textAlign="center"
    >
      <Link to={`/product/${item._id}`}>
        <Box p="4">
          <Box>
            <Heading size="lg">{item.title}</Heading>
          </Box>
          <Box fontSize="20px" lineHeight="tight" maxHeight="50px" minHeight="50px">
            {item.description}
          </Box>
        </Box>
        <Image
          src={item.photos[0]}
          alt="product"
          loading="lazy"
          width="100%"
          height="65%"
          objectFit="cover"
        ></Image>
      </Link>

      <Flex mt="2">
        <Button bg="#252A34" color="#fff" variant="solid" marginRight="2" fontSize="22px">
          {item.price} ₺
        </Button>
        <Button
          bg={findBasketItem ? "#08D9D6" : "#FF2E63"}
          color="#fff"
          width="100%"
          onClick={() => addToBasket(item, findBasketItem)}
        >
          {findBasketItem ? "Remove from basket" : "Add Basket"}
        </Button>
      </Flex>
    </Box>
  );
}

export default Card;
