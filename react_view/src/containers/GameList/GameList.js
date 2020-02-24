import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './GameList.module.css';
import axios from 'axios';
import Game from '../../components/Game/Game';
import Pagination from '../../components/UI/Pagination/Pagination';
import * as actionTypes from '../../store/actions/gameList';

class GameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: null,
            currentPage: 1,
            error: false,
        };
        this.pageChangedHandler = this.pageChangedHandler.bind(this);
    }

    componentDidMount() {
        axios
            .get(
                `https://app.rakuten.co.jp/services/api/BooksGame/Search/20170404?format=json&hardware=PS&page=${this.state.currentPage}&hits=30&booksGenreId=006&applicationId=1009084489441242376`
            )
            .then(response => {
                this.setState({ games: response.data });
                console.log(this.state.games);
            })
            .catch(error => {
                this.setState({ error: true });
            });
    }

    /**
     * Handler to render a page of the clicked number in the pagination.
     * @returns {nothing} - fetches the JSON data of the clicked page and set a new value of state "games".
     */
    renderClickedPageHandler() {
        axios
            .get(
                `https://app.rakuten.co.jp/services/api/BooksGame/Search/20170404?format=json&hardware=PS&page=${this.state.currentPage}&hits=30&booksGenreId=006&applicationId=1009084489441242376`
            )
            .then(response => {
                this.setState({ games: response.data });
                console.log(this.state.games);
            })
            .catch(error => {
                this.setState({ error: true });
            });
    }

    /**
     * Handler to change a page of a game list to render.
     * @param {object} data - holds the information of the clicked object.
     * @returns {nothing} - changes the state "currentPage" from the current page to the clicked page
     */
    pageChangedHandler(selectedPage) {
        // const selectedPage = data.selected + 1; // Since data.selected starts from 0
        this.setState(
            { currentPage: selectedPage },
            this.renderClickedPageHandler
        );
        console.log('currentPage', this.state.currentPage);
    }

    render() {
        const gamesArray = [];
        let gamesObject = {};

        let pagination = null;

        // After fetching JSON data
        if (this.state.games) {
            for (let i = 0; i < this.state.games.Items.length; i++) {
                const game = this.state.games.Items[i].Item;
                gamesObject = {
                    game: game,
                };
                gamesArray.push(gamesObject);
            }

            pagination = (
                <Pagination
                    pageCount={this.state.games.pageCount}
                    pageChangedHandler={(event, page) =>
                        this.pageChangedHandler(page)
                    }
                />
            );
        }

        return (
            <div className={classes.GameList}>
                <ul className={classes.GameListUl}>
                    {gamesArray.map((gameObject, index) => (
                        <Game key={index} game={gameObject.game} />
                    ))}
                </ul>
                <div className={classes.Pagination}>{pagination}</div>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        games: state.games,
        currentPage: state.currentPage,
        error: state.error
    };
}

const mapDispatchToProps = dispatch => {
    return {

    };
}

export default GameList;
