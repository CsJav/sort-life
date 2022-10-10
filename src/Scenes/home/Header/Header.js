import React from 'react';
import { Heading, Text } from '@chakra-ui/react';

export default function Header() {
  return (
    <>
      <Heading mb={4} textAlign="center">
        {' '}
        Life&apos;s Sort Tool{' '}
      </Heading>{' '}
      <Text fontSize="xl">
        SortLife helps people get organized, anywhere anytime{' '}
      </Text>{' '}
    </>
  );
}
