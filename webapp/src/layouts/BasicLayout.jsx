import React from "react";
import { Layout } from 'antd';
import styles from "./index.module.scss";
import Webgl_BasicLayout from "../webgl_page/basicLayout";
import {NavLink} from "react-router-dom";


const { Header, Content, Footer } = Layout;
export default class BasicLayout extends React.Component {
    constructor(props) {
        super(props);
        this.logoRef = React.createRef();
    }
    componentDidMount() {
        (new Webgl_BasicLayout()).drawLogo(this.logoRef);
    }
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <NavLink exact to="/">
                        <span ref={this.logoRef} className={styles.logo}></span>
                    </NavLink> 
                </Header>
                <Content>
                    {this.props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Copyright&copy;{new Date().getFullYear()}.TD</Footer>
            </Layout>
        )
    }

}
BasicLayout.defaultProps = {
    navKey: 3
}