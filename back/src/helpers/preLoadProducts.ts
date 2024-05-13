import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 11",
    price: 699,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image:
      "https://www.bell.ca/styles/wireless/all_languages/all_regions/catalog_images/large/iphone11_black_lrg3.png",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "MacBook Air",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image:
      "https://static.wixstatic.com/media/bc698a_f87dc0d459dc4c0dbd286c15d0deb035~mv2.webp",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/themes/ms-genosha/assets/img/ipad-pro-4-6/accessories_lrg_2x.png?1665787246675",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch Series 6",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image:
      "https://cdn-ipoint.waugi.com.ar/img/cms/landings-fichas/Watch/Watch%20Series%206/RX-S1_Smart_1_GPS.png",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "AirPods Pro",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "https://goudenimportaciones.com/wp-content/uploads/2023/05/AirPods-Pro-2-png-1.png",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "HomePod mini",
    price: 99,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image:
      "https://purplemobilestore.com/cdn/shop/products/Blue_047d8701-5516-4711-a912-926d0e6ca5f0.png?v=1669186948&width=1445",
    categoryId: 6,
    stock: 10,
  },{
    name: "Samsung Galaxy S22",
    price: 799,
    description: "Discover the Samsung Galaxy S22 and elevate your mobile experience. Features include a stunning AMOLED display, advanced triple camera system, and powerful processor for ultimate performance.",
    image: "https://images.samsung.com/is/image/samsung/p6pim/ar/2202/gallery/ar-galaxy-s22-s901-sm-s901eidlaro-530921549?$650_519_PNG$",
    categoryId: 1,
    stock: 30
  },
  {
    name: "Google Pixel 6",
    price: 599,
    description: "The Google Pixel 6 offers a smart, fast, and secure mobile experience powered by Google's own Tensor chip. With its innovative AI and machine learning, capture the perfect photo every time.",
    image: "https://lh3.googleusercontent.com/9FKlIQ5oW9I2qOCsU23k8WluglsEnaPNQf9ntgq8RBILMMI-zOxSi61DQISoir7SBR82K3Lfoy91ZxLRwOnTy3Gr1DXpx_AFXfY",
    categoryId: 1,
    stock: 25
  },
  {
    name: "Lenovo Yoga 9i",
    price: 1200,
    description: "The Lenovo Yoga 9i convertible laptop combines versatility with luxury, featuring a rotating sound bar with Dolby Atmos, 4K display options, and responsive Intel processors.",
    image: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MjgzMTMxfGltYWdlL3BuZ3xoMDUvaGVlLzE0Mjg2NTc3MTM5NzQyLnBuZ3w2NjEyMzQwMGFmNWQ1MzViMmM5ZjVkNDY2YWE0OGYzNzUzY2Q0MTlmMzVmZWY4ZGRjNmUwYTZjZmZkMzkwOWE3/lenovo-laptops-yoga-9i-14-gen-7-hero.png",
    categoryId: 3,
    stock: 10
  },
  {
    name: "Samsung Galaxy Tab S7",
    price: 650,
    description: "Unleash your productivity with the Samsung Galaxy Tab S7, featuring a vibrant display, S Pen included, and a powerful chipset to handle all your multitasking needs.",
    image: "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-t733nzkraro/gallery/ar-galaxy-tab-s7-fe-t730-392264-sm-t733nzkraro-532939757?$650_519_PNG$",
    categoryId: 2,
    stock: 15
  },
  {
    name: "HP Spectre x360",
    price: 1100,
    description: "The HP Spectre x360 is designed for those who demand versatility. With its 360-degree hinge, you can convert it from a laptop into a tablet effortlessly, while enjoying top-tier performance and security.",
    image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06149709.png",
    categoryId: 3,
    stock: 12
  },
  {
    name: "OnePlus 9 Pro",
    price: 969,
    description: "Experience high-end performance with the OnePlus 9 Pro, featuring Hasselblad camera technology for unparalleled image quality, fast charging, and a smooth 120Hz display.",
    image: "https://imagenes.heraldo.es/files/image_640_auto/uploads/imagenes/2021/06/03/el-oneplus-9-pro-es-el-movil-mas-fluido-del-mundo.png",
    categoryId: 1,
    stock: 20
  },
  {
    name: "ASUS ZenBook Duo",
    price: 999,
    description: "The ASUS ZenBook Duo revolutionizes your workflow with its dual-screen design, featuring a main display and a secondary touchscreen that enhances productivity and multitasking.",
    image: "https://i.ebayimg.com/images/g/qpYAAOSwZUtl5q4X/s-l1600.webp",
    categoryId: 3,
    stock: 8
  },{
    name: "Microsoft Surface Pro 8",
    price: 1100,
    description: "Transform how you work and play with Microsoft Surface Pro 8, which blends the power of a laptop with the flexibility of a tablet, and offers a detachable keyboard for the complete experience.",
    image: "https://aredutech.com/wp-content/uploads/2023/04/Surface-Pro-8-Tab-Only-002.png",
    categoryId: 2,
    stock: 18
  },
  {
    name: "Dell XPS 13",
    price: 950,
    description: "The Dell XPS 13 remains the definitive ultraportable laptop, balancing sleek aesthetics with powerful performance, a minimal bezel InfinityEdge display, and excellent battery life.",
    image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/pdp/laptop-xps-13-9320-pdp-hero-nonoled-sl.psd?fmt=png-alpha&wid=570&hei=400&fit=constrain%2C1&qlt=90",
    categoryId: 3,
    stock: 14
  },
  {
    name: "Google Pixel Tablet",
    price: 749,
    description: "Dive into the new Google Pixel Tablet, perfect for both work and entertainment, featuring a modern design, Google Assistant integration, and seamless Android ecosystem connectivity.",
    image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/GooglePixelTablet.width-1000.format-webp.webp",
    categoryId: 2,
    stock: 20
  }
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
