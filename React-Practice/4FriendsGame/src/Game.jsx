import { useState } from "react";

export default function Game() {
    const [users, setUsers] = useState([]);
    const [createUserBtnEnable, setUserBtnEnable] = useState(false);
    const goForward = (index) => {
        const updatedData = [...users];
        if (updatedData[index].step < 3) {
            updatedData[index].step += 1;
            
        }
        setUsers(updatedData);
        if(updatedData[index].step === 3)
            setUserBtnEnable(false);
        //If all the users are on step 3    
        // updatedData.every(item => item.step === 3)
        //     setUserBtnEnable(false);
        
    };
    const enabledUser = () => { };
    return (
        <div className='container'>
            <div>
                <button
                    onClick={() => {
                        setUsers((prev) => [
                            ...prev,
                            {
                                userName: users - `${prev.length + 1}`,
                                step: 1,
                            },
                        ]);
                        setUserBtnEnable(true);
                    }}
                    disabled={createUserBtnEnable}
                >
                    Create User
                </button>
            </div>
            <div>
                {users.map((userItem, index) => (
                    <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
                        <div>{JSON.stringify(userItem)}</div>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <button disabled>Step 1</button>
                            <button disabled>Step 2</button>
                            <button disabled>Step 3</button>
                        </div>
                        <div>
                            <button
                                className="forward"
                                onClick={() => {
                                    goForward(index);
                                }}
                            >
                                Forward
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}