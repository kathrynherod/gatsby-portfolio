import './variables.scss';

// const theme = {
//     light: {
//         id: "t_light_01",
//         name: "Light",
//         colors:  {
//             body: $ghost-white,
//         }

//     },
//     dark: {
//         id: "t_dark_01",
//         name: "Dark",
//         colors: {
//             body: $dark-blue,
//         }
//     },
// };

export const base = {
    colors: {
        darkBlue: '#0A2463',
        lightBlue: '#3E92CC',
        ghostWhite: '#FFFAFF',
        blackChocolate: '#1E1B18',
        orangeSoda: '#F55D3E',
        cerise: '#D8315B',
        lightGreen: '#7AE582',
        blueGreen: '#1DD3B0',
        slateGreen: '#0E402D',
    },
    space: ['0px', '2px', '4px', '8px', '16px', '32px', '64px'],
    fonts: {
        heading: 'Inter, system-ui, sans-serif',
        body: 'Inter, system-ui, sans-serif',
    },
    fontSizes: {
        xs: '0.75rem',
        sm: '1rem',
        md: '1.25rem',
        lg: '1.5rem',
        xl: '2rem',
    },
}
export const light = {
    background: base.colors.ghostWhite,
    button: {
        background: base.colors.darkBlue,
    },
    link: {
        active: base.colors.slateGreen,
        text: base.colors.darkBlue,
    },
    primary: '#4851f4',
    nav: base.colors.ghostWhite,
    text: base.colors.darkBlue,
}
export const dark = {
    background: base.colors.darkBlue,
    button: {
        background: base.colors.ghostWhite,
    },
    link: {
        active: base.colors.lightGreen,
        text: base.colors.ghostWhite,
    },
    primary: '#4851f4',
    nav: base.colors.darkBlue,
    text: base.colors.ghostWhite,
}
