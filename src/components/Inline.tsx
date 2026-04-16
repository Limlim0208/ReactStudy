export default function Inline({
    h1Style,
}: {
    h1Style: { color: string; fontSize: string };
}) {
    return (
        <>
            <h1 style={h1Style}>Inline Style</h1>
        </>
    );
}
