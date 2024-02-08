import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import MainMenu from "components/MainMenu/MainMenu";

import Loader from "components/Loader/Loader";

const SharedLayout = () => {
    return (
    <>
        <MainMenu />
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
    </>
)}

export default SharedLayout;