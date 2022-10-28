import React, { useRef } from 'react';
import { CalendarIcon } from '@chakra-ui/icons';
import {
  // Box,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from '@chakra-ui/react';
import FocusLock from 'react-focus-lock';
import { Form } from './Form';

export const PopoverForm = ({ setDate, setEndDate, date, endDate }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = useRef(null);

  return (
    <>
      {/* <Box display="inline-block" mr={3}>
        Date...
      </Box> */}
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="right"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton size="sm" icon={<CalendarIcon />} />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form
              firstFieldRef={firstFieldRef}
              onCancel={onClose}
              setDate={setDate}
              setEndDate={setEndDate}
              date={date}
              endDate={endDate}
            />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  );
};
