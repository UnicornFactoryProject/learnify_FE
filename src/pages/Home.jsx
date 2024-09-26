import React, { useEffect, useState } from "react";
import SkeletonLoader from "../components/SkeletonLoader";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
    }, []);

    if (isLoading) {
        return (
            <div>
                <SkeletonLoader width="20%" height="50px" className="mb-2" />
                <SkeletonLoader width="100px" height="100px" className="mb-2" borderRadius="50%" />
                <SkeletonLoader width="100%" height="5px" />
            </div>
        )
    }

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

export default Home;