import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";






const AppLayout = () =>{
    return(
        <div className="app">
            <Header />
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);





























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