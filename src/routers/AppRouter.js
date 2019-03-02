import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'
import HelpPage from '../components/HelpPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={ExpenseDashboardPage}></Route>
                <Route path="/create" component={AddExpensePage}></Route>
                <Route path="/edit/:id" component={EditExpensePage}></Route>
                <Route path="/help" component={HelpPage}></Route>
                <Route component={NotFoundPage} />
            </Switch>

        </div>

    </BrowserRouter>
);

export default AppRouter;