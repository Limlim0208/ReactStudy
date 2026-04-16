type PrintValueProps = {
    numberValue: number;
    stringValue: string;
    booleanValue: boolean;
    arrayValue: number[];
    objectValue: { name: string; age: number };
    handleClick: () => void;
};

export default function Course04_04(props: PrintValueProps) {
    return (
        <>
            <h2>컴포넌트에 데이터 전달하기2</h2>
            <p>number: {props.numberValue}</p>
            <p>string: {props.stringValue}</p>
            <p>boolean: {props.booleanValue.toString()}</p>
            <p>array: {props.arrayValue}</p>
            <p>object: {JSON.stringify(props.objectValue)}</p>
            <p>function: {props.handleClick.toString()}</p>
        </>
    );
}
