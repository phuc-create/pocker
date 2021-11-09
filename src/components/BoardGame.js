import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import PlayerCard from './customs/PlayerCard'
import {data} from '../api/Api'

const BoardGame = () => {
    const [deck,setDeck] = useState(data)
    const [numberCheck,setNumberCheck] = useState({
        player:[],
        system:[]
    })
    const [papers,setPapers] = useState({
        player:0,
        system:0
    })
    const [stop,checkStop] = useState(false)
    const [pickCard,setPickCard] = useState({
        player:[],
        system:[]
    })
    const [result,setResult] = useState({
        PLAYER:0,
        SYSTEM:0,
        WINNER:''
    }) 
    const [checker,setChecker] = React.useState(false)
    const [view,setView] = useState(false)
    const takeCardAction = () =>{
        if(papers.player === 3){
            checkStop(true)
            checkResults()
            return
        }
        let playerTurn = deck[Math.floor(Math.random() * deck.length)]
        let systemTurn = deck[Math.floor(Math.random() * deck.length)]
        console.log(playerTurn,systemTurn)
        setPapers({player:papers.player + 1,system:papers.system + 1})
        setPickCard({
            player:[...pickCard.player,playerTurn],
            system:[...pickCard.system,systemTurn]
        })
        setNumberCheck({
            player:[...numberCheck.player,playerTurn.value],
            system:[...numberCheck.system,systemTurn.value]
        })
    }
    const checkResults = () => {
        let playerRsl = numberCheck.player.reduce((a,b)=> a + b,0) % 10
        let systemRsl = numberCheck.system.reduce((a,b)=> a + b,0) % 10
        console.log(playerRsl,systemRsl,numberCheck)
        setResult({
            PLAYER:playerRsl,
            SYSTEM:systemRsl,
            WINNER:playerRsl > systemRsl ? 'You Win 😍' : playerRsl < systemRsl ? 'You Lose 🐔' : 'Dickens'
        })
    }
    const handleViewResult = () => {
        setView(true)
        setChecker(true)
    }
    const handleRestart = () =>{
        setNumberCheck({
            player:[],
            system:[]
        })
        setPapers({
            player:0,
            system:0
        })
        checkStop(false)
        setPickCard({
            player:[],
            system:[]
        })
        setResult({
            PLAYER:0,
            SYSTEM:0,
            WINNER:''
        })
        setChecker(false)
        setView(false)
    }
    
    const styles = {
        boardGame:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            padding:0
        }
    }
    useEffect(()=>{
        setDeck(data)
    },[])
    return (
        <Container className='board'  maxWidth="lg" style={styles.boardGame}>
            <div className='boad-started'>
                <PlayerCard name="YOU" 
                    paper={papers.player} 
                    action={takeCardAction} 
                    pick={pickCard.player} 
                    stop={stop} 
                    result={result}
                    checker={checker}
                    view={view}
                    handleViewResult={handleViewResult}
                    handleRestart={handleRestart}/>
                <PlayerCard 
                    name="SYSTEM" 
                    paper={papers.system} 
                    action={takeCardAction} 
                    pick={pickCard.system} 
                    checker={checker}
                    view={view}
                />
            </div>
        </Container>
    )
}

export default BoardGame
