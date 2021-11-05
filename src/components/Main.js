import {Button, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  
    return (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Pocker Game 
                </Typography>
                <Button variant="outlined">
                    <Link className="link-control" to="/debt">
                      Your Debts
                    </Link>
                </Button>
      
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </React.Fragment>
    )
}

export default Main
