import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = props => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const increase = () => {
        dispatch({
            type:"increment"
        });
    }
    const decrease = () => {
        dispatch({
            type:"decrement"
        })
    }
    return (
        <div className={classes["counterBox"]}>
            <div className={classes["counterBox-child"]}>Redux Counter</div>
            <div className={classes["counterBox-child"]}>{counter}</div>
            <div className={classes["counterBox-child"]} >
                <button className={classes["increment"]} onClick={increase}>Increment</button>
                <button className={classes["decrement"]} onClick={decrease}>Increment</button>
            </div>
            <button className={classes["counterBox-child"]}>Toggle Counter</button>
        </div>
    )
}

export default Counter;