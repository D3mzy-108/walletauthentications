import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VStack, Button, Box, Heading } from '@chakra-ui/react';
import { GrMenu } from 'react-icons/gr';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Box
      zIndex={"20"}
      as="nav"
      shadow="md"
      className="navbar px-lg-5 py-3 navbar-expand-md"
      position={"sticky"}
      top="0"
      bg={"#000"}
    >
      <div className="container-fluid flex align-items-center">
        <Link className="text-uppercase" to="/" style={{color: "#7e6be3"}}>
          <Heading size="md">WalletAuthentication</Heading>
        </Link>
        <Button
          className="navbar-toggler ms-auto"
          style={{transform: "scale(0.7)"}}
          type="button"
          onClick={() => setMenu(!menu)}
        >
          <GrMenu></GrMenu>
        </Button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <Link
            to="/connect-wallet"
            className="text-decoration-none ms-md-auto"
          >
            <Button
              color={'yellow.500'}
              bg={'black.900'}
              colorScheme={'black.900'}
              size="lg"
            >
              Connect Wallet
            </Button>
          </Link>
        </div>
      </div>
      {menu && (
        <VStack
          position="fixed"
          top="4rem"
          w={'full'}
          p="4"
          bg={'#fff'}
          shadow="md"
        >
          <Button colorScheme={'yellow'}>
            <Link to="/connect-wallet" color="#000">
              Connect Wallet
            </Link>
          </Button>
        </VStack>
      )}
    </Box>
  );
};

export default Navbar;
