import PlyInteraction from "@/pages/Pretreatment/Components/Phenotype/PlyInteraction"
import { useEffect, useState } from "react"

const PlyDetail = (url) => {
  const [plyUrl, setPlyUrl] = useState(null)
  useEffect(() => {
    setPlyUrl(url)
  }, [])
  return (
    <div className="ply_detail">点云详情
      <PlyInteraction
        show={true}
        plyUrl={plyUrl}
        setPlyUrl={setPlyUrl}
        referPheno={{height:0,leaveNum:0,angle:0}}
      />
    </div>
  )
}
export default PlyDetail