import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box, Paper } from '@mui/material'
import classNames from 'classnames'
const PlayerCard = ({name,action,pick,stop,result,view,checker,handleViewResult}) => {
   
    return (
        <Card sx={{ minWidth: '50%',margin:'15px' }}>
            <CardContent>
                <Typography sx={{ fontSize: 22 }} color="text.primary" gutterBottom>
                    {name}
                </Typography>
                <BoardCard check={checker} cards={pick}/>
                {
                    view ?
                        <Typography variant="h4" component="div" sx={{marginTop:'30px'}}>
                        Result: {result.WINNER}
                        </Typography> : null
                }
                
            </CardContent>
            <CardActions>
                {
                    stop ?  <Button size="small" onClick={()=> handleViewResult()}>Check results</Button> : <Button size="small" onClick={()=> action()} disabled={stop}>Take</Button>
                }
               
            </CardActions>
        </Card>
    )
}

export default PlayerCard

const BoardCard = ({check,cards}) =>{
    const styles = {
        PaperStyle:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            transition:'0.5s',
            fontSize:20
        }
    }
    const paperClass = classNames('box-paper',{'rotate' : check})
    return(
        <Box
            sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                width: '100%',
                height: 'auto',
                transition:'0.5s',
                backgroundColor: 'primary.dark',
                '& > :not(style)': {
                    m: 1,
                    width: 140,
                    height: 228, flexDirection:'column',
                },
            }}
        >
            {cards && cards.map(card=>{
                return(
                    <Paper style={styles.PaperStyle} className={paperClass} key={card.id * Math.random()}>
                        <div>
                            {card.ns}
                        </div>
                        {card.suits}
                        <div>
                            {card.value}
                        </div>
                    </Paper>
                )
            })}
        </Box>
    )
}
