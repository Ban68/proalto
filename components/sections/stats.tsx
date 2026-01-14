export function Stats() {
    return (
        <section className="bg-[#283e52] py-12 text-white">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
                    <div className="flex flex-col items-center justify-center p-4">
                        <span className="text-5xl font-bold text-[#fec05c] mb-2">72%</span>
                        <span className="text-xl">Renovaciones de créditos</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4">
                        <span className="text-5xl font-bold text-[#fec05c] mb-2">3,802</span>
                        <span className="text-xl">Total créditos otorgados</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
