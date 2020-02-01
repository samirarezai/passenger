import React from 'react';
import Logo from "../publicComponents/logo";

const HeadLogin = (props) => {
    return (
        <>
            <div className="bg-white w-100">
                <div className="boxHead bgGreen border-radius-bottom-left">
                    <div className={`boxHeadInside container  text-center ${props.className}`}>{
                        props.children
                    }
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeadLogin;
