import React from "react";
import {Link} from "react-router-dom";
import {Button, Container, Flex, Heading, Text} from "@chakra-ui/react";
import {useAuth} from "../contexts/AuthContext";
import {useBasket} from "../contexts/BasketContext";
import {BsBasket3Fill} from "react-icons/bs";

function Header() {
  const {loggedIn, user} = useAuth();
  const {items} = useBasket();

  return (
    <header>
      <Container maxW="container.xl" style={{height: "100%"}}>
        <nav className="nav">
          <div className="left">
            <Flex alignItems="center">
              <div className="logo">
                <Link to="/">
                  <p className="brand">BRAND</p>
                </Link>
              </div>
              <div>
                <Link to="/products">
                  <p className="nav-item">PRODUCTS</p>
                </Link>
              </div>
            </Flex>
          </div>
          <div className="right">
            {!loggedIn && (
              <>
                <Link to="/basket">
                  <Button bg="#FF2E63" color="#fff">
                    <BsBasket3Fill /> ({items.length})
                  </Button>
                </Link>
                <Link to="/signin">
                  <Button bg="#FF2E63" color="#fff" variant="solid" marginLeft="2">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button bg="#08D9D6" color="#fff" variant="solid" marginLeft="2">
                    Register
                  </Button>
                </Link>
              </>
            )}
            {loggedIn && (
              <>
                {items.length > 0 && (
                  <Link to="/basket">
                    <Button bg="#FF2E63" color="#fff">
                      <BsBasket3Fill /> ({items.length})
                    </Button>
                  </Link>
                )}
                {user?.role === "admin" && (
                  <Link to="/panel">
                    <Button bg="#FF2E63" color="#fff" marginLeft="2">
                      Admin
                    </Button>
                  </Link>
                )}
                <Link to="/profile">
                  <Button bg="#08D9D6" color="#fff" variant="solid" marginLeft="2">
                    Profile
                  </Button>
                </Link>
              </>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
