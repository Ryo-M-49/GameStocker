import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './GameList.module.css';
import Aux from '../../hoc/Aux/Aux';
import Game from '../../components/Game/Game';
import GamelistPagenation from '../../components/UI/Pagination/Pagination';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as actions from '../../store/actions/index';

class GameList extends Component {
    componentDidMount() {
        const currentPage = this.props.games ? this.props.games.page : 1;
        if (!this.props.search.isSearched) {
            this.props.onUpdateGamesByPage(currentPage);
        }
    }

    componentWillUnmount() {
        this.props.onSetSearch(false, null);
    }

    pageChangedHandler(selectedPage) {
        this.props.onChangeCurrentPage(selectedPage);
        if (this.props.search.isSearched) {
            this.props.onUpdateGamesByTitle(
                this.props.search.keyword,
                selectedPage
            );
        } else {
            this.props.onUpdateGamesByPage(selectedPage);
        }
    }

    goBackClickedHandler() {
        const currentPage = this.props.games ? this.props.games.page : 1;
        this.props.onUpdateGamesByPage(currentPage);
        this.props.onSetSearch(false, null);
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
                <GamelistPagenation
                    pageCount={this.props.games.pageCount}
                    pageNumber={this.props.games.page}
                    pageChangedHandler={(event, page) =>
                        this.pageChangedHandler(page)
                    }
                />
            );
        }

        let component = (
            <Aux>
                <ul className={classes.GameListUl}>
                    {gamesArray.map((gameObject, index) => (
                        <Game key={index} game={gameObject.game} />
                    ))}
                </ul>
                <div className={classes.Pagination}>{pagination}</div>
            </Aux>
        );

        if (this.props.search.isSearched) {
            component = (
                <Aux>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<ArrowBackIcon />}
                        onClick={() => this.goBackClickedHandler()}
                    >
                        Back
                    </Button>
                    <ul className={classes.GameListUl}>
                        {gamesArray.map((gameObject, index) => (
                            <Game key={index} game={gameObject.game} />
                        ))}
                    </ul>
                    <div className={classes.Pagination}>{pagination}</div>
                </Aux>
            );
        }

        if (this.props.games && this.props.games.count === 0) {
            component = (
                <div className={classes.Error}>
                    <SentimentVeryDissatisfiedIcon />
                    <p>No game is found</p>
                </div>
            );
        }

        if (this.props.isLoading) {
            component = (
                <div className={classes.Progress}>
                    <CircularProgress size="5rem" />
                </div>
            );
        }

        return <div className={classes.GameList}>{component}</div>;
    }
}

const mapStatetoProps = state => {
    return {
        games: state.gameListReducer.games,
        error: state.gameListReducer.error,
        search: state.gameListReducer.search,
        isLoading: state.gameListReducer.isLoading,
        isAuthenticated: state.authReducer.token !== null,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetSearch: (isSearched, keyword) =>
            dispatch(actions.setSearch(isSearched, keyword)),
        onUpdateGamesByPage: currentPage =>
            dispatch(actions.updateGamesByPage(currentPage)),
        onUpdateGamesByTitle: (keyword, currentPage) =>
            dispatch(actions.updateGamesByTitle(keyword, currentPage)),
        onChangeCurrentPage: selectedPage =>
            dispatch(actions.setCurrentPage(selectedPage)),
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(GameList);
