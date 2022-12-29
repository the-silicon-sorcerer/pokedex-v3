interface ActionObject {
    type: any
    payload: any
}

export const createAction = <T extends ActionObject>(type: T['type'], payload: T['payload']): ActionObject => {
    return { type: type, payload: payload }
}
