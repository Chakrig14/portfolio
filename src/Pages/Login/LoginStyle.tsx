import styled from "@emotion/styled";

export const LoginContainer = styled.div`
  display: flex;
`;

export const LoginImage = styled.div`
  flex: 1;
  background-image: url("https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 45vw;
`;

export const LoginForm = styled.div`
  width: 55vw;
  >div{
  display: flex;
flex-direction: column;
margin: 20px;
padding: 20px;
gap: 10px;
box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);}
`;