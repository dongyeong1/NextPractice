"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function MovieDetail({ params }) {
    console.log(params.movie);
    const [data, setData] = useState();

    useEffect(() => {
        async function fetchData() {
            const api = "73a100851f1794819aee9eecdc47162a";
            const data = await fetch(
                `https://api.themoviedb.org/3/movie/${params.movie}?api_key=${api}`
            );
            // const data = await fetch(
            //     `https://api.themoviedb.org/3/movie/popular?api_key=${api}`
            // );

            const res = await data.json();
            console.log("assssdasdasdasdasdasdasdsasdas", res);
            setData(res);
        }
        fetchData();
    }, []);

    // console.log(data);
    const imagePath = "https://image.tmdb.org/t/p/original";

    return (
        <div>
            <h1>{data && data.title}</h1>
            <h2>{data && data.release_date}</h2>
            <h2>{data && data.runtime}minutes</h2>
            <h2>{data && data.status}</h2>
            {data && (
                <Image
                    src={imagePath + data.poster_path}
                    width={300}
                    height={300}
                ></Image>
            )}
        </div>
    );
}
