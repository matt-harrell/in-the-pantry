import { signInWithGoogle } from '@/firebase/auth';
import { Button } from '@mui/material'
import React from 'react'

const SignInContainer = () => {

  const handleSignIn = () => {
    signInWithGoogle();
  }

  return (
    <Button onClick={handleSignIn}>Sign In</Button>
  )
}

export default SignInContainer