import {
  Button,
  Center,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
import { RangeDatePicker } from 'react-google-flight-datepicker';
import React, { useState } from 'react';
import Card from '../Card';
export default function Task({
  date,
  onDateChange,
  handleAddListButton,
  handleRemoveListButton,
}) {
  const [task, setTask] = useState({ taskDescription: '', taskDate: '' });
  const [taskDescription, setTaskDescription] = useState();

  console.log(task);
  console.log(taskDescription);
  return (
    <>
      <FormControl>
        <FormLabel htmlFor="task">Task:</FormLabel>
        <Stack spacing={4} direction="row" align="center">
          <Input
            id="task"
            variant="filled"
            value={taskDescription}
            onChange={e => setTaskDescription(e.currentTarget.value)}
          />
          <Input
            value={task.taskDate}
            onChange={e => setTask(e.currentTarget.value.taskDate)}
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
            htmlSize="sm"
            style={{ width: '80%' }}
          />
        </Stack>
        <br />
        <FormLabel htmlFor="task">Task: {taskDescription}</FormLabel>
        <Center>
          <Card></Card>
        </Center>
      </FormControl>
      <br />
      <Center>
        <h2>
          Pick a Date{' '}
          <Checkbox defaultChecked ml={8}>
            Ask for date
          </Checkbox>
        </h2>
      </Center>
      <RangeDatePicker
        value={date}
        onChange={(startDate, endDate) => onDateChange(startDate, endDate)}
      />
      <br />
      <Center>
        <Button m={[4]} onClick={handleAddListButton} colorScheme="blue">
          Add to list
        </Button>
        <Button onClick={handleRemoveListButton} colorScheme="red">
          Remove last item
        </Button>
      </Center>
    </>
  );
}
