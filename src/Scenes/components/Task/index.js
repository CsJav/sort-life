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
  useToast,
} from '@chakra-ui/react';
import Card from '../Card';
import CustomControls from './CustomControls';
import { format } from 'date-fns';
import { PopoverForm } from './PopoverForm/PopoverForm';

const DATE_FORMAT = "yyyy-MM-dd'T'HH:mm";

const data = [
  {
    task: 'Task 1',
    date: format(new Date(), DATE_FORMAT),
    endDate: format(new Date(), DATE_FORMAT),
    isCompleted: false,
  },
  {
    task: 'Task 2',
    date: format(new Date(), DATE_FORMAT),
    endDate: format(new Date(), DATE_FORMAT),
    isCompleted: false,
  },
];

export default function Task() {
  const [taskDescription, setTaskDescription] = useState('');
  // const [date, setDate] = useState(format(new Date(), DATE_FORMAT));
  // const [endDate, setEndDate] = useState(format(new Date(), DATE_FORMAT));
  const [taskList, setTaskList] = useState(data);
  const toast = useToast();

  function handleAddTask() {
    if (!taskDescription) {
      toast({
        position: 'top-left',
        title: 'Task description is required',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // const isTaskAlreadyAdded = taskList.some(
    //   (task) =>
    //     task.task === taskDescription &&  
    //     task.date === date &&
    //     task.endDate === endDate 
    // ); 
      

    // if (isTaskAlreadyAdded) {
    //   toast({
    //     position: 'top-left',
    //     title: 'Task already added',
    //     status: 'warning',
    //     duration: 3000,
    //     isClosable: true,
    //   });
    //   return;
    // }

    setTaskList([
      ...taskList,
      {
        task: taskDescription,
        date: format(new Date(), DATE_FORMAT),
        endDate: format(new Date(), DATE_FORMAT),
        isCompleted: false,
      },
    ]);
  }

  function handleTaskCompleted(index) {
    const newTaskList = [...taskList];
    newTaskList[index].isCompleted = !newTaskList[index].isCompleted;
    setTaskList(newTaskList);
  }

  function progressBar() {
    const totalTasks = taskList.length;
    const completedTasks = taskList.filter(task => task.isCompleted).length;
    return (completedTasks / totalTasks) * 100;
  }

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
          <Button colorScheme="teal" onClick={handleAddTask}>
            Add
          </Button>
        </Stack>
        <br />
        <Progress value={progressBar()} size="xs" colorScheme="pink" />
        <br />
        <List spacing={3}>
          {taskList.map((task, index) => (
            <ListItem key={index}>
              <Stack spacing={4} direction="row" align="center">
                <Checkbox onChange={() => handleTaskCompleted(index)} />
                <CustomControls task={task} />
              </Stack>
            </ListItem>
          ))}
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
