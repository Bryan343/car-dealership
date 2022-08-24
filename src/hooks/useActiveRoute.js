import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const useActiveRoute = (path) => {
    const [isActive, setActive] = useState();
    const location = useLocation();

    useEffect(() => {
        setActive(location.pathname.includes(path));
    }, [location, path]);

    return isActive;
};

export default useActiveRoute