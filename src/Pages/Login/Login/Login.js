import React from 'react';
import { Button } from 'react-bootstrap';

const Login = () => {
    return (
        <div>
            <h2 className="mt-5">Please Login</h2>
            <Button variant="warning">Google SignIn</Button>{' '}
        </div>
    );
};

export default Login;