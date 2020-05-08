import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from "styled-components";


type Props = {
    title?: string
}

const A = styled.a`
  color: black;
  cursor: pointer;
`

const Nav = styled.div`
  display: flax;
  justify-content: center;
`
const Span = styled.span`
    margin: 0 50px;
`

const Layout: React.FunctionComponent<Props> = ({
                                                    children,
                                                    title = 'This is the default title',
                                                }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <header>
            <Nav>
                <Link href="/">
                    <A>Latest Posts</A>
                </Link>
                <Span>|</Span>
                <Link href="/posts/new">
                    <A>Create Post</A>
                </Link>
            </Nav>
        </header>
        {children}
    </div>
)

export default Layout
