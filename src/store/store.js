import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import userReducer from './reducers/userReducer';

const persistConfig = {
    key: 'root',
    storage
};

const reducers = persistReducer(persistConfig, userReducer);
const store = createStore(reducers);
const persistor = persistStore(store)

const configureStore = () => {
    return { persistor, store };
}

export default configureStore;
