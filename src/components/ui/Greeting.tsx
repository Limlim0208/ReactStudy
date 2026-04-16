export default function Greeting({ isLoggedIn }: { isLoggedIn: boolean }) {
    if (isLoggedIn)
        return (
            <>
                <h1>Greeting Component</h1>
            </>
        );
}
