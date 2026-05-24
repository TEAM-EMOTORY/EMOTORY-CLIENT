const SECRET = 0xdeadbeef

export const encodeNodeId = (nodeId: number) => (nodeId ^ SECRET).toString(36)

export const decodeNodeId = (encoded: string) => parseInt(encoded, 36) ^ SECRET
