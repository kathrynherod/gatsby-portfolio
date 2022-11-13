import * as React from 'react';

const Intro = () => {
    return (

            <section className='intro__container'>
                <div className='intro__text'>
                    <h4 className='hey'>Hey Y'all! I'm</h4>
                    <h2 className='name animate__animated animate__zoomInDown'>Kathryn Herod</h2>
                    <h3>a <span className='dev'>Front End Developer</span></h3>
                    <p>with expertise in code quality, user experience, accessibility,
                        testing, and maintenance of Enterprise and Legacy software systems.
                        I excel in collaborating with product managers, designers, and stakeholders to understand
                        user needs and build software to meet those needs.
                    </p>
                </div>
            </section>
    )
}

export default Intro;
