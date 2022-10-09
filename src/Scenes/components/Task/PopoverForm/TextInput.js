import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

// 1. Create a text input component
// eslint-disable-next-line react/display-name
export const TextInput = React.forwardRef((props, ref) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input ref={ref} id={props.id} {...props} />
    </FormControl>
  );
});
