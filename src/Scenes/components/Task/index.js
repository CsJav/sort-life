import React, { useState } from 'react';
import {
  Center,
  Checkbox,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  List,
  ListItem,
  Stack,
} from '@chakra-ui/react';
// import { RangeDatePicker } from 'react-google-flight-datepicker';
import { DownloadIcon } from '@chakra-ui/icons';
import Card from '../Card';
import CustomControlsExample from './CustomControlsExample';

export default function Task() {
  const [taskDescription, setTaskDescription] = useState();
  const [taskDate, setTaskDate] = useState();

  return (
    <>
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
            placeholder="Here is a sample placeholder"
            size="sm"
            style={{ width: '80%' }}
          />
          <Input
            value={taskDate}
            onChange={e => setTaskDate(e.currentTarget.value)}
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
            htmlSize="sm"
            style={{ width: '80%' }}
          />
          <IconButton
            colorScheme="teal"
            aria-label="Call Segun"
            icon={<DownloadIcon />}
          />
        </Stack>
        {/* <Checkbox defaultChecked>Checkbox</Checkbox> */}
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
      {/* <RangeDatePicker
        value={date}
        onChange={(startDate, endDate) => onDateChange(startDate, endDate)}
      /> */}
    </>
  );
}
