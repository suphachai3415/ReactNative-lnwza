// utils/api.ts
const BASE_URL = "https://ckartisan.com/api";

export async function getData(endpoint: string) {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) throw new Error("GET Error " + res.status);
    return res.json();
}

export async function postData(endpoint: string, data: any) {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("POST Error " + res.status);
    return res.json();
}

export async function putData(endpoint: string, data: any) {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("PUT Error " + res.status);
    return res.json();
}

export async function deleteData(endpoint: string) {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) throw new Error("DELETE Error " + res.status);
    return res.json();
}