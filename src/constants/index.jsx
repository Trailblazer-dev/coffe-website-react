import sponsorlogo from "../assets/sponsor log.png";
import heroimg from "../assets/hero.png";
import aboutimg from "../assets/about.png";
import feature1 from "../assets/premiumBean.jpg";
import feature2 from "../assets/expert.jpg";
import feature3 from "../assets/source.jpg";
import feature4 from "../assets/flavor.jpg";
export const Links = [
  {
    href: "hero",
    title: "Home",
  },
  {
    href: "aboutus",
    title: "About Us",
  },
  {
    href: "features",
    title: "Features",
  },
  {
    href: "purchase",
    title: "Purchase",
  },
  {
    href: "contact",
    title: "Contact Us",
  },
];
export const hero = {
  title: "Coffee Makes Mood",
  subtitle: '"Indulge in Every Sip: Experience the Richness of Coffee!"',
  image:heroimg
};

export const about ={
    title:"Discover Coffee Borcelle",
    subtitle:"Elevating Your Coffee Experience",
    description1:"At Coffee Borcelle, we're on a mission to redefine your coffee moments. Our carefully curated selection of premium beans, sourced from the world's most renowned coffee regions.",
    description2:"With expert craftsmanship and a commitment to quality, Join us in savoring the art of coffee, one cup at a time.",
    image:aboutimg
}
export const features = {
  title:"Key Features",
  subtitle:"Experience the Best of Coffee Borcelle in Every Cup"
};
export const featuresCard=[
  {
    image:feature1,
    title:"Premium Beans",
    description:"Sourced from the finest coffee regions worldwide, our beans are carefully curated for a perfect taste."
  },
  {
    image:feature2,
    title:"Expert Craftsmanship",
    description:"Our coffee is brewed with passion and precision, ensuring a rich, smooth experience in every cup."
  },
  {
    image:feature3,
    title:"Ethical Sourcing",
    description:"We support sustainable farming and fair trade practices to bring you quality coffee with integrity."
  },
  {
    image:feature4,
    title:"Flavor Variety",
    description:"From bold dark roasts to smooth medium blends, discover a coffee for every mood and moment."
  }
]
export const purchase = {
  title:"Choose Your Coffee Plan",
  subtitle:"Find the Perfect Subscription to Match Your Coffee Needs"
}
export const purchaseCards =[
  {
    title:"Single Cup",
    price:"$5 per cup",
    description:"Perfect for a quick pick-me-up.",
    button:"Order Now"
  },
  {
    title:"Monthly Subscription",
    price:"$25/month",
    description:"Enjoy a fresh brew every day.",
    button:"Subscribe Now"
  },
  {
    title:"Yearly Subscription",
    price:"$250/year",
    description:"Best value for coffee lovers.",
    button:"Get Started"
  }
]
export const sponsor={
    title:"Reviews",
    img:sponsorlogo,
    subtitle:"What other people are saying!"

};
export const sponsorCards=[
    {
        body:'"Indulge in the sublime experience of Coffee Borcelle, where every sip is a journey to flavor paradise. Crafted with precision, our rich blends ignite the senses and redefine coffee appreciation."',
        footer:"@elonmusk"
    },
    {
        body:'"Discover a world of taste with Coffee Brocelle. Each cup is a masterpiece, blending aromas and flavors that dance on your palate. Join us in celebrating coffee at its finest."',
        footer:"@JeffBezos"
    },
    {
        body:'“Welcome to the heart and soul of coffee passion –Coffee Borcelle. Our carefully curated beans are an ode to craftsmanship, brewing a story of perfection in every cup.”',
        footer:"@MrBeast",
    }
]