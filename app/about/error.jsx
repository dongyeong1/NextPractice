"use client";

export default function Error({ error, reset }) {
    return (
        <div>
            load up {error.message}
            <button onClick={() => reset()}></button>
        </div>
    );
}
