import { useState } from "react";

export default function App() {
    // 초기 버튼 데이터: 각 버튼은 id, label, icon, isDisabled 속성을 가집니다.
    const initialButtons = [
        { id: 1, label: "Button 1", icon: "🔥", isDisabled: false },
        { id: 2, label: "Button 2", icon: "💧", isDisabled: false },
        { id: 3, label: "Button 3", icon: "🌱", isDisabled: true },
        { id: 4, label: "Button 4", icon: "⚡", isDisabled: false },
    ];

    const [buttons, setButtons] = useState(initialButtons);

    const toggleHandle = (currentButtonId: number) => {
        setButtonState(
            buttons.filter((button) => button.id !== currentButtonId),
        );
    };

    return (
        <>
            <ButtonGroup buttons={buttons}></ButtonGroup>
        </>
    );
}

export function ButtonGroup({
    buttons,
}: { id: number; label: string; icon: string; isDisabled: boolean }[]) {
    return (
        <>
            <h2>Active Count: {}</h2>
            {buttons.map((button) => (
                <button key={button.id} disabled={button.isDisabled}>
                    {button.icon}
                    {button.label}
                </button>
            ))}
        </>
    );
}
