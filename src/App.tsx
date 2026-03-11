/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SystemOption } from './types';
import Login from './components/Login';
import Layout from './components/Layout';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [system, setSystem] = useState<SystemOption>('落日商街');

  const handleLogin = (selectedSystem: SystemOption) => {
    setSystem(selectedSystem);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <Layout system={system} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}
