import React from 'react';
import {
  Editable,
  EditableInput,
  EditablePreview,
  Input,
  Stack,
} from '@chakra-ui/react';
import HambergerMenu from './HambergerMenu';
import EditableControls from './EditableControls';

export default function CustomControlsExample() {
  /* Here's a custom control */
  return (
    <Editable
      textAlign="center"
      defaultValue="Rasengan"
      isPreviewFocusable={false}
    >
      <Stack spacing={4} direction="row" align="center">
        <EditablePreview style={{ width: 475 }} />
        {/* Here is the custom input */}
        <Input as={EditableInput} style={{ width: 475 }} />
        <EditableControls />
        <HambergerMenu />
      </Stack>
    </Editable>
  );
}
