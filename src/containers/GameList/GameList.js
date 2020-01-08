import React, {Component} from 'react';
import classes from './GameList.module.css';

import axios from 'axios';
import Aux from '../../hoc/Aux/Aux';
import Game from '../../components/Game/Game';

class GameList extends Component {

    state = {
        games: null,
        error: false
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('https://app.rakuten.co.jp/services/api/BooksGame/Search/20170404?format=json&hardware=PS&page=10&hits=30&booksGenreId=006&applicationId=1009084489441242376')
            .then(response => {
                this.setState({games: response.data});
                console.log(this.state.games);
            })
            .catch(error => {
                this.setState({error: true});
            })
    }

    render() {
        let gamesArray = [];
        let gamesObject = {};

        if (this.state.games) {
            gamesArray = [];
            gamesObject = {};
            for (let i = 0; i < this.state.games.Items.length; i++) {
                let title = this.state.games.Items[i].Item.title;
                let thumbnail = this.state.games.Items[i].Item.largeImageUrl;
                gamesObject = {
                    title: title, 
                    thumbnail: thumbnail
                };
                gamesArray.push(gamesObject);
                console.log(gamesObject);
            }
        }

        return(
            <div className={classes.GameList}>
                <ul className={classes.GameListUl}>
                    {gamesArray.map((game, index) => (
                        <Game key={index} title={game.title} thumbnail={game.thumbnail}/>
                    ))}
                </ul>
            </div>
        );
    }

} 

export default GameList;