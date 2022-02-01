export interface User {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    country: string;
    state: string;
    zip_code: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}