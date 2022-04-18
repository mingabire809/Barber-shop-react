import React from "react";

import { Wrapper, Content, Notification, Number } from "./AdminHeader.styles";

const AdminHeader = () =>(
    <Wrapper>
        <Content>
           
        <div>Admin Profile name</div>
        <input type='text' placeholder="booking reference number"></input>
        <Notification><Number>2</Number></Notification>


        </Content>
    </Wrapper>
);

export default AdminHeader;