import { DummyInput } from "../DummyInput"
/**
 * Representing default input
 * @function
 * @param {string} user
 * @returns {JSX.Element} The rendered component.
 */
export const UserDummyInput = ({user}) => {
    return (
        <div style={{ display: 'flex'}}>
            <div style={{flex: 1, backgroundColor: 'lightblue'}}>
                <DummyInput info="jméno" defVal={user.name}/>
            </div>
            <div style={{flex: 1, backgroundColor: 'lightblue'}}>
                <DummyInput info="příjmení" defVal={user.surname}/>
            </div>
        </div>
    )
}