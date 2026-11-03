import { test as base } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

type Fixtures = {
    authToken: string;
};

export const test = base.extend<Fixtures>({
    authToken: async ({ request }, use) => {
        const email = process.env.EMAIL;
        const password = process.env.PASSWORD;

        if (!email || !password) {
            throw new Error("Missing EMAIL or PASSWORD in the environment.");
        }

        const login = await request.post("auth/login", {
            data: { email, password },
        });
        const body: unknown = await login.json();

        const messages =
            typeof body === "object" &&
            body !== null &&
            "mensagens" in body &&
            Array.isArray(body.mensagens)
                ? body.mensagens.filter((message): message is string => typeof message === "string")
                : [];

        if (!login.ok()) {
            const detail = messages.length > 0 ? `: ${messages.join("; ")}` : "";
            throw new Error(`Authentication failed with HTTP ${login.status()}${detail}`);
        }

        const token =
            typeof body === "object" &&
            body !== null &&
            "data" in body &&
            typeof body.data === "object" &&
            body.data !== null &&
            "token" in body.data &&
            typeof body.data.token === "string"
                ? body.data.token
                : undefined;

        if (!token) {
            throw new Error("Authentication response did not contain a JWT token.");
        }

        await use(token);
    },
});

export const expect = test.expect;