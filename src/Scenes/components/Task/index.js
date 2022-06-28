import { Button, Center, Checkbox, FormControl, FormLabel, Input } from "@chakra-ui/react";
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
    return <><FormControl>
        <FormLabel htmlFor="email">Task</FormLabel>
        <Input value={task} onChange={e => setTask(e.target.value)} id="email" type="email" />
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
        </Center></>;
}
