import React, { useState } from 'react'
import {
    Box, Heading, Text, Button, Grid, GridItem, Menu, MenuItem, MenuButton, MenuList, FormControl,
    FormLabel, Input, Center, Tr, Th, Td, Table, TableCaption, Thead, Tfoot, Tbody, TableContainer,
    Icon, useColorMode, Checkbox
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import { BiEdit, BiTrash } from 'react-icons/bi';
import {
    RangeDatePicker
} from "react-google-flight-datepicker";
import Card from '../components/card';
import "react-google-flight-datepicker/dist/main.css";


export default function Main() {

    const { colorMode, toggleColorMode } = useColorMode()

    function handleStartClick() {
        console.log("Button Clicked");
    }
    const [task, setTask] = useState()
    const [table, setTable] = useState([])
    const [date, setDate] = useState([])

    function handleAddListButton() {
        task === '' ? setTask('') : setTable([...table, task])
        setTask('')
        console.log(task, table)
    }
    function handleRemoveListButton() {
        setTable(table.slice(0, table.length - 1))
        console.log(task, table)
    }

    function onDateChange(start, end) {
        setDate([start, end])
        console.log('start', start)
        console.log('end', end)
    }

    function handleRemoveClick() {

    }


    return (
        <>
            <Box maxW='32rem'>
                <br />
                <br />
                <Heading mb={4} textAlign='center'> Life&apos;s Sorting Tool </Heading>{' '}
                <Text fontSize='xl'>
                    SortLife helps people get organized, anywhere anytime{' '}
                </Text>{' '}
                <br />
                <Center>
                    <Button colorScheme='blue' onClick={toggleColorMode}>
                        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                    </Button>
                </Center>
                <Center>
                    <Link to='/Start'>
                        <Button
                            size='lg'
                            colorScheme='green'
                            mt='24px'

                            onClick={() => handleStartClick()}
                        >
                            Get Started{' '}
                        </Button>
                    </Link>{' '}
                </Center>

                <br />
                <br />
                <FormControl>
                    <FormLabel htmlFor='email'>Task</FormLabel>
                    <Input value={task} onChange={e => setTask(e.target.value)} id='email' type='email' />
                </FormControl>
                <br />

                <Center>
                    <h2>Pick a Date <Checkbox defaultChecked ml={8}>Ask for date</Checkbox></h2>
                </Center>

                <RangeDatePicker
                    value={date}
                    onChange={(startDate, endDate) => onDateChange(startDate, endDate)}
                />
                <Menu>
                    <MenuButton mr={10} as={Button} rightIcon={<ChevronDownIcon />}>
                        Date Picker Type
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>
                <br />
                <Center>
                    <Button m={[4]} onClick={handleAddListButton} colorScheme='blue'>Add to list</Button>
                    <Button onClick={handleRemoveListButton} colorScheme='red'>Remove last item</Button>
                </Center>
                <br />
                <Center><Card /></Center>
                <br />
                <Center>
                    <Box boxShadow='xl' p='6' rounded='md' bg='white' boxSize="l" minW="900">
                        <TableContainer>
                            <Table variant='simple'>
                                <TableCaption>In Progress...</TableCaption>
                                <Thead>
                                    <Tr>
                                        <Th>Task</Th>
                                        <Th>From</Th>
                                        <Th>To</Th>
                                        <Th><Icon as={BiEdit} w={5} h={5} /></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {table.map((item, index) =>
                                        <Tr key={index}>
                                            <Td>{item}</Td>
                                            <Td>{date[0].toDateString()}</Td>
                                            <Td>{date[1].toDateString()}</Td>
                                            <Td><Button
                                                size='lg'
                                                colorScheme='red'
                                                mt='12px'
                                                onClick={() => handleRemoveClick()}
                                            >
                                                <Icon as={BiTrash} w={5} h={5} />
                                            </Button></Td>
                                        </Tr>
                                    )}

                                </Tbody>
                                <Tfoot>
                                    <Tr>
                                        <Th>Task</Th>
                                        <Th>From</Th>
                                        <Th>To</Th>
                                    </Tr>
                                </Tfoot>
                            </Table>
                        </TableContainer>
                    </Box>
                </Center>
                {console.log('FORMAT', date.toString())}
                <br />
                <br />
                <br />
                <Grid
                    h='200px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                    autoColumns
                >
                    <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                    <GridItem colSpan={2} bg='papayawhip' />
                    <GridItem colSpan={2} bg='papayawhip' />
                    <GridItem colSpan={4} bg='tomato' />
                </Grid>{' '}

            </Box>

        </>
    )
}
