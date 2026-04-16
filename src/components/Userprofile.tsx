export default function Userprofile({
    name,
    age,
    isAdmin,
}: {
    name: string;
    age: number;
    isAdmin: true | false;
}) {
    return (
        <>
            <h1>Userprofile Component</h1>
            <p>이름: {name}</p>
            <p>나이: {age}</p>
            <p>{isAdmin ? "관리자 계정" : "일반 사용자"}</p>
        </>
    );
}
