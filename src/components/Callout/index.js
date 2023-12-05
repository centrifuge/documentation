import React from "react";

export const Callout = ({ children, type = 'warning', emoji = '💡' }) => {

    return <div className={`callout ${type}`}>
        <div style={{ padding: "32px" }}>{emoji}</div>
        <div>{children}</div>
    </div>
};

export default Callout;