import React from 'react'
import { FaGithub, FaLinkedinIn, FaIdBadge } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '#about',
    text: 'about',
  },
  {
    id: 2,
    url: '#portfolio',
    text: 'portfolio'
    ,

  },
  {
    id: 3,
    url: '#contact',
    text: 'contact',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://github.com/iamha1',
    icon: <FaGithub />,
    title: "GitHub",
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/iamha/',
    icon: <FaLinkedinIn />,
    title: "LinkedIn",
  },
  {
    id: 3,
    url: 'https://drive.google.com/file/d/1svKy1VrDPFOp0hJMeY7zbv8zulGc6GWX/view?usp=sharing" target="_blank" title="Resume" rel="noreferrer',
    icon: <FaIdBadge />,
    title: "Resume",
  },
]