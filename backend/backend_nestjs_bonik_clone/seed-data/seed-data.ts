// Import the Prisma Client
import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

// Create an instance of the Prisma Client
const prisma = new PrismaClient();

// Define the seed function
async function seed() {
  try {
    // Create the category data
    const categoryData = [{ categoryName: 'TV' }, { categoryName: 'Car' }];

    // Insert the category data into the database
    const categoriesRes = await prisma.iCategory.createMany({
      data: categoryData,
    });

    const categories = await prisma.iCategory.findMany();
    const categoriesIds = categories.map((c) => c.categoryId);

    const generateBrands = Array.from({ length: 4 }, () => ({
      name: faker.animal.cow(),
    }));

    const brandRes = await prisma.iBrand.createMany({
      data: generateBrands,
    });

    const brands = await prisma.iBrand.findMany();

    // Create the product data
    const productData = Array.from({ length: 6 }, () => ({
      categoryId: faker.helpers.arrayElement(categoriesIds),
      productName: faker.commerce.productName(),
      price: faker.number.float({ min: 0, max: 40000 }),
      description: faker.commerce.productDescription(),
      rating: faker.number.int({ min: 0, max: 5 }),
      brandId: faker.helpers.arrayElement(brands).brandId,
      createAt: faker.date.anytime(),
      productSoldCount: faker.number.int({ min: 0, max: 40 }),
    }));

    // Insert the product data into the database
    const productsRes = await prisma.iProduct.createMany({
      data: productData,
    });

    const products = await prisma.iProduct.findMany();

    const fakeFlashDeals = Array.from({ length: 4 }, (_, index) => ({
      productId: products[index].productId,
      dealName: faker.commerce.productName(),
      dealPrice: +faker.commerce.price(),
      startDate: faker.date.recent(),
      endDate: faker.date.future(),
    }));

    // Create records using Prisma
    const createdFlashDeals = await prisma.iFlashDeal.createMany({
      data: fakeFlashDeals,
    });

    const shoppingCart = await prisma.iShoppingCart.create({
      data: {
        closedOrder: false,
      },
    });

    // Create a new cart product
    const cartProduct = await prisma.iCartProduct.create({
      data: {
        cartId: shoppingCart.cartId,
        productId: products[0].productId,
        quantity: +faker.random.numeric(),
      },
    });

    console.log('Seed data created successfully:', {
      categoriesRes,
      createdFlashDeals,
      productsRes,
      cartProduct,
      brandRes,
    });
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    // Disconnect the Prisma Client
    await prisma.$disconnect();
  }
}

// Run the seed function
seed();
