import React from "react";
import { Layout, Menu } from 'antd';
import styles from "./index.module.scss";
const { Header, Content, Footer } = Layout;
export default class BasicLayout extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <h1 style={{color:"white"}}>
                        TD's blog
                    </h1> 
                </Header>
                <Content>
                  {this.props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Copyright&copy;{new Date().getFullYear()}.TD</Footer>
            </Layout>
        )
    }

}
BasicLayout.defaultProps={
    navKey:3
}