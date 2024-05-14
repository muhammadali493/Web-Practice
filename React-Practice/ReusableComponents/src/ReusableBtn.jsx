export default function ReusableBtn({onClick, children}){
    return(
        <>
            <button onClick={onClick}>{children}</button>
        </>
    );
}