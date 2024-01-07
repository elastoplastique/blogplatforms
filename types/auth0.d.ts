export type Auth0User = {
    email: string,
    email_verified: boolean,
    name: string,
    nickname: string,
    picture: string,
    sub: string,
    sid: string,
    updated_at: string,
}

export as namespace Auth0;