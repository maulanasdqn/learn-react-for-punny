import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../views/Home"));

const RouterPath = () => {
  return (
    <Routes>
      <Suspense>
        <Route path="/" element={<Home />} />
      </Suspense>
    </Routes>
  );
};

export default RouterPath;
