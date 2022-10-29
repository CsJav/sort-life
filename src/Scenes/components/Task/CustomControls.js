import React, { useState } from 'react';
import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  SlideFade,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  useDisclosure,
} from '@chakra-ui/react';
import EditableControls from './EditableControls';
import { CalendarIcon, DeleteIcon } from '@chakra-ui/icons';

export default function CustomControls({ task, index, handleDeleteTask, handleEditTask }) {
  const [deleteHover, setDeleteHover] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  const formatedDate = new Date(task.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formatedEndDate = new Date(task.endDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formatedDateRange = `${formatedDate} - ${formatedEndDate}`;

  //if formatedDate and formatedEndDate have the same value, then show only one date
  const dateFormat =
    formatedDate === formatedEndDate ? formatedDate : formatedDateRange;

  // format date range eg (06/26/22 2:50 PM - 06/27/22 2:50 PM)

  // format date eg (October 26, 22 2:50 PM)

  const handleRemoveTask = () => {
    handleDeleteTask(index);
  };

  const handleChangeTask = value => {
    handleEditTask(index , value);
  };

  return (
    <Editable
      textAlign="center"
      defaultValue={task.task}
      isPreviewFocusable={false}
      onSubmit={value => handleChangeTask(value)}
    >
      <Stack spacing={4} direction="row" align="center">
        <EditablePreview style={{ width: 375 }} />

        <Input value={task.task} as={EditableInput} style={{ width: 375 }} />

        <EditableControls />

        <Popover>
          <PopoverTrigger>
            <IconButton
              className="delete"
              size="sm"
              icon={<DeleteIcon />}
              onMouseEnter={() => setDeleteHover(true)}
              onMouseLeave={() => setDeleteHover(false)}
              colorScheme={deleteHover ? 'red' : 'gray'}
            />
          </PopoverTrigger>
          <Portal>
            <PopoverContent style={{ width: 175 }}>
              <PopoverArrow />
              <PopoverHeader>
                <FormLabel
                  htmlFor="email-alerts"
                  mb="0"
                  style={{ textAlign: 'center' }}
                >
                  Are you sure?
                </FormLabel>
              </PopoverHeader>
              <PopoverCloseButton className="closer" />
              <PopoverBody style={{ textAlign: 'center' }}>
                <Button
                  colorScheme="red"
                  style={{ margin: 5 }}
                  onClick={handleRemoveTask}
                >
                  Delete
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>

        <IconButton icon={<CalendarIcon />} onClick={onToggle} size={'sm'} />
        <SlideFade in={isOpen} offsetY="20px">
          <HStack spacing={4}>
            {['md'].map(size => (
              <Tag size={size} key={size} variant="subtle" colorScheme="cyan">
                <TagLeftIcon boxSize="12px" as={CalendarIcon} />
                <TagLabel>{dateFormat}</TagLabel>
              </Tag>
            ))}
          </HStack>
        </SlideFade>
      </Stack>
    </Editable>
  );
}
