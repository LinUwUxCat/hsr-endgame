import type { ReactElement, ReactNode } from "react";

interface PaginationProps {
    currentPage: number;
    changePage: (newPage: number) => void;
    children?: ReactNode;
    maxPages: number;
}

export default function Pagination({currentPage, changePage, children, maxPages} : PaginationProps) : ReactElement {
    return (
        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <div onClick={() => changePage(currentPage == 0 ? maxPages - 1 : currentPage - 1)} style={{cursor: "pointer"}}>
                <img src="/home/arrow.png" width={48} height={48} />
            </div>
            <div>{children}</div>
            <div onClick={() => changePage((currentPage + 1) % maxPages)} style={{cursor: "pointer"}}>
                <img src="/home/arrow.png" width={48} height={48} style={{transform: "rotate(180deg)"}}/>
            </div>
        </div>
    )
}