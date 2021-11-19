    import React from 'react'
import { Container, FormButton, FormContent, FormInput, FormLabel, FormWrap, Icon, Text, Form, FormH1} from './SignInElements';
    
    const SignIn = () => {
        return (
            <>
            <Container>
                <FormWrap>
                    <Icon to = "/">Dolla</Icon>
                    <FormContent>
                        <Form action = '#'>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor = 'for'>Email</FormLabel>
                            <FormInput type = 'password' required/>
                            <FormLabel htmlFor = 'for'>Password</FormLabel>
                            <FormInput type = 'password' required/>
                            <FormButton type = 'submit'>Continue</FormButton>
                            <Text>Forgot the password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
            </>
        )
    }
    
    export default SignIn;
    