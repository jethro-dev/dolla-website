import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./Signin.styled";

const Signin = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">dolla</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              autoComplete="off"
              id="email"
              type="email"
              required
            ></FormInput>
            <FormLabel htmlFor="pw">Password</FormLabel>
            <FormInput id="pw" type="password" required></FormInput>
            <FormButton type="submit">Continue</FormButton>
            <Text></Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Signin;
