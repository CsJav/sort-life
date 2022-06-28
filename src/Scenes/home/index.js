
import React, { useState } from "react";
import {
    Box,
    Heading,
    Text,
    Button,
    Center,
    useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import "react-google-flight-datepicker/dist/main.css";
import RowTable from "../components/Table";
import Task from "../components/Task";

export default function Main() {
    const { colorMode, toggleColorMode } = useColorMode();

    function handleStartClick() {
        console.log("Button Clicked");
    }
    const [task, setTask] = useState();
    const [table, setTable] = useState([]);
    const [date, setDate] = useState([]);

    function handleAddListButton() {
        task === "" ? setTask("") : setTable([...table, task]);
        setTask("");
        console.log(task, table);
    }
    function handleRemoveListButton() {
        setTable(table.slice(0, table.length - 1));
        console.log(task, table);
    }

    function onDateChange(start, end) {
        setDate([start, end]);
        console.log("start", start);
        console.log("end", end);
    }

    return (
        <>
            <Box maxW="32rem">
                <br />
                <br />
                <Heading mb={4} textAlign="center">
                    {" "}
                    Life&apos;s Sorting Tool{" "}
                </Heading>{" "}
                <Text fontSize="xl">
                    SortLife helps people get organized, anywhere anytime{" "}
                </Text>{" "}
                <br />
                <Center>
                    <Button colorScheme="blue" onClick={toggleColorMode}>
                        Toggle {colorMode === "light" ? "Dark" : "Light"}
                    </Button>
                </Center>
                <Center>
                    <Link to="/Start">
                        <Button
                            size="lg"
                            colorScheme="green"
                            mt="24px"
                            onClick={() => handleStartClick()}
                        >
                            Get Started{" "}
                        </Button>
                    </Link>{" "}
                </Center>
                <br />
                <br />
                <Task task={task} setTask={setTask} date={date} onDateChange={onDateChange} handleAddListButton={handleAddListButton} handleRemoveListButton={handleRemoveListButton} />
                <br />
                <Center>
                    <Card />
                </Center>
                <br />
                <Center>
                    <RowTable table={table} date={date} />
                </Center>
            </Box>
        </>
    );
}
