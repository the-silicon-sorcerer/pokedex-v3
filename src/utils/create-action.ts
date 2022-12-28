interface ActionObject {
    type: string,
    payload: {}
}

export const createAction = (type: string, payload: {}): ActionObject => {
    return { type: type, payload: payload }
}