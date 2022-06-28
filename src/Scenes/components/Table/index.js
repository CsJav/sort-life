import { Box, Button, Icon, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

export default function RowTable({ table, date }) {
    return <Box boxShadow="xl" p="6" rounded="md" bg="white" boxSize="l" minW="900">
        <TableContainer>
            <Table variant="simple">
                <TableCaption>In Progress...</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Task</Th>
                        <Th>From</Th>
                        <Th>To</Th>
                        <Th>
                            <Icon as={BiEdit} w={5} h={5} />
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {table.map((item, index) => <Tr key={index}>
                        <Td>{item}</Td>
                        <Td>{date[0].toDateString()}</Td>
                        <Td>{date[1].toDateString()}</Td>
                        <Td>
                            <Button size="lg" colorScheme="red" mt="12px">
                                <Icon as={BiTrash} w={5} h={5} />
                            </Button>
                        </Td>
                    </Tr>)}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>Task</Th>
                        <Th>From</Th>
                        <Th>To</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    </Box>;
}