import agent from '../agent';
import Header from './Header/Header';
import React from 'react';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT, IS_AUTH } from '../constants/actionTypes';
import { Route, Switch } from 'react-router-dom';

import Login from '../components/Login';
import Register from '../components/Register';
import { store } from '../store';
import { push } from 'react-router-redux';

import MyCalendar from '../containers/MySchedule';
import DoctorCalendar from '../containers/DoctorSchedule';
import DoctorList from "../containers/DoctorsList";

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    appName: 'Med App',
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
      const payload = agent.Auth.me();

      dispatch({type: IS_AUTH, payload});
  },
  toLogin: () => {
      dispatch(push('/login'));
  }
});

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }

  componentDidMount() {
    window.agent = agent;
    if (!this.props.isAuth) {
      this.props.onLoad();
    }
  }

  render() {
    if (true) {
      return (
        <div>
          <Header
            appName={this.props.appName}
            currentUser={this.props.currentUser} />
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/my/schedule" component={MyCalendar} />
              <Route path="/doctors" component={DoctorList} />
              <Route path="/doctors/:doctorid/schedule" component={DoctorCalendar} />
              <Route path="/consultance/:consultanceId" />
            </Switch>
        </div>
      );
    }

    return (
      <div>
        <DoctorCalendar />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
