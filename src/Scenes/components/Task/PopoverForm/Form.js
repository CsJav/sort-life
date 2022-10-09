import { Button, ButtonGroup, Input, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';

// 2. Create the form
export const Form = ({ firstFieldRef, onCancel }) => {
  const [taskDate, setTaskDate] = useState();

  return (
    <Stack spacing={4}>
      <label htmlFor="startDate">Start Date</label>
      <Input
        className="startDate"
        value={taskDate}
        onChange={e => setTaskDate(e.currentTarget.value)}
        placeholder="Select Date and Time"
        size="md"
        type="datetime-local"
        htmlSize="sm"
        ref={firstFieldRef}
      />
      <label htmlFor="endDate">End Date</label>
      <Input
        className="endDate"
        value={taskDate}
        onChange={e => setTaskDate(e.currentTarget.value)}
        placeholder="Select Date and Time"
        size="md"
        type="datetime-local"
        htmlSize="sm"
      />
      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button isDisabled colorScheme="teal">
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  );
};
