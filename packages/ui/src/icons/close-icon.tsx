import * as React from "react";

export function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            data-slot="icon"
            viewBox="0 0 20 20"
            aria-hidden="true"
            style={{ width: "1.25rem", height: "1.25rem", fill: "currentColor" }}
            {...props}
        >
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
        </svg>
    );
}
