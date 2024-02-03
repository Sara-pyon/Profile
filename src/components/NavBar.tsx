import { List, Text } from '@chakra-ui/react'
import Logo from './Logo'
import styles from './NavBar.module.css'
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);
    const showMenu = expanded? styles.show : '';

  return (
    <div className={styles.nav}>
        <Logo />
        <List className={[styles.navList,showMenu].join(' ')}>
            <li className={styles.navItem} >
                <Text>Home</Text>
            </li>
            <li className={styles.navItem} >
                <Text>About Me</Text>
            </li>
            <li className={styles.navItem}>
                <Text>Portfolio</Text>
            </li>
            <li className={styles.navItem} >
                <Text>Contact Me</Text>
            </li>
            <div className={styles.toggleClose}>
                <IoMdClose size={30}
                onClick={() => setExpanded(!expanded)}/>
            </div>
        </List>
            <div className={styles.toggleOpen}>
                <TiThMenu color='#D69E2E' size={15}
                onClick={() => setExpanded(!expanded)}/>
            </div>
    </div>

  )
}

export default NavBar