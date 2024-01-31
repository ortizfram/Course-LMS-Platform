const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient

async function main() {
    try {
        await database.category.createMany({
            data: [
                {name: "Kundalini"},
                {name: "Mantras"},
                {name: "clases"},
                {name: "Teoria"},
                {name: "Blog"},
            ]
        })
        console.log("Success")
    } catch (error) {
        console.log("Error seeding the db categories",error)
    } finally {
        await database.$disconnect
    }
}

main();