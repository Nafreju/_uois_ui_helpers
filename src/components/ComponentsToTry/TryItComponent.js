
export const TryItComponent = () => {
    return (
        <div>

            <label for="username">Username: (3-16 characters)</label>
            <input name="username" type="text" value="Sasha" pattern="\w{3,16}" required/>
        
            <label for="pin">PIN: (4 digits)</label>
            <input name="pin" type="password" pattern="\d{4,4}" required/>
        </div>
        )
};

