import * as React from 'react';
import Grid from '@mui/material/Grid';
import KatAndOlive from '../images/KatAndOlive.jpeg';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';

function About ({theme}) {

  const Section = styled.section`
    align-items: center;
    background: ${theme.colors.background};
    display: flex;
    height: 100vh;
    padding-top: 4rem;
  `;
  const Image = styled.img`
    border-radius: 50%;
    max-width: 90%;
  `;

  return (
      <Section id="about">
        <Paper sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
           <Image src={KatAndOlive}/>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography>xs=6 md=4</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography>xs=6 md=4</Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <Typography>xs=6 md=8</Typography>
          </Grid>
        </Grid>
        </Paper>

    </Section>
    );

}

export default About;
