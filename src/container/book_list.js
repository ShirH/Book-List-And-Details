import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux'

class BookList extends Component {

    renderList() {
        var that=this;
        return this.props.books.map(function (book) {
            return (
                <li
                    key={book.title}
                    lassName="list-group-item"
                    onClick={() => that.props.selectBook(book)}>
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-Group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }

}

function mapStateToProps(state) {
    //whatever is returned will show up as props
    //inside of BookList
    return {books: state.books};
}

//anything returned from this function will be and up as props
//on the BookList container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result should be pass
    //to all our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

//promote BookList from a component to a container - it needs to know
//about this new dispatch method, selectBook. make it available
// as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);