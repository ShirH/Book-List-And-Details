//state argument is not application state,
//only this reducer is responsible for

//es6:
// state = null mean:
// if state is undefined state will be null
export default function (state=null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state
}