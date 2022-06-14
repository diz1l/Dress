import axios from 'axios';

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

// возвращает анонимную функцию
export const fetchDresss = (sortBy, category) => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    });

    axios
        .get(
            `https://62a87c39ec36bf40bda6fcda.mockapi.io/items?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order
            }`,
        )
        .then(({ data }) => {
            dispatch(setDress(data));
        });
};

// возвращает обьект
export const setDress = (items) => ({
    type: 'SET_DRESS',
    payload: items,
});
