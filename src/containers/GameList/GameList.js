import React, {Component} from 'react';
import classes from './GameList.module.css';

import axios from 'axios';
import Game from '../../components/Game/Game';

class GameList extends Component {

    state = {
        games: null,
        error: false
    }

    componentDidMount() {
        axios.get('https://app.rakuten.co.jp/services/api/BooksGame/Search/20170404?format=json&hardware=PS&page=1&hits=30&booksGenreId=006&applicationId=1009084489441242376')
            .then(response => {
                this.setState({games: response.data});
                console.log(response.data);
                console.log(this.state.games);
            })
            .catch(error => {
                this.setState({error: true});
            })
    }

    render() {
        let gamesArray = [];
        let gamesObject = {};

        //After fetching JSON
        if (this.state.games) {
            gamesArray = [];
            gamesObject = {};
            for (let i = 0; i < this.state.games.Items.length; i++) {
                let game = this.state.games.Items[i].Item;
                gamesObject = {
                    game: game
                };
                gamesArray.push(gamesObject);
            }
        }

        return(
            <div className={classes.GameList}>
                <ul className={classes.GameListUl}>
                    {gamesArray.map((gameObject, index) => (
                        <Game key={index} game={gameObject.game}/>
                    ))}
                </ul>
            </div>
        );
    }

} 

export default GameList;