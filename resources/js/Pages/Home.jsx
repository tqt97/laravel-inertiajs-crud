import { useState, useRef, useEffect } from "react";
import styles from "../styles/Home.module.scss";

export default function Home() {
    const data = [
        {
            id: 1,
            name: "John Doe",
            email: "hellow rodl dá dá da dadasdad đâsd",
        },
        { id: 2, name: "Jane Doe", email: "MhM3S@example.com adsas" },
        { id: 3, name: "Bob Doe", email: "MhM3S@example.com adasdasdas" },
        {
            id: 4,
            name: "Alice Doe",
            email: "MhM3S@example.com adadasdasdasdas",
        },
        { id: 5, name: "Charlie Doe", email: "MhM3S@example.com" },
        { id: 6, name: "David Doe", email: "MhM3S@example.com" },
        { id: 7, name: "Emily Doe", email: "MhM3S@example.com" },
        { id: 8, name: "Frank Doe", email: "MhM3S@example.com" },
        { id: 9, name: "Grace Doe", email: "MhM3S@example.com" },
        { id: 10, name: "Henry Doe", email: "MhM3S@example.com" },
    ];

    const [isExpanded, setIsExpanded] = useState(false);
    const wrapperRef = useRef(null);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    useEffect(() => {
        if (wrapperRef.current) {
            const targetHeight = isExpanded
                ? `${wrapperRef.current.scrollHeight}px`
                : "0px";
            wrapperRef.current.style.height = targetHeight;
        }
    }, [isExpanded]);

    return (
        <div className={styles.container}>
            {/* Luôn hiển thị 2 record đầu tiên */}
            <div className={styles.grid}>
                {data.slice(0, 2).map((user) => (
                    <div key={user.id} className={styles.card}>
                        <img
                            src={`https://via.placeholder.com/150?text=${user.name}`}
                            alt={user.name}
                            className={styles.cardImage}
                        />
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
            {/* Phần còn lại có hiệu ứng */}
            <div ref={wrapperRef} className={styles.wrapper}>
                <div className={styles.grid}>
                    {data.slice(2).map((user) => (
                        <div key={user.id} className={styles.card}>
                            <img
                                src={`https://via.placeholder.com/150?text=${user.name}`}
                                alt={user.name}
                                className={styles.cardImage}
                            />
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button className={styles.button} onClick={toggleExpand}>
                {isExpanded ? "Collapse" : "Expand"}
                <span className={styles.arrow}>{isExpanded ? "↑" : "↓"}</span>
            </button>
        </div>
    );
}
