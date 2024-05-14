import ReusableBtn from "./ReusableBtn"
export default function BtnUsage(){
    return(
        <>
            <h2>Reusable Buttons Example</h2>   
            <ReusableBtn onClick={() => {
                alert("Button 1 Clicked");
            }}>Button 1</ReusableBtn>

            <ReusableBtn onClick={() => {
                alert("Button 2 Clicked");
            }}>Button 2</ReusableBtn>
        </>
    )
}