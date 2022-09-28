import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import CardContainer from '../../components/CardContainer/CardContainer'
import Title from '../../components/Title/Title';
import useHome from './hooks/useHome';
import './Home.css';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from "react"



export default function Home() {
    const { todo, doing, done, review, isLoading, setLoading, getTask} = useHome();
    console.log("HOME TODO", todo); 

    return (
        <Grid>
            <Title/>
                <div id="home-body" >
                    <CardContainer  tasks={todo} title="TODO" key={'todo'} />
                    <CardContainer  tasks={doing} title="DOING" key={'doing'} />
                    <CardContainer  tasks={review} title="REVIEW" key={'review'} />
                    <CardContainer  tasks={done} title="DONE" key={'done'} />
                </div>
        </Grid>
    )
}
