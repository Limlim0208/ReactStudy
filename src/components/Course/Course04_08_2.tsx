export default function Course04_08_2({
    name,
    age,
    gender,
}: {
    name: string;
    age: number;
    gender: string;
}) {
    return (
        <>
            <h2>스프레드 연산자 활용하기</h2>
            <p>name: {name}</p>
            <p>age: {age}</p>
            <p>gender: {gender}</p>
        </>
    );
}
