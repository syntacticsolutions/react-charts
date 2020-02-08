import React from 'react';
import logo from './logo.svg';
import { Router } from '@reach/router'
import Home from './pages/Home'
import ResponsiveNavigation from './components/ResponsiveNavigation'
import Dashboard from './pages/Dashboard'
import DashboardSelector from './pages/DashboardSelector'
import './assets/scss/base.scss'
import './App.css';
import axios from 'axios'
if (process.env.NODE_ENV === 'development') {
  require('./assets/mock-endpoints/mocks')
}

function App() {
  const navLinks = [
    {
      text: 'Home',
      path: '/',
      icon: 'ion-ios-home'
    },
    {
      text: 'Analytics',
      path: '/analytics',
      icon: 'ion-ios-analytics'
    }
  ]
  return (
    <div className="App">
      <ResponsiveNavigation
        navLinks={ navLinks }
        logo={ logo }
        background="#fff"
        hoverBackground="#ddd"
        linkColor="#777"
      >
      </ResponsiveNavigation>
			<Router>
				<Home path="/" />
				<Dashboard axios={axios} path="/analytics/:dashboardName" />
        <DashboardSelector axios={axios} path="/analytics" />
			</Router>
    </div>
  );
}

export default App;
