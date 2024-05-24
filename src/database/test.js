const Database = require('./db');
const saveOrphanage = require('./saveOrphanage.js')

Database.then(async db => {
    // INSERIR DADOS NA TABELA
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6655874",
        name: "Lar de amor",
        about: "descrição",
        whatsapp: 99999999,
        images: [
            "https://images.unsplash.com/photo-1565744643998-5c196cf891f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNzE2MjAzNTU2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "1"
    })

    // CONSULTAR DADOS NA TABELA
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")

    // CONSULTAR SOMENTE 1 ORFANATO, PELO ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')

    // DELETAR DADO DA TABELA
    // await db.run("DELETE FROM orphanages WHERE id = '4'")
    // await db.run("DELETE FROM orphanages WHERE id = '5'")
})