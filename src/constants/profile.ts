import images from "./images"

const profile = {
    name :'Sara Komatsu',
    tel: '+1 403-714-8639',
    mail: 'sara.pyonnext@gmail.com',
    adress: 'Canada - Alberta',
    message: "During my university years, I engaged in data analysis using Java and Python and conducted research in the field of Internet science. After graduating from a four-year university in Japan with a degree in Information and Mathematical Science, I developed an interest in web development. Through self-study, I've created several websites as practical exercises and I really enjoy it.",
}

const profileEducation = [{
    title: `Department of <br/> Mathematical Sciences`,
    location: 'Japan - Ibaraki University',
    term: '2019-2023'
},{
    title: `HTML , CSS, Javascript <br/> ultimate courses`,
    location: 'OnlineCourses <br/> -Mosh Hamadani',
    term: '2023 Sep - 2023 Nov'
},{
    title: `React ultimate courses`,
    location: 'OnlineCourses <br/> -Mosh Hamadani',
    term: '2023 Nov ~ 2023 Dec'
},{
    title: `The ultimate Git course`,
    location: 'OnlineCourses <br/> -Mosh Hamadani',
    term: '2023 Jan ~ 2024 Feb'
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
