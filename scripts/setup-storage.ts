const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    console.log("Applying Storage Policies...");
    try {
        // Policy for Insert (Uploads)
        await prisma.$executeRawUnsafe(`
            CREATE POLICY "Allow Public Uploads"
            ON storage.objects FOR INSERT
            TO public
            WITH CHECK (bucket_id = 'applications');
        `);
        console.log("✅ 'Allow Public Uploads' policy created.");
    } catch (e: any) {
        if (e.message.includes("already exists")) {
            console.log("ℹ️ Policy 'Allow Public Uploads' already exists.");
        } else {
            console.error("⚠️ Could not create Insert policy:", e.message);
        }
    }

    try {
        // Policy for Select (Downloads/Views) - though 'Public Bucket' setting does this, explicit policy is safer
        await prisma.$executeRawUnsafe(`
          CREATE POLICY "Allow Public Select"
          ON storage.objects FOR SELECT
          TO public
          USING (bucket_id = 'applications');
      `);
        console.log("✅ 'Allow Public Select' policy created.");
    } catch (e: any) {
        if (e.message.includes("already exists")) {
            console.log("ℹ️ Policy 'Allow Public Select' already exists.");
        } else {
            console.error("⚠️ Could not create Select policy:", e.message);
        }
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
