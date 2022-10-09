import React, { useState } from 'react';
import {
  Button,
  Center,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  List,
  ListItem,
  Progress,
  Stack,
} from '@chakra-ui/react';
import Card from '../Card';
import CustomControlsExample from './CustomControlsExample';
import { PopoverForm } from './PopoverForm/PopoverForm';

export default function Task() {
  const [taskDescription, setTaskDescription] = useState();

  return (
    <>
      <br />
      <FormControl>
        <FormLabel htmlFor="task">
          Task: <br />
        </FormLabel>
        <Stack spacing={4} direction="row" align="center">
          <Input
            id="task"
            variant="filled"
            value={taskDescription}
            onChange={e => setTaskDescription(e.currentTarget.value)}
            placeholder="Write your task here..."
            size="sm"
          />
          <PopoverForm />
          <Button colorScheme="teal">
            Add
          </Button>
        </Stack>
        <br />
        <Progress value={20} size="xs" colorScheme="pink" />
        <br />
        <List spacing={3}>
          <ListItem>
            <Stack spacing={4} direction="row" align="center">
              <Checkbox defaultChecked />
              <CustomControlsExample />
            </Stack>
          </ListItem>
          <ListItem>
            <Stack spacing={4} direction="row" align="center">
              <Checkbox defaultChecked />
              <CustomControlsExample />
            </Stack>
          </ListItem>
        </List>
        <br />
        <Center>
          <Card />
        </Center>
      </FormControl>
      <br />
    </>
  );
}
