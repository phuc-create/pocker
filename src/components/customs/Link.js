import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const LinkControl = ({link,title}) => {
    return (
        <Button variant="outlined" className='mui-btn'>
            <Link to={link} className='mui-btn-link-control'>
                {title}
            </Link>
        </Button>
    )
}

export default LinkControl
