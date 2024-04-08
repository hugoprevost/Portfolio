import React from "react";
import "../../utils/style/tags.scss";

const Tags = ({ projettag }) => {
    return (
        <div className="tag">
            <p className="tag__title">{projettag}</p>
        </div>
    );
};

export default Tags;