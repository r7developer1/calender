import React from "react";
import BrowserV from "./View/BrowserV";
import MobileV from "./View/MobileV";
import {
    isBrowser,
    isMobile,
    isTablet
} from "react-device-detect";

const Times = ({ props }) => {
    const { pick_s , drop_s } = props;
        return (
            <>
                {

                    isBrowser && !isTablet &&
                    <BrowserV
                        pick={pick_s}
                        drop={drop_s}
                    />

                }

                {
                    (isTablet || isMobile) &&
                    <MobileV
                        pick={pick_s}
                        drop={drop_s}
                    />
                }
            </>
        );
};

export default Times;
