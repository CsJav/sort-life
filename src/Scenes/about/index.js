import React from "react";
import { Center } from "@chakra-ui/react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'

function About() {
    return (
        <>
            <Center bg='tomato' h='100px' color='white'>
                <Breadcrumb>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='/About'>About</BreadcrumbLink>
                    </BreadcrumbItem>

                </Breadcrumb>
            </Center>
            <Center>
                <h1>About page</h1>
            </Center>
        </>
    );
}

export default About;
