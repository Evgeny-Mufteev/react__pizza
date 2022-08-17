import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import "./scss/app.scss";
import MainLayout from "./layouts/MainLayout";

const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza"*/ "./pages/FullPizza"));
const Cart = React.lazy(() => import(/* webpackChunkName: "Cart"*/ "./pages/Cart"));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound"*/ "./pages/NotFound"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <React.Suspense fallback={<div>Загрузка корзины...</div>}>
              <Cart />
            </React.Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <React.Suspense fallback={<div>Загрузка пиццы...</div>}>
              <FullPizza />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<div>Загрузка 404...</div>}>
              <NotFound />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
