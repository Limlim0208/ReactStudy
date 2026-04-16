export default function Course04_03(props: { name: string; age: number }) {
    console.log(props);
    return (
        <>
            <div>
                <h2>컴포넌트에 데이터 전달하기</h2>
                <p>name: {props.name}</p>
                <p>age: {props.age}</p>
            </div>
        </>
    );
}
