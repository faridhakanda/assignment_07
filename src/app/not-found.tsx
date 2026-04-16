import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <h2>404 Not Found!</h2>
            <Link href="/">Go to Home</Link>
        </div>
    );
};

export default NotFoundPage;