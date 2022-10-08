import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button } from '@chakra-ui/react';

export function Navbar({ handleStartClick, toggleColorMode, colorMode }) {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <Button
          size="md"
          colorScheme="green"
          onClick={() => handleStartClick()}
        >
          Build Road Map
        </Button>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Button size="md" colorScheme="blue" onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
