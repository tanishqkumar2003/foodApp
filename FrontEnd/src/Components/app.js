import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import About from "./About.";
import Contact from "./Contact";
import Error from "./Error";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";
import { Provider } from "react-redux";
import AppStore from "../Redux/AppStore";
import Cart from "./Cart";


const Grocery = lazy(() => import("./Grocery"));

const AppLayout = () =>{
    return(
        <Provider store={AppStore}>
            <div className="app">
                <Header />
                <Outlet/>
            </div>
       </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {path:"/",
              element:<Body/>
        },
            {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/restaurants/:resId",
            element:<RestaurantMenu/>
        },
        {
            path:"/cart",
            element:<Cart/>
        },
        {
            path:"grocery",
            element:<Suspense fallback={<h1>Loading Grocery Page.....</h1>}>
                         <Grocery/>
                    </Suspense>
        }
    ],
        errorElement:<Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);





























// // const heading = React.createElement("div", {id:"parent"},
// // [       React.createElement("div", {id:"child"}, [
// //     React.createElement("h1", {}, "This is h1"),
// //     React.createElement("h2", {}, "This is h2")
// // ]),

// // React.createElement("div", {id:"child2"}, [
// //     React.createElement("h3", {}, "This is h3"),
// //     React.createElement("h4", {}, "This is h4")
// // ]),
// // ]);

// const Title =()=> (
//     <h1 className="heading">
//         Namaste React using jsx</h1>
// )

// const HeadingComponent = ()=>{
//     return(
//         <div id="container">
//         <Title />
//         <h1 className="heading">
//             React Functional Component</h1>
//     </div>
//     );
// }

//     const root = ReactDOM.createRoot(document.getElementById("abc")); 
//        root.render(<HeadingComponent />);
//       // root.render(<Title />);

//        console.log(HeadingComponent);