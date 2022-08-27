import { Button, Center, Checkbox, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { RangeDatePicker } from "react-google-flight-datepicker";
import React from "react";
export default function Task({
    task,
    setTask,
    date,
    onDateChange,
    handleAddListButton,
    handleRemoveListButton
}) {
    return <>
        <FormControl>
            <FormLabel htmlFor="task">Task:</FormLabel>
            <Stack spacing={4} direction='row' align='center'>
                <Input id="task" variant='filled' value={task} onChange={e => setTask(e.target.value)} />
                <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                    htmlSize="sm"
                    style={{ width: "80%" }}
                />
            </Stack>
            <br />
            <FormLabel htmlFor="task">Task: {task}</FormLabel>
        </FormControl>
        <br />
        <Center>
            <h2>
                Pick a Date{" "}
                <Checkbox defaultChecked ml={8}>
                    Ask for date
                </Checkbox>
            </h2>
        </Center>
        <RangeDatePicker value={date} onChange={(startDate, endDate) => onDateChange(startDate, endDate)} />
        <br />
        <Center>
            <Button m={[4]} onClick={handleAddListButton} colorScheme="blue">
                Add to list
            </Button>
            <Button onClick={handleRemoveListButton} colorScheme="red">
                Remove last item
            </Button>
        </Center>
    </>;
}
