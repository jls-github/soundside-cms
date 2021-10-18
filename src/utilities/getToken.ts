function token(): string {
    return localStorage.getItem("token") ?? ""
}

export default token