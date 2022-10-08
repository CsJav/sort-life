import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Center,
  useColorMode,
  Breadcrumb,
  BreadcrumbItem,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import RowTable from '../components/Table';
import Task from '../components/Task';
import 'react-google-flight-datepicker/dist/main.css';

export default function Main() {
  const { colorMode, toggleColorMode } = useColorMode();

  const navigate = useNavigate();

  function handleStartClick() {
    navigate('/start');
  }
  const [task, setTask] = useState();
  const [table, setTable] = useState([]);
  const [date, setDate] = useState([]);
  const taskList = table.map((item, index) => <Card key={index} task={item} />);

  function handleAddListButton() {
    task === '' ? setTask('') : setTable([...table, task]);
    setTask('');
    console.log(task, table);
  }
  function handleRemoveListButton() {
    setTable(table.slice(0, table.length - 1));
    console.log(task, table);
  }

  function onDateChange(start, end) {
    setDate([start, end]);
    console.log('start', start);
    console.log('end', end);
  }
  return (
    <>
      <Box maxW="32rem">
        <br />
        <br />
        <Heading mb={4} textAlign="center">
          {' '}
          Life&apos;s Sorting Tool{' '}
        </Heading>{' '}
        <Text fontSize="xl">
          SortLife helps people get organized, anywhere anytime{' '}
        </Text>{' '}
        <br />
        <Center>
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
        </Center>
        <br />
        <Task
          task={task}
          setTask={setTask}
          date={date}
          onDateChange={onDateChange}
          handleAddListButton={handleAddListButton}
          handleRemoveListButton={handleRemoveListButton}
        />
        <br />
        <Center>{taskList}</Center>
        <br />
        <Center>
          <RowTable table={table} date={date} />
        </Center>
      </Box>
    </>
  );
}
