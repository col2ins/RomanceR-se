
import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header/Header';

import Footer from './Footer';
import Partners from '../../components/Partners/Partners';
import Contact from '../../components/Contact/Contact';
import HomePage from './HomePage';

import HeaderTopContent from './HomePage/TopContent';

import AboutUs from './AboutUs';
import HeaderTopContentAboutUs from './AboutUs/TopContent';

import Miai from './Miai';
import HeaderTopContentMiai from './Miai/TopContent';

import EngagementParty from './EngagementParty';
import HeaderTopContentEngagementParty from './EngagementParty/TopContent';

import WeddingParty from './WeddingParty';
import HeaderTopContentWeddingParty from './WeddingParty/TopContent';

import Products from './Products';
import HeaderTopContentProducts from './Products/TopContent';

import Showcases from './Showcases';
import HeaderTopContentShowcases from './Showcases/TopContent';

import Support from './Support';
import HeaderTopContentSupport from './Support/TopContent';

import Map from './Map';
import HeaderTopContentMap from './Map/TopContent';

import BlogDemo from './BlogDemo';
import HeaderTopContentBlogDemo from './BlogDemo/TopContent';

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
// import "react-alice-carousel/lib/alice-carousel.css";
import "./css/MyStyle.css";
import "./css/MyLayout.css";
import "./css/icons/webfont.css";
import "./css/icons/fontawesome-free-5.8.1-web/css/fontawesome.min.css";
import "./css/icons/fontawesome-free-5.8.1-web/css/all.min.css";
// import "animate.css/animate.min.css";

function RenderContent(route) {
    return (
        <Route
            key={route.path}
            exact
            path={route.path}
            render={props => (
                <div key={route.path}>
                    <Header content={route.topcontent} />
                    <route.component {...props} routes={route.routes} />
                    <Partners />
                    <Contact />
                    <Footer />
                </div>
            )}
        />
    );
}

const RouteList = [
    {
        path: "/",
        component: HomePage,
        topcontent: <HeaderTopContent />,
        routes: [],
        exact: true
    },
    {
        path: "/AboutUs",
        component: AboutUs,
        topcontent: <HeaderTopContentAboutUs />,
        routes: [],
        exact: true
    },
    {
        path: "/Miai",
        component: Miai,
        topcontent: <HeaderTopContentMiai />,
        routes: [],
        exact: true
    },
    {
        path: "/EngagementParty",
        component: EngagementParty,
        topcontent: <HeaderTopContentEngagementParty />,
        routes: [],
        exact: true
    },
    {
        path: "/WeddingParty",
        component: WeddingParty,
        topcontent: <HeaderTopContentWeddingParty />,
        routes: [],
        exact: true
    },
    {
        path: "/Products",
        component: Products,
        topcontent: <HeaderTopContentProducts />,
        routes: [],
        exact: true
    },
    {
        path: "/Showcases",
        component: Showcases,
        topcontent: <HeaderTopContentShowcases />,
        routes: [],
        exact: true
    },
    {
        path: "/Support",
        component: Support,
        topcontent: <HeaderTopContentSupport />,
        routes: [],
        exact: true
    },
    {
        path: "/Contact",
        component: Map,
        topcontent: <HeaderTopContentMap />,
        routes: [],
        exact: true
    },
    {
        path: "/BlogDemo",
        component: BlogDemo,
        topcontent: <HeaderTopContentBlogDemo />,
        routes: [],
        exact: true
    },
];

const Router = RouteList.map((route, i) => RenderContent(route));

export {
    Router
}