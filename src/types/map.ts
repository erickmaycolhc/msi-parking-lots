export interface TypeCoordinate {
    lat: String,
    lng: String,
}
export interface TypeBlocks {
    name?: String,
    cuadras?: TypeCoordinate[],
}
export interface TypePolygon {
    id: String,
    via: String,
    cuadra: String,
    estacionamiento: String,
    blocks?: TypeBlocks[],
}