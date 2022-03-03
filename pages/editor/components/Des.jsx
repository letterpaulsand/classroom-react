import React from "react";
import { tify } from "chinese-conv";

export default function Des({setDes, des}) {

    return (
        <div>
            <p className="d-block h2 m-3">補充:</p>
            <textarea className="m-4 p-2" placeholder="記得要帶" onChange={ e=>setDes(tify(e.target.value))} value={des}></textarea>
        </div>

    )
}