// Import the Prisma Client
const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');

// Create an instance of the Prisma Client
const prisma = new PrismaClient();

// Define the seed function
async function seed() {
  try {
    // Create the category data
    // const categoryData = [{ categoryName: 'TV' }, { categoryName: 'Car' }];

    // // Insert the category data into the database
    // const categories = await prisma.category.createMany({
    //   data: categoryData,
    // });

    // Create the product data
    // const productData = [
    //   {
    //     categoryId: 1,
    //     productName: 'Samsung QLED 4K TV',
    //     price: 1499.99,
    //     description: 'Experience stunning visuals with this Samsung QLED TV.',
    //     rating: 4.7,
    //   },
    //   {
    //     categoryId: 1,
    //     productName: 'LG OLED 4K TV',
    //     price: 1999.99,
    //     description:
    //       'Enjoy deep blacks and vibrant colors with this LG OLED TV.',
    //     rating: 4.9,
    //   },
    //   {
    //     categoryId: 2,
    //     productName: 'Toyota Camry',
    //     price: 28999.99,
    //     description:
    //       'Reliable and fuel-efficient sedan with advanced safety features.',
    //     rating: 4.6,
    //   },
    //   {
    //     categoryId: 2,
    //     productName: 'Honda CR-V',
    //     price: 32999.99,
    //     description:
    //       'Versatile SUV with spacious interior and great performance.',
    //     rating: 4.8,
    //   },
    // ];

    // // Insert the product data into the database
    // const products = await prisma.product.createMany({
    //   data: productData,
    // });

    // const fakeFlashDeals = Array.from({ length: 4 }, (_, index) => ({
    //   dealId: index,
    //   productId: index + 9,
    //   dealName: faker.commerce.productName(),
    //   dealPrice: +faker.commerce.price(),
    //   startDate: faker.date.recent(),
    //   endDate: faker.date.future(),
    // }));

    // // Create records using Prisma
    // const createdFlashDeals = await prisma.flashDeal.createMany({
    //   data: fakeFlashDeals,
    // });

    // const fakeTopCategories = Array.from({ length: 2 }, (_, index) => ({
    //   categoryId: index + 1,
    //   ranking: faker.datatype.number({ min: 1, max: 10 }),
    // }));

    // // Create records for TopCategory
    // const createdTopCategories = await prisma.topCategory.createMany({
    //   data: fakeTopCategories,
    // });

    // Generate fake data for TopRating
    // const fakeTopRatings = Array.from({ length: 2 }, (_, index) => ({
    //   productId: index + 9,
    //   rating: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
    // }));

    // // Create records for TopRating
    // const createdTopRatings = await prisma.topRating.createMany({
    //   data: fakeTopRatings,
    // });

    const shoppingCart = await prisma.iShoppingCart.create({
      data: {
        closedOrder: false,
      },
    });

    // Create a new cart product
    const cartProduct = await prisma.iCartProduct.create({
      data: {
        cartId: shoppingCart.cartId,
        productId: 9,
        quantity: +faker.random.numeric(),
      },
    });

    console.log('Seed data created successfully:', {
      // createdFlashDeals,
      // products,
      // createdTopCategories,
      // createdTopRatings,
      cartProduct,
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
