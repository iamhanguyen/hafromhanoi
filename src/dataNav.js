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
    text: 'portfolio',
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
    url: 'https://www.facebook.com/',
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com/',
    icon: <FaLinkedinIn />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/',
    icon: <FaIdBadge />,
  },
]