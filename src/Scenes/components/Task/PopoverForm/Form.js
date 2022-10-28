import { Button, ButtonGroup, FormControl, FormLabel, Input, Stack, Switch } from '@chakra-ui/react';
import React, { useState } from 'react';

// 2. Create the form
export const Form = ({
  firstFieldRef,
  onCancel,
  setDate,
  setEndDate,
  date,
  endDate,
}) => {
  const [hasEndDate, setHasEndDate] = useState(false);

  const handleRangeSwitch = e => {
    setHasEndDate(e.target.checked);
  };

  // console.log(startDate, endDate, hasEndDate);

  return (
    <Stack spacing={4}>
      <FormLabel htmlFor="startDate">Start Date</FormLabel>
      <Input
        className="startDate"
        value={date}
        onChange={e => setDate(e.currentTarget.value)}
        placeholder="Select Date and Time"
        size="md"
        type="datetime-local"
        htmlSize="sm"
        ref={firstFieldRef}
      />
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="endDate" disabled={!hasEndDate}>
          End Date:
        </FormLabel>
        <Switch id="email-alerts" onChange={handleRangeSwitch} />
      </FormControl>
      <Input
        className="endDate"
        disabled={!hasEndDate}
        value={endDate}
        onChange={e => setEndDate(e.currentTarget.value)}
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
