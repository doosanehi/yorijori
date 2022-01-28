import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostPage from './pages/PostPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './pages/Home';
function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<PostPage />} path="/post" />
      </Routes>
    </RecoilRoot>
  );
}

export default App;