export default function Table() {
    return (
        <table border={1} onClick={() => console.log("tbody")}>
            <tbody onClick={() => console.log("tbody")}>
                <tr onClick={() => console.log("tr")}>
                    <td
                        onClick={(event) => {
                            event.stopPropagation();
                            console.log("td");
                        }}
                    >
                        Bubble
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
