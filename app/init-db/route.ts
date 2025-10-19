import { CommandExecutorUtils } from "@/lib/command-executor.utils";

export async function GET() {
    try {
        await CommandExecutorUtils.runCommand("cd /app && npx prisma migrate deploy");
        return new Response("Database initialized successfully.", {
            status: 200,
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
            },
        });
    } catch (error) {
        return new Response(`Error during database initialization: ${error}`, {
            status: 500,
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
            },
        });
    }
}