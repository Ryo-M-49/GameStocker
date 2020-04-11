import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './GameList.module.css';
import Aux from '../../hoc/Aux/Aux';
import Game from '../../components/Game/Game';
import GamelistPagenation from '../../components/UI/Pagination/Pagination';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import * as actions from '../../store/actions/index';

class GameList extends Component {
    componentDidMount() {
        this.props.onUpdateGamesByPage(
            this.props.games ? this.props.games.page : 1
        );
    }

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

        if (this.props.games && this.props.games.count === 0) {
            component = (
                <div className={classes.Error}>
                    <SentimentVeryDissatisfiedIcon />
                    <p>
                        No game is found
                    </p>
                </div>
            );
        }

        return (
            <div className={classes.GameList}>
                {component}
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        games: state.gameListReducer.games,
        error: state.gameListReducer.error,
        isSearched: state.gameListReducer.isSearched,
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
