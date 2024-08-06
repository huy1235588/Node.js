import React, { useEffect, useState } from 'react';

import './App.css';
import ErrorPage from './component/ErrorPage';
import LoaderPage from './component/LoaderPage';

function App() {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    useEffect(() => {
        const fetchData = async () => {
            try {
                await sleep(2000); // Chờ 1 giây trước khi gửi yêu cầu
                // Gọi API backend
                const response = await fetch('http://192.168.1.13:3001/api/data'); // URL

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                setData(response.data.title);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    if (loading) {
        return (
            <main className="container">
                <LoaderPage />
            </main>
        )
    }

    if (error) {
        return (
            <main className="container">
                <ErrorPage
                    errorMessage={error.message}
                />
            </main>
        )
    }

    return (
        <div className="App">
            <header className="App-header">
                <p
                    dangerouslySetInnerHTML={{
                        __html: data
                    }}
                />

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
