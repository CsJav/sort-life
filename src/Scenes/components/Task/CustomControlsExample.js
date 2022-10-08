import React from 'react';
import {
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  IconButton,
  Input,
  Stack,
  useEditableControls,
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';

export default function CustomControlsExample() {
  /* Here's a custom control */
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
      </Flex>
    );
  }

  return (
    <Editable
      textAlign="center"
      defaultValue="Rasengan"
      fontSize="2xl"
      isPreviewFocusable={false}
    >
      <Stack spacing={4} direction="row" align="center">
        <EditablePreview />
        {/* Here is the custom input */}
        <Input as={EditableInput} />
        <EditableControls />
      </Stack>
    </Editable>
  );
}
