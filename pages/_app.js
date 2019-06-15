import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../components/Layout'


class MyApp extends App {
  state = {
    name: "Lindsay"
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <Component {...pageProps} name={this.state.name}/>
        </Layout>
      </Container>
    );
  }
}

// another way to do promise chain
MyApp.getInitialProps = async ({ Component, ctx }) => {
    //ctx stands for context
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

export default MyApp;
