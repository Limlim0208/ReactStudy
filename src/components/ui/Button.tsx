import { Children } from "react";

export default function Button({
    children,
    message,
    handle,
}: {
    children: React.ReactNode;
    message: string;
    handle: (message: string) => void;
}) {
    return (
        <>
            <button onClick={() => handle(message)}>{children}</button>
        </>
    );
}
