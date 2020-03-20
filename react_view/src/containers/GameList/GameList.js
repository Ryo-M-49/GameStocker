import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './GameList.module.css';
import Game from '../../components/Game/Game';
import Pagination from '../../components/UI/Pagination/Pagination';
import * as actions from '../../store/actions/index';

class GameList extends Component {

    componentDidMount() {
        this.props.onUpdateGamesByPage(this.props.currentPage);
    }

    /**
     * Handler to change a page of a game list to render.
     * @param {object} selectedPage - holds the number of the clicked page.
     * @returns {null} - changes the state "currentPage" to the clicked page
     */
    pageChangedHandler(selectedPage) {
        this.props.onChangeCurrentPage(selectedPage);
        this.props.onUpdateGamesByPage(selectedPage);
    }

    render() {
        const gamesArray = [];
        let gamesObject = {};
        let pagination = null;

        if (this.props.games) {
            for (let i = 0; i < this.props.games.Items.length; i++) {
                const game = this.props.games.Items[i].Item;
                gamesObject = {
                    game: game,
                };
                gamesArray.push(gamesObject);
            }

            pagination = (
                <Pagination
                    pageCount={this.props.games.pageCount}
                    pageNumber={this.props.currentPage}
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
        games: state.gameListReducer.games,
        allGames: state.gameListReducer.allGames,
        currentPage: state.gameListReducer.currentPage,
        error: state.gameListReducer.error,
        isSearched: state.gameListReducer.isSearched
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateGamesByPage: currentPage =>
            dispatch(actions.updateGamesByPage(currentPage)),
        onChangeCurrentPage: selectedPage =>
            dispatch(actions.setCurrentPage(selectedPage)),
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(GameList);
