const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const arjun = await prisma.user.upsert({
    where: { email: "arjunkhetia@gmail.com" },
    update: {},
    create: {
      email: "arjunkhetia@gmail.com",
      name: "Arjun Khetia",
    },
  });
  const pranshu = await prisma.user.upsert({
    where: { email: "pranshu@prisma.io" },
    update: {},
    create: {
      email: "pranshu@prisma.io",
      name: "Pranshu",
    },
  });
  console.log({ arjun, pranshu });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
