import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle} = useAuth();
    return (
        <div>
            <h2 className="mt-5">Please Login</h2>
            <Button onClick = {signInWithGoogle} variant="warning"> Google SignIn </Button>
        </div>
    );
};

export default Login;