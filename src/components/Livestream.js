import React, { useRef, useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const style={"width":"100%", "height": "100%", "position": "absolute", "left":"0px", top:"0px", overflow:"hidden"}

function Livestream() {

    const { accessToken } = useParams()

    const [tokenValid, setTokenValid] = useState(false)
    const [videoId, setVideoId] = useState("x8hqgwl")

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:7000/access?accessToken=${accessToken}`)
        .then(res => res.json())
        .then(data => {
            const dt = data[0] ? data[0] :{}
            if(dt.serverstate === "200") {
                setTokenValid(true)
                setVideoId(dt.videoId)
            } else {
                navigate("/invalidaccess")
            }
        })
    }, [])

    const parentLivestreamDiv = useRef()

    return (
        <div ref={parentLivestreamDiv} className="livestream">
            {
                tokenValid
                ? <iframe style={style} type="text/html" src={`https://www.dailymotion.com/embed/video/${videoId}?autoplay=1`} width="100%" height="100%" allowFullScreen title="Dailymotion Video Player" allow="autoplay"> </iframe>
                : null
            }
        </div>
    )
}

export default Livestream;