import images from './images'

export interface Portfolio{
    title: string;
    image: string;
    url: string;
    github?: string;
    skills: string[];
}

const portfolios = [
    {
        title: 'E-book Website',
        image: images.portfolio1,
        url: 'https://e-bookwebsite.netlify.app/',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'Netlify', 'Git']
    },
    {
        title: 'Christmas Website',
        image: images.portfolio2,
        url: 'https://main--christmas-websitebysara.netlify.app/',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'Netlify', 'Git']
    },
    {
        title: 'Youtube Sidebar',
        image: images.portfolio3,
        url: 'https://youtube-sidebar.netlify.app/',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'Netlify', 'Git']
    },
    {
        title: 'Travel Website',
        image: images.portfolio4,
        url: 'https://6578bae32a5c070008dddebd--travel-websitebysara.netlify.app/',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'Netlify', 'Git']
    },
    {
        title: 'Moshify Website',
        image: images.portfolio5,
        url: 'https://654af43db57e610008cca27b--moshfiedbysara.netlify.app/',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'Netlify', 'Git']
    }
]
const portfolioReact =[
    {
        title: 'Games Website',
        image: images.react1,
        github: 'https://github.com/Sara-pyon/game-hub',
        url: 'https://game-hub-seven-liart.vercel.app',
        skills: ['React','TypeScript','Chakra','Axios','ReactQuery','Zustand','Node.js','Zod','ReactRouter','Git','Vercel']
    },
    {
        title: 'Car Website',
        image: images.react2,
        github: 'https://github.com/Sara-pyon/car_hub',
        url: 'https://car-e68hizyxo-sara-pyons-projects.vercel.app',
        skills: ['React','TypeScript','Chakra','Axios','ReactQuery','Zustand','Node.js','ReactRouter','Git','Vercel']
    },
    {
        title: 'Restaurant Website',
        image: images.react1,
        github: 'https://github.com/Sara-pyon/Gericht',
        url: 'https://gericht-bice-omega.vercel.app',
        skills: ['React','TypeScript','Bootstrap','Axios','ReactQuery','Zustand','Node.js','ReactRouter','Git','Vercel']
    }
]

export default {portfolios, portfolioReact}