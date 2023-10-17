import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import playstation from '../img/playstation.svg'
import nintendo from '../img/nintendo.svg'
import xbox from '../img/xbox.svg'
import steam from '../img/steam.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'
import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'


const GameDetail = ({ pathId }) => {
    const navigate = useNavigate();
    const exitDetailHandler = (e) => {
        const element = e.target;
        if(element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            navigate('/');
        }
    }

    const getPlatform = (platform) => {
        switch(platform){
            case 'PlayStation 5':
                return playstation;
            case 'Xbox Series S/X':
                return xbox;
            case 'PC':
                return steam;
            case 'Xbox One':
                return xbox;
            case 'PlayStation 4':
                return playstation;
            case 'Nintendo Switch':
                return nintendo;
            case 'macOS':
                return apple;
            case 'iOS':
                return apple;
            default:
                return gamepad
        }
    }

    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for(let i = 1; i <= 5; i++){
            if(i <= rating){
                stars.push(<img alt='star' key={i} src={starFull}></img>)
            }else{
                stars.push(<img alt='star' key={i} src={starEmpty}></img>)
            }
        }
        return stars;
    }

    const {screen, game, isLoading} = useSelector((state) => state.detail);
    return(
        <>
        {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler} > 
            <Detail layout layoutId={pathId} >
                <Stats>
                    <div className="rating">
                        <motion.h3 layoutId={`title ${pathId}`}  >{game.name}</motion.h3>
                        <p>Rating: {game.rating}</p>
                        {getStars()}
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            {game.platforms.map(data => (
                                <img 
                                key={data.platform.id}
                                src={getPlatform(data.platform.name)}
                                alt={data.platform.name}
                                ></img>
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <motion.img layoutId={`image ${pathId}`} src={game.background_image} alt="games" />
                </Media>
                <Description>
                    <p>{game.description_raw}</p>
                </Description>
                <div className="gallery">
                    {screen.results.map(screen => (
                        <img src={screen.image} key={screen.id} alt='game' />
                    ))}
                </div>
            </Detail>
        </CardShadow>
        )}
        </>
    );
};

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track{
        background: white;
    }
    `

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img {
        width: 100%;
    }

`

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        width: 2rem;
        height: 2rem;
        display: inline;
    }
    @media screen and (min-width: 360px) and (max-width: 420px) {
        img{
            width: 1rem;
            height: 1rem;
        }
    }
`
const Info = styled(motion.div)`
    text-align: center;

`

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
    @media screen and (min-width: 360px) and (max-width: 420px) {
        img{
            display: flex;
            margin-left: 0;
        }
    }
`

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
        object-fit: cover;
    }
    @media screen and (min-width: 360px) and (max-width: 420px) {
        margin-top: 2rem;
        img{
            width: 10rem;
            height: 8rem;
            object-fit: cover;
        }
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;

`

export default GameDetail