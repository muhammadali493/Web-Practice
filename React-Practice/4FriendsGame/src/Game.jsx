import { useState } from "react";

export default function Game() {
    const [users, setUsers] = useState([]);
    const [createUserBtnEnable, setUserBtnEnable] = useState(false);
    const [stepBtnDisable, setStepBtnDisable] = useState(true);
    const goForward = (index) => {
        const updatedData = [...users];
        if (updatedData[index].step < 3) {
            updatedData[index].step += 1;
            
        }
        setUsers(updatedData);
        // if(updatedData[index].step === 3)
        //     setUserBtnEnable(false);
        //If all the users are on step 3    
        if(updatedData.every(item => item.step === 3)){
            setUserBtnEnable(false);
        }
        
    };
    const enabledUser = () => { };
    return (
        <div className='container'>
            <div>
                <button
                    onClick={() => {
                        if(users.length <= 3){
                            setUsers((prev) => [
                                ...prev,
                                {
                                    userName: `users - ${prev.length + 1}`,
                                    step: 1,
                                },
                            ]);
                            setUserBtnEnable(true); 
                        }
                        
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
                            <button disabled style={users[index].step===1 ? {backgroundColor: "greenyellow"}: {}}>Step 1 {users[index].step}</button>
                            <button disabled style={users[index].step===2 ? {backgroundColor: "greenyellow"}: {}}>Step 2 {users[index].step}</button>
                            <button disabled style={users[index].step===3 ? {backgroundColor: "greenyellow"}: {}}>Step 3 {users[index].step}</button>
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
                {/*users.every(item => item.step === 3) && <h2>You Won!</h2>*/}
            </div>

        </div>
    );
}