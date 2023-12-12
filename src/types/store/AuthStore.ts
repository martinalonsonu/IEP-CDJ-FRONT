import { AuthStatus } from "./AuthStatus"

export type AuthState = {
    token: string,
    user: userType,
    status: AuthStatus,
    setToken: (token: string) => void,
    setProfile: (dataProfile: userType) => void
}

export interface userType {
    id: number;
    type_document: string;
    document: string;
    student_code: string;
    name: string;
    patern_surname: string;
    matern_surname: string;
    sex: string;
    civil_status: string;
    date_birth: string;
    country: string;
    region: string;
    province: string;
    district: string;
    address: string;
    native_language: string;
    discapacity: boolean;
    religion: string;
    dataUser: DataUser;
    iat: number;
    exp: number;
}
export interface DataUser {
    id: number;
    document: string;
    typeDocument: string;
    email: string;
    typeUserId: number;
}
