export default function Home() {
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl font-bold text-center my-10">
        Bienvenue sur le système PLM
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Gestion de Projets</h2>
          <p className="text-gray-600">
            Créez et gérez vos projets avec facilité. Suivez leur évolution et gardez une trace de tous les documents associés.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Gestion des BOM</h2>
          <p className="text-gray-600">
            Créez et gérez vos Bills of Materials. Organisez vos composants et suivez leur cycle de vie.
          </p>
        </div>
      </div>
    </div>
  );
}
