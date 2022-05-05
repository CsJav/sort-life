import React, { useState, useEffect } from 'react'
import {
    Box, Heading, Text, Button, Grid, GridItem, Menu, MenuItem, MenuButton, MenuList, FormControl,
    FormLabel,
    FormHelperText, Input, ListItem, UnorderedList
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";


export default function Main() {

    function handleStartClick() {
        console.log("Button Clicked");
    }
    const [task, setTask] = useState()
    const [table, setTable] = useState([])

    useEffect(() => {

    }, [table])

    function handleAddListButton() {
        setTask('')
        setTable([...table, task])
        console.log(task, table)
    }
    function handleRemoveListButton() {
        table.splice(table.length - 1, 1)
        setTable(table)
        console.log(task, table)
    }

    return (
        <>
            <Box maxW='32rem'>

                <Heading mb={4}> Modern Life Sorting Tool </Heading>{' '}

                <Text fontSize='xl'>
                    SortLife helps people get organized, anywhere anytime{' '}
                </Text>{' '}
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
                <br />
                <br />
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Actions
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
                <br />
                <FormControl>
                    <FormLabel htmlFor='email'>Task</FormLabel>
                    <Input value={task} onChange={e => setTask(e.target.value)} id='email' type='email' />
                    <FormHelperText>
                        Add Task to List
                    </FormHelperText>
                </FormControl>
                <br />
                <Button onClick={handleAddListButton} colorScheme='blue'>Add to list</Button>
                <Button onClick={handleRemoveListButton} colorScheme='red'>Remove last item</Button>
                <br />
                <br />
                <UnorderedList>
                    {table.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
                </UnorderedList>
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
