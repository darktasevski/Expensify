import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './index.css';
import App from './App';
import HelpPage from './components/HelpPage';
import AddExpensePage from './components/AddExpense';
import EditExpensePage from './components/EditExpense';
import NotFoundPage from './components/NotFound';
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker';

const Root = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
