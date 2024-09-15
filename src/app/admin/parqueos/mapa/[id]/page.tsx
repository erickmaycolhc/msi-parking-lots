/* 
Since the map was loaded on client side, 
we need to make this component client rendered as well else error occurs
*/
'use client'

import { MapComponent } from "@/components/map/map";
import { useParams, useSearchParams } from "next/navigation";
import { columns, parkings } from "@/data/parking";
import { TypePolygon } from "@/types/map";

const AdminMapa = () => {
    //const router = useParams();
    const { id } = useParams()
    
    const parking: TypePolygon = parkings.find((item) => item.id.toString() == id)

    if(parking) {
        return <MapComponent polygon={parking} />
    } else {
        return (
            <>No se encontro resultado</>
        )
    }

    // return (
    //     <MapComponent />
    // )
}

export default AdminMapa;