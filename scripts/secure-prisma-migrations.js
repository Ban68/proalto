
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Securing _prisma_migrations table...');
    try {
        // Enable RLS
        await prisma.$executeRawUnsafe(`ALTER TABLE "_prisma_migrations" ENABLE ROW LEVEL SECURITY;`);
        console.log('RLS enabled on _prisma_migrations.');

        // Create Policy (Check if exists first to be idempotent-ish or just try/catch)
        try {
            await prisma.$executeRawUnsafe(`
            create policy "Enable all access for service_role"
            on "_prisma_migrations"
            as permissive
            for all
            to service_role
            using (true)
            with check (true);
        `);
            console.log('Policy created for _prisma_migrations.');
        } catch (e) {
            if (e.message.includes('already exists')) {
                console.log('Policy already exists.');
            } else {
                console.error('Error creating policy:', e);
            }
        }

    } catch (e) {
        console.error('Error securing table:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
