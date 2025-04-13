import React, {useCallback, useEffect, useState} from "react";

interface QuoteProps {
    quote: string;
    author: string;
}

const QuoteDisplay = () => {
    const [quote,setQuote] = useState <QuoteProps | null>(null);
    const [loading,setLoading] = useState <boolean>(true);
    const [error,setError] = useState<string | null>(null);

    const fetchQuote = useCallback(() => {
        setLoading(true);
        fetch('https://qapi.vercel.app/api/random')
            .then(res => {
                if(!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json() as Promise<QuoteProps>;
            })
            .then(data => {
                console.log(data)
                setQuote(data)
                setLoading(false);
            })
            .catch(error => {
                console.error('Ошибка при получении цитаты:', error)
                setError('Не удалось получить цитату.')
                setLoading(false)
            });
    },[])


    useEffect(() => {
        fetchQuote();
    }, [fetchQuote]);

    if (loading) {
        return <div className="text-center py-4">Загрузка цитаты...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center py-4">{error}</div>;
    }

    return(
        <>
            <h2 className="text-xl font-semibold mb-4">Случайная цитата:</h2>
            {quote && (
                <div>
                    <blockquote className="text-lg italic mb-2">
                        "{quote.quote}"
                    </blockquote>
                    <p className="text-md font-medium">- {quote.author}</p>
                </div>
            )}
            <button
                className="bg-[#FF7600] border border-[#FF7600] text-white font-bold py-2 px-4 rounded mt-4 transition duration-300 ease-linear hover:bg-[#31302F] hover:text-[#FF7600] cursor-pointer"
                onClick={fetchQuote}
                disabled={loading}
            >
                Новая цитата
            </button>

        </>
    )
}

export default QuoteDisplay;