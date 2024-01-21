import style from "../css/MainContent.module.css"
import Advertisement from "./Advertisement"
import SubContent from "./SubContent"
const MainContent = () => {
    return(
        <div className={style.mainContentStyle}>
            {/* three subcontent in a box and an advertisement below*/}
            <div className={style.mainContentThreeSubContentHolder}>
                <SubContent/>
                <SubContent/>
                <SubContent/>
            </div>
            <Advertisement/>
        </div>
    )
}
export default MainContent