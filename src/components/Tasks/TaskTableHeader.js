

export const TaskTableHeader = ({onClickAddTask, user}) => {
    return (
        <thead className="thead">
        <tr>
            <th scope="col" style={{color:"blue"}}>{user?.name} {user?.surname}</th>

            <th scope="col" >
                <button type="button" className="btn btn-outline-success btn-sm" onClick={onClickAddTask}>přidej úkol</button>
                <span style={{"marginRight":"10px"}} />
                název
                </th>

            <th scope="col">datum zadání</th>
            <th scope="col">datum odevzdání</th>
            <th scope="col">popis</th>
            <th scope="col">detailní popis</th>
            <th scope="col">odkaz</th>
        </tr>
    </thead>
    )
}