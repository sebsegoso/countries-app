
export const objectToQueryParams = (params = {}) => {

    if (!Object.keys(params)?.length) return ""

    return new URLSearchParams(params).toString();


}