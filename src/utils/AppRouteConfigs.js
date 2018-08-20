import Home from "../containers/Home";
import Variables from "../styles/variables";
import Login from "../containers/Login";

const Router = {
    routes: {
        Login: {screen: Login},
        Home: {screen: Home},
    },
    configs: {
        headerMode: 'none',
        cardStyle: {backgroundColor: Variables.colors.global.white},
        navigationOptions: {
            headerVisible: false,
        }
    }
}

export default Router
