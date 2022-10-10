import React, { useState } from 'react';
import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  FormLabel,
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
  Stack,
} from '@chakra-ui/react';
import EditableControls from './EditableControls';
import { DeleteIcon } from '@chakra-ui/icons';

export default function CustomControls({ task }) {
  const [deleteHover, setDeleteHover] = useState(false);

  return (
    <Editable
      textAlign="center"
      defaultValue={task.task}
      isPreviewFocusable={false}
    >
      <Stack spacing={4} direction="row" align="center">
        <EditablePreview style={{ width: 475 }} />

        <Input value={task.task} as={EditableInput} style={{ width: 475 }} />

        <EditableControls />

        <Popover>
          <PopoverTrigger>
            <IconButton
              size="sm"
              icon={<DeleteIcon />}
              onMouseEnter={() => setDeleteHover(true)}
              onMouseLeave={() => setDeleteHover(false)}
              colorScheme={deleteHover ? 'red' : 'gray'}
              onClick={() => console.log('delete')}
            />
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
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
              <PopoverCloseButton />
              <PopoverBody style={{ textAlign: 'center' }}>
                <Button
                  colorScheme="gray"
                  style={{ margin: 5 }}
                  onClick={() => console.log('cancel')}
                >
                  Cancel
                </Button>
                <Button colorScheme="red" style={{ margin: 5 }}>
                  Delete
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Stack>
    </Editable>
  );
}
