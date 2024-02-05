import { Link, List } from '@chakra-ui/react'
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
                <Link href='#home'>Home</Link>
            </li>
            <li className={styles.navItem} >
                <Link href='#about'>About Me</Link>
            </li>
            <li className={styles.navItem}>
                <Link href='#portfolio'>Portfolio</Link>
            </li>
            <li className={styles.navItem} >
                <Link href='#contact'>Contact Me</Link>
            </li>
            <div className={styles.toggleClose}>
                <IoMdClose size={30}
                onClick={() => setExpanded(!expanded)}/>
            </div>
        </List>
            <div className={styles.toggleOpen}>
                <TiThMenu color='#D69E2E' size={20}
                onClick={() => setExpanded(!expanded)}/>
            </div>
    </div>

  )
}

export default NavBar