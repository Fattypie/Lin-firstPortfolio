import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><AiFillLinkedin/></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><AiFillGithub/></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><AiFillInstagram/></a>
        </div>
    )
}

export default HeaderSocials