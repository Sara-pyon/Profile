import images from "./images"
import { MdComputer } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { LiaGitAlt } from "react-icons/lia";

const profile = {
    name :'Sara Komatsu',
    tel: '+1 403-714-8639',
    mail: 'sara.pyonnext@gmail.com',
    adress: 'Canada - Alberta',
    message: "During my university years, I engaged in data analysis using Java and Python and conducted research in the field of Internet science. After graduating from a four-year university in Japan with a degree in Information and Mathematical Science, I developed an interest in web development. Through self-study, I've created several websites as practical exercises and I really enjoy it.",
    github: ""
}


const profileEducation = [{
    title: `Department of Mathematical Sciences`,
    location: 'Japan - Ibaraki University',
    term: '2019-2023',
    icon: FaGraduationCap
},{
    title: `HTML, CSS, Javascript Ultimate Courses`,
    location: 'Online Courses - Mosh Hamadani',
    term: '2023 Sep - 2023 Nov',
    icon: MdComputer
},{
    title: `React Ultimate Courses`,
    location: 'Online Courses - Mosh Hamadani',
    term: '2023 Nov ~ 2023 Dec',
    icon: FaReact
},{
    title: `The Ultimate Git Course`,
    location: 'Online Courses- Mosh Hamadani',
    term: '2023 Jan ~ 2024 Feb',
    icon: LiaGitAlt
}
]

const skills = [{
    name: 'HTML5',
    icon: images.html
},{
    name: 'CSS3',
    icon: images.css
},{
    name: 'JavaScript',
    icon: images.javascript
},{
    name: 'TypeScript',
    icon: images.typescript
},{
    name: 'Python',
    icon: images.python
},{
    name: 'Java',
    icon: images.java
},{
    name: 'React',
    icon: images.react
},{
    name: 'Chakra',
    icon: images.chakra
},{
    name: 'Bootstrap',
    icon: images.bootstrap
},{
    name: 'Node.js',
    icon: images.nodejs
},{
    name: 'Git',
    icon: images.git
},{
    name: 'Figma',
    icon: images.figma
},{
    name: 'Adobe Photo Shop',
    icon: images.adobe
}]

export default {profile, profileEducation, skills}
