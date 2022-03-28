import {Flex, Button, Heading, Text, Box, Avatar} from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import {useAuth} from "../contexts/AuthContext";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

function Profile({history}) {
  const {user, logout} = useAuth();
  let navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/products");
  };

  return (
    <>
      <Header />
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="80vh"
      >
        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p="3"
          bg="#fff"
          style={{height: "350px", width: "300px"}}
          textAlign="center"
        >
          <Flex flexDirection="column" justifyContent="center" width="100%" height="100%">
            <div>
              <Avatar src="https://bit.ly/dan-abramov" size="xl" />
            </div>
            <Heading>
              {user.name} {user.surname}
            </Heading>
            <Text fontSize="20px">{user.email}</Text>
            <Link to={`/profile/orders/${user._id}`}>
              <Button colorScheme="green" mb="2" width="100%">
                My Orders
              </Button>
            </Link>
            <Button colorScheme="red" onClick={handleLogout}>
              Logout
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default Profile;
