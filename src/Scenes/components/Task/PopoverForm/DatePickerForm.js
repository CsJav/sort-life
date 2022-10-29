import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Switch,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import React, { useState } from 'react';

const DATE_FORMAT = "yyyy-MM-dd'T'HH:mm";

export const DatePickerForm = ({
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

  function handleToday() {
    setDate(format(new Date(), DATE_FORMAT));
    setEndDate(format(new Date(), DATE_FORMAT));
  }

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
        defaultValue={format(new Date(), DATE_FORMAT)}
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
      <ButtonGroup
        display="flex"
        justifyContent="center"
        alignItems="center"
        spacing="2.5rem"
      >
        <Button variant="outline" onClick={handleToday} colorScheme="twitter">
          Today
        </Button>
        <Button variant="outline" onClick={onCancel} colorScheme="whatsapp">
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  );
};
