import {Flex, Button} from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import {useAuth} from "../contexts/AuthContext";
import {useNavigate} from "react-router-dom";

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
        <code>{JSON.stringify(user)}</code>
        <Button colorScheme="red" onClick={handleLogout}>
          Logout
        </Button>
      </Flex>
    </>
  );
}

export default Profile;
