import React, { useState } from 'react';
import {
  Button,
  Center,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  List,
  ListItem,
  Progress,
  Stack,
  Tag,
  useToast,
} from '@chakra-ui/react';
import Card from '../Card';
import CustomControls from './CustomControls';
import { format } from 'date-fns';
import { PopoverForm } from './PopoverForm/PopoverForm';
import confetti from 'https://cdn.skypack.dev/canvas-confetti@1';


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
  {
    task: 'Task 3',
    date: format(new Date(), DATE_FORMAT),
    endDate: format(new Date(), DATE_FORMAT),
    isCompleted: false,
  },
  {
    task: 'Task 4',
    date: format(new Date(), DATE_FORMAT),
    endDate: format(new Date(), DATE_FORMAT),
    isCompleted: false,
  },
];

export default function Task() {
  const [taskDescription, setTaskDescription] = useState('');
  const [date, setDate] = useState(format(new Date(), DATE_FORMAT));
  const [endDate, setEndDate] = useState();
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

    const isTaskAlreadyAdded = taskList.some(
      task =>
        task.task === taskDescription &&
        task.date === date &&
        task.endDate === endDate,
    );

    if (isTaskAlreadyAdded) {
      toast({
        position: 'top-left',
        title: 'Task already added',
        description: 'Try changing the task description or date',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (taskDescription && !date && !endDate) {
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

    setTaskList([
      ...taskList,
      {
        task: taskDescription,
        date,
        endDate,
        isCompleted: false,
      },
    ]);
    setTimeout(() => {
      document.getElementsByClassName('task')[0].focus();
    }, 0);
  }

  function handleDeleteTask(index) {
    const updatedTaskList = taskList.filter((task, i) => i !== index);
    console.log('⚡updatedTaskList~', { updatedTaskList });
    setTaskList(updatedTaskList);
  }

  function handleEditTask(index, value) {
    const updatedTaskList = taskList.map((task, i) => {
      if (i === index) {
        return { ...task, task: value };
      }
      return task;
    });
    setTaskList(updatedTaskList);
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  function handleTaskCompleted(index) {
    const newTaskList = [...taskList];
    newTaskList[index].isCompleted = !newTaskList[index].isCompleted;
    setTaskList(newTaskList);
  }

  function progressBar() {
    const totalTasks = taskList.length;
    const completedTasks = taskList.filter(task => task.isCompleted).length;
    if ((completedTasks / totalTasks) * 100 === 100) {
      confetti({
        particleCount: 20,
        spread: 80,
      });
    }
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
            className="task"
            variant="filled"
            value={taskDescription}
            onChange={e => setTaskDescription(e.currentTarget.value)}
            placeholder="Write your task here..."
            size="sm"
            onKeyDown={handleKeyDown}
          />
          <PopoverForm
            setDate={setDate}
            setEndDate={setEndDate}
            date={date}
            endDate={endDate}
          />
          <Button colorScheme="teal" onClick={handleAddTask}>
            Add
          </Button>
        </Stack>
        <br />
        {taskList.length > 0 && (
          <HStack>
            <Progress
              value={progressBar()}
              borderRadius="full"
              size="xs"
              colorScheme="pink"
              style={{ width: '88%' }}
            />
            {['md'].map(size => (
              <Tag size={size} key={size} variant="subtle" colorScheme="cyan">
                {`% ${progressBar()}`}
              </Tag>
            ))}
          </HStack>
        )}
        <br />
        <List spacing={3}>
          {taskList.map((task, index) => (
            <ListItem key={index}>
              <Stack spacing={4} direction="row" align="center">
                <Checkbox onChange={() => handleTaskCompleted(index)} />
                <CustomControls
                  task={task}
                  index={index}
                  handleDeleteTask={handleDeleteTask}
                  handleEditTask={handleEditTask}
                />
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
