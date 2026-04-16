import Inline from "./components/Inline";

export default function App() {
    const IsLoggedin = true;
    const h1Style = { color: IsLoggedin ? "red" : "blue", fontSize: "25px" };
    return <Inline h1Style={h1Style} />;
}
