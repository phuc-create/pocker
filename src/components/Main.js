import React from 'react'
import { Box } from '@mui/material'
import LinkControl from './customs/Link'
const Main = () => {
    const styles = {
        BoxStyle:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            borderRadius:'10px'
        }
    }
    return (
        <React.Fragment>
            <Box style={styles.BoxStyle} sx={{margin:'20px',width:'450px' }} >
                <LinkControl link="start" title="New Game" />
            </Box>
        </React.Fragment>
    )
}

export default Main
