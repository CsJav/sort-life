
import React, { useState } from 'react';
import { Box, Center, useColorMode } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import Card from '../components/Card';
import RowTable from '../components/Table';
import Task from '../components/Task';
import { Navbar } from './NavBar/Navbar';
import Header from './Header/Header';

export default function Main() {
  const [task, setTask] = useState();
  const [table, setTable] = useState([]);
  const [date, setDate] = useState([]);
  const taskList = table.map((item, index) => <Card key={index} task={item} />);
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  function handleStartClick() {
    navigate('/start');
  }

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
        <Header />
        <br />
        <Center>
          <Navbar
            handleStartClick={handleStartClick}
            toggleColorMode={toggleColorMode}
            colorMode={colorMode}
          />
        </Center>
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
