// import React from "react";
// import type { NextPage } from "next";
// import Head from "next/head";
// // import { signIn, signOut, useSession } from "next-auth/client";
// import { signIn, signOut, useSession } from "next-auth/react"
// import { Flex, Button, Heading, VStack } from "@chakra-ui/react";

// const Home: NextPage = () => {
//   const [session, loading] = useSession();

//   if (typeof window !== "undefined" && loading) return null;
  
//   return (
//     <div>
//       <Head>
//         <title>Kakao Naver Login NextAuthJS Prisma App</title>
//         <meta name="description" content="Kakao Naver NextAuth Prisma App" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Flex justify="center">
//         <VStack mb={6}>
//           <Heading mb={6}>Kakao Naver Login NextAuthJS Prisma App</Heading>

//           {!session && (
//             <Button colorScheme="facebook" onClick={signIn}>
//               sign in
//             </Button>
//           )}

//           {session && (
//             <Button colorScheme="twitter" onClick={signOut}>
//               sign out
//             </Button>
//           )}
//         </VStack>
//       </Flex>
//     </div>
//   );
// };

// export default Home;


import * as React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import Router from 'next/router';

const Index: NextPage = () => {
    
    const kakaoLogin = async () => {
        const kakao = (window as any).Kakao;

        // 카카오 로그인 구현
        kakao.Auth.login({
            success: () => {
                kakao.API.request({
                    url: '/v2/user/me', // 사용자 정보 가져오기
                    success: (res: any) => {
                        // 로그인 성공할 경우 정보 확인 후 /kakao 페이지로 push
                        console.log(res);
                        Router.push('/kakao');
                    },
                    fail: (error: any) => {
                        console.log(error);
                    }
                })
            },
            fail: (error: any) => {
                console.log(error);
            }
        })
    }

    return (
        <Wrapper>
            <Header.Container>
                <Header.Title>로그인할 방법을 선택해주세요.</Header.Title>
            </Header.Container>

            <Button.Container>
                <Button.ButtonList>
                    <Button.KakaoButton onClick={kakaoLogin}>
                        <Button.ButtonText>Kakao</Button.ButtonText>
                    </Button.KakaoButton>
                </Button.ButtonList>
            </Button.Container>
        </Wrapper>
    )
}

export default Index;

const Wrapper = styled.div`
    max-width: 720px;

    margin: 0 auto;
`

const Header = {
    Container: styled.div`
        text-align: center;
    `,

    Title: styled.h2``,
}

const Button = {
    Container: styled.div``,

    ButtonList: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `,

    KakaoButton: styled.button`
        background-color: #fef01b;

        width: 360px;
        height: 40px;

        margin: 6px 0;

        border: none;
        border-radius: 6px;

        cursor: pointer;
    `,

    ButtonText: styled.h4`
        margin: 0;
        padding: 0;
        
        font-size: 18px;
        color: #ffffff;
    `,
}