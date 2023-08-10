// import Image from "next/image";
"use client";
import Movie from "./movie";
import { useEffect, useState } from "react";
import "./globals.css";
// import { useEffect } from "react";

export default function Home() {
    const [data, setData] = useState();

    useEffect(() => {
        async function fetchData() {
            const api = "73a100851f1794819aee9eecdc47162a";
            const data = await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${api}`
            );

            const res = await data.json();
            setData(res);
        }
        fetchData();
    }, []);

    return (
        <main>
            <div className="text-3xl font-bold underline">HOMEss</div>
            <div className="griddiv">
                {data &&
                    data.results.map((movie, i) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            poster_path={movie.poster_path}
                            release_date={movie.release_date}
                        ></Movie>
                    ))}
            </div>
        </main>
    );
}
