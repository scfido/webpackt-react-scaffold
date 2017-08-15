import React from 'react';
import ReactDOM from 'react-dom'
import { AppContainer } from "react-hot-loader"
import Button from "./components/button"

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Button />
        </AppContainer>,

        document.getElementById('root'));

}

render();

if (module.hot) {
    module.hot.accept();//"./components/button", function () {
        //render();
    //})
}


