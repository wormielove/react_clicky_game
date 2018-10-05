import React, { Component } from 'react';
import FadeIn from '../transitions/fade';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Ernie_1',
        img: 'img/Ernie_1.jpg',
        clicked: false
    },
    {
        name: 'Ernie_2',
        img: 'img/Ernie_2.jpg',
        clicked: false
    },
    {
        name: 'Ernie_3',
        img: 'img/Ernie_3.jpg',
        clicked: false
    },
    {
        name: 'Ernie_4',
        img: 'img/Ernie_4.jpg',
        clicked: false
    },
    {
        name: 'Ernie_5',
        img: 'img/Ernie_5.jpg',
        clicked: false
    },
    {
        name: 'Ernie_6',
        img: 'img/Ernie_6.jpg',
        clicked: false
    },
    {
        name: 'Ernie_7',
        img: 'img/Ernie_7.jpg',
        clicked: false
    },
    {
        name: 'Ernie_8',
        img: 'img/Ernie_8.jpg',
        clicked: false
    },
    {
        name: 'Ernie_9',
        img: 'img/Ernie_9.jpg',
        clicked: false
    },
    {
        name: 'Ernie_10',
        img: 'img/Ernie_10.jpg',
        clicked: false
    },
    {
        name: 'Ernie_11',
        img: 'img/Ernie_11.jpg',
        clicked: false
    },
    {
        name: 'Ernie_12',
        img: 'img/Ernie_12.jpg',
        clicked: false
    },
    {
        name: 'Ernie_13',
        img: 'img/Ernie_13.jpg',
        clicked: false
    },
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Click on every pic of Ernie one time. After every click, the board will shuffle!<br/>Be careful, because if you click the same picture twice the game will restart! Good luck!!</h4>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}