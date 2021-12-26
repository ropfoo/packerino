export type Credentials = {
    email: string;
    password: string;
};

export interface Auth {
    uid: string;
    email: string | null;
}
