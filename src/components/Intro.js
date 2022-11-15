import * as React from 'react';
import Box from '@mui/material/Container';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const Intro = ({ theme }) => {
    const Section = styled.section`
        align-items: center;
        background: ${theme.colors.background};
        display: flex;
        height: 100vh;
        padding-top: 4rem;
    `;

    return (
        <Section className='intro__wrapper'>
            <Container>
                <Typography variant="h5" sx={{ color: theme.colors.text }}>
                    Hey Y'all! I'm
                </Typography>
                <Slide in={true} direction="up" timeout={1000} >
                    <Typography variant="h3" sx={{
                        color: theme.colors.text,
                        fontFamily: 'Vast Shadow, cursive',
                        padding: 0,
                    }}>
                        Kathryn Herod
                    </Typography>
                </Slide>
                <Typography variant="h4" sx={{ color: theme.colors.primary }}>
                    a <span className='dev'>Front End Developer</span>
                </Typography>
                <Typography variant="body1" sx={{ color: theme.colors.text }}>
                    with expertise in code quality, user experience, accessibility,
                    testing, and maintenance of Enterprise and Legacy software systems.
                    I excel in collaborating with product managers, designers,
                    and stakeholders to understand
                    user needs and build software to meet those needs.
                </Typography>
            </Container>
        </Section>
    )
}

export default Intro;
