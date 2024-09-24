import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

const MyMeals = ({ text, updatingInInput, deleteMeal }) => {
    return (
        <div>
            <p> {text} </p>
            <AiFillEdit onClick={updatingInInput}/>
            <MdDeleteForever onClick={deleteMeal}/>
        </div>
    )
}

export default MyMeals;