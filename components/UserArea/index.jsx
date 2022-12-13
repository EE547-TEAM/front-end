/**
 * This component rendering during the ssr.
 * @param {*} param0 
 */

export default function UserArea({ loginUser }) {

    console.log(loginUser);

    return (
        <div>
            {loginUser.name}
        </div>
    );
}
