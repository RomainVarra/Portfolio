import Error404 from "../components/Error404/Error404";
import style from "../components/Error404/error404.module.css"

function ErrorPage () {
    return (
        <>
    <h1 className={style.Title}>Error 404</h1>
    <Error404/>
        </>
)
}

export default ErrorPage;