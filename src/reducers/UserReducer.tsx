

export const initialState = {
    avatar: '',
    favorites: [],
    appointments: []
}

export const UseReducer = ({ state, action }: any) => {
    switch (action.tipe) {
        case 'setAvatar':
            return { ...state, avatar: action.payload.avatar }
            break;
        default: return state;
    }
}