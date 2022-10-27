import React from 'react';
import { Box, useColorMode } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import Task from '../components/Task';
import { Navbar } from './NavBar/Navbar';
import Header from './Header/Header';

export default function Main() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  function handleStartClick() {
    navigate('/start');
  }

  return (
    <>
      <Box maxW="32rem">
        <Header />
        <Navbar
          handleStartClick={handleStartClick}
          toggleColorMode={toggleColorMode}
          colorMode={colorMode}
        />
        <Task />
      </Box>
    </>
  );
}
