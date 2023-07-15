import { DummyInput } from "../DummyInput"

export const UserDummyInput = ({user}) => {
    return (
        <div style={{ display: 'flex'}}>
            <div style={{flex: 1, backgroundColor: 'lightblue'}}>
                <DummyInput name="jméno" userName={user.name}/>
            </div>
            <div style={{flex: 1, backgroundColor: 'lightblue'}}>
                <DummyInput name="příjmení" userName={user.surname}/>
            </div>
        </div>
    )
}