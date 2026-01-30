-- Enable RLS on CreditApplication
ALTER TABLE "CreditApplication" ENABLE ROW LEVEL SECURITY;

-- Create policy for service_role on CreditApplication
create policy "Enable all access for service_role"
on "CreditApplication"
as permissive
for all
to service_role
using (true)
with check (true);

