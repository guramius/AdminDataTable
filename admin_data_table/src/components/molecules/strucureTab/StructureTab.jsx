import DeleteButton from "../../atoms/deleteButton/DeleteButton"
import GetData from "../../atoms/getData/GetData"
import UserData from "../../atoms/userData/UserData"

const StructureTab = () => {
    return (
        <>
            <GetData />
            <UserData/>
            <DeleteButton />
        </>
    )
}

export default StructureTab