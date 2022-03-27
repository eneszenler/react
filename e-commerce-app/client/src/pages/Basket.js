import {useRef, useState} from "react";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Grid,
  Box,
  Image,
  Alert,
  Container,
  GridItem,
  Flex,
  Tag,
  useDisclosure,
  FormControl,
  FormLabel,
  UnorderedList,
  ListItem,
  Textarea,
} from "@chakra-ui/react";
import {useBasket} from "../contexts/BasketContext";
import {postOrder} from "../api";

function Basket() {
  const {removeFromBasket, items, emptyBasket} = useBasket();

  const total = items.reduce((acc, obj) => acc + obj.price, 0);

  const {isOpen, onOpen, onClose} = useDisclosure();
  const initialRef = useRef();
  const [address, setAddress] = useState();

  const handleSubmitForm = async () => {
    const itemIds = items.map((item) => item._id);

    const input = {
      address,
      items: JSON.stringify(itemIds),
    };

    const response = await postOrder(input);

    console.log(response);

    emptyBasket();
    onClose();
  };

  return (
    <>
      <Header />

      {items.length < 1 && (
        <Alert status="warning">You have not any items in your basket.</Alert>
      )}

      {items.length > 0 && (
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(3,1fr)" gap={4}>
            <GridItem colSpan={3}>
              <Alert status="warning">
                <Flex justifyContent="space-between" width="100%">
                  <Tag>Total: {total} TL</Tag>
                  <Button colorScheme="teal" onClick={onOpen}>
                    Order
                  </Button>
                  <Modal
                    colorScheme="teal"
                    initialFocusRef={initialRef}
                    isOpen={isOpen}
                    onClose={onClose}
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Order your basket</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody pb={6}>
                        <Tag variant="outline" bg="#FF2E63" color="#fff">
                          Orders
                        </Tag>
                        <UnorderedList spacing={3}>
                          {items.map((item, i) => (
                            <ListItem key={i}>
                              {item.title} <Tag>{item.price}TL</Tag>
                            </ListItem>
                          ))}
                        </UnorderedList>
                        <FormControl mt={4}>
                          <FormLabel>Adress</FormLabel>
                          <Textarea
                            ref={initialRef}
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </FormControl>
                      </ModalBody>

                      <ModalFooter>
                        <Button colorScheme="teal" mr={3} onClick={handleSubmitForm}>
                          Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Flex>
              </Alert>
            </GridItem>
            {items &&
              items.map((item, i) => {
                return (
                  <GridItem key={i} colSpan={1}>
                    <Box
                      key={i}
                      borderWidth="1px"
                      borderRadius="lg"
                      overflow="hidden"
                      p="3"
                    >
                      <Link to={`/product/${item._id}`}>
                        <Image
                          src={item.photos[0]}
                          alt="product"
                          loading="lazy"
                          width="100%"
                        ></Image>
                        <Box p="6">
                          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                            {item.title}
                          </Box>
                          <Box>{item.price} TL</Box>
                        </Box>
                      </Link>
                      <Button
                        colorScheme="teal"
                        onClick={() => removeFromBasket(item._id)}
                        width="100%"
                      >
                        Remove
                      </Button>
                    </Box>
                  </GridItem>
                );
              })}
          </Grid>
        </Container>
      )}
    </>
  );
}

export default Basket;
