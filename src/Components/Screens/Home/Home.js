import React from "react";
import { Container } from "../../Container/Container";
import { TodoCounter } from "../../TodoCounter/TodoCounter";

export function Home() {
    return (
        <Container className='content-column'>
            <Heading className='title'>Today</Heading>
            <Text className='subtitle'>Performing todo list</Text>
            <Container className='content-row'>
            <Container className='content-column'>
            <Container className='content-row'>
                <Text>28</Text>
                <Text>20</Text>
                <Text>Task</Text>
            </Container>
            <Text>Finish your task now!</Text>
            </Container>
            <ProgressBar currentVal={20} maxVal={28}/>
            </Container>
        </Container>
    );
};