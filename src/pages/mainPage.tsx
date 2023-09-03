import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function MainPage() {
    const navigation = useNavigate();
    useEffect(()=> {
        navigation('/search');
    },[])
    

    return (
    <div>
        mainPage
        yourd name service 설명 페이지
        먼저 search 페이지 부터 작업
    </div>
    )
}