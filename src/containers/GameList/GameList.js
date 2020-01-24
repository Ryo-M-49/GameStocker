import React, {Component} from 'react';
import classes from './GameList.module.css';

import axios from 'axios';

import Game from '../../components/Game/Game';
import ReactPaginate from 'react-paginate';

class GameList extends Component {

    state = {
        games: null,
        currentPage: 1,
        error: false
    }

    componentDidMount() {
        axios.get(`https://app.rakuten.co.jp/services/api/BooksGame/Search/20170404?format=json&hardware=PS&page=${this.state.currentPage}&hits=30&booksGenreId=006&applicationId=1009084489441242376`)
            .then(response => {
                this.setState({games: response.data});
                console.log(this.state.games);
            })
            .catch(error => {
                this.setState({error: true});
            })
    }

    /**
     * Handler to change a page of a game list to render.
     * @param {object} event - Event that holds the information of the clicked object.
     * @returns  - change the state "currentPage" from the current page to the clicked page
    */
    pageChangedHandler(event) {
        this.setState({currentPage: Number(event.target.id)});
    }

    render() {
        let gamesArray = [];
        let gamesObject = {};
        let pagination = null;

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

            pagination = (
                <ReactPaginate 
                    pageCount={this.state.games.pageCount}
                    pageRangeDisplayed={5}
                    marginPagesDisplay={2}
                    onPageChange={this.pageChangedHandler}

                />
            );
        } else {
            pagination = (
                <div>
                    now loading
                </div>
            );
        }

        return(
            <div className={classes.GameList}>
                <ul className={classes.GameListUl}>
                    {gamesArray.map((gameObject, index) => (
                        <Game 
                            key={index} 
                            game={gameObject.game}/>
                    ))}
                </ul>
                {pagination}
            </div>
        );
    }

} 

export default GameList;