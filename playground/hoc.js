/**
 * Higher Order Component (HOC)
 * Its just regular React component that renders another component
 */

import React from "react";
import ReactDOM from "react-dom";

const Info = () => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const adminWarning = WrappedComponent => props => (
    <div>
        {props.isAdmin && <p>This is private info. Please don&quot;t share!</p>}
        <WrappedComponent {...props} />
    </div>
);

/* Function that returns HOC */
const requireAuthentication = WrappedComponent => props => (
    <div>
        {props.authenticated ? (
            <div>
                <WrappedComponent {...props} />
                <p>These details are classified, do not share.</p>
            </div>
        ) : (
            <p>Please login to view details</p>
        )}
    </div>
);

const AdminInfo = adminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
    <AuthInfo authenticated={false} info="these details?!!" />,
    document.getElementById("root"),
);
// ReactDOM.render(
//     <AdminInfo isAdmin={false} info="these details?!!" />,
//     document.getElementById("root"),
// );
