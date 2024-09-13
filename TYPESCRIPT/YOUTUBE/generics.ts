//S => State
//T => Type
// K => Key
// V => Value
// E => Element

type numOrStr = number | string;
function useState<s extends numOrStr = string>() {
    let state: s

    function getState() {
        return state;
    }

    function setState(newState: s) {
        state = newState;
    }
    return {getState, setState};
}

const newState = useState();

// newState.setState(125);
// console.log(newState.getState());

newState.setState('foo');
console.log(newState.getState());