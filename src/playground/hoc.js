console.log('hoc is running')

// higher order component HOC

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share !</p>}
            <WrappedComponent {...props} />
        </div>

    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                    <p>Please log in to see this component !</p>
                )
            }
        </div>

    );
};

// requireAuth



const AuthInfo = requireAuthentication(Info)
ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are some details" />, document.getElementById('app'))

// const AdminInfo = withAdminWarning(Info)
// ReactDOM.render(<AdminInfo isAdmin={true} info="There are some details"/>, document.getElementById('app'))