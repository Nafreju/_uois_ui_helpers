import { DummyInput } from "../DummyInput"
/**
 * Representing default input of name and surname filled in
 * @function
 * @param {string} props.user user which name and surname is rendered as readonly input
 * @returns {JSX.Element} Two dummy readonly inputs next to each other
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