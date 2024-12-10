import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  // CheckCircle,
  Image,
  Zap,
  Layers,
  Cloud,
} from "lucide-react";
import CodeBlock from "@c/code-block";
import Footer from "@c/footer";
import Header from "@c/header";

const features = [
  {
    name: "Bulk Image Processing",
    description: "Process large batches of images quickly and efficiently.",
    icon: Image,
  },
  {
    name: "Real-Time Optimization",
    description:
      "Optimize images in real-time for faster loading and better user experience.",
    icon: Zap,
  },
  {
    name: "Multiple Format Support",
    description:
      "Support for various image formats including JPEG, PNG, WebP, and more.",
    icon: Layers,
  },
  {
    name: "Cloud Integration",
    description: "Seamlessly integrate with popular cloud storage services.",
    icon: Cloud,
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Sign Up",
    description: "Create an account and get your API key.",
  },
  {
    step: 2,
    title: "Integrate",
    description: "Add our SDK to your project with a single line of code.",
  },
  {
    step: 3,
    title: "Transform",
    description: "Start processing and optimizing your images at scale.",
  },
];

// const plans = [
//   {
//     name: "Basic",
//     price: "$0",
//     description: "For small projects and individual developers",
//     features: [
//       "100,000 transformations/month",
//       "5 GB storage",
//       "Basic support",
//       "API access",
//     ],
//   },
//   {
//     name: "Pro",
//     price: "$49",
//     description: "For growing businesses and teams",
//     features: [
//       "1,000,000 transformations/month",
//       "50 GB storage",
//       "Priority support",
//       "Advanced API features",
//       "Custom domain",
//     ],
//   },
//   {
//     name: "Enterprise",
//     price: "Custom",
//     description: "For large-scale operations and custom needs",
//     features: [
//       "Unlimited transformations",
//       "Unlimited storage",
//       "24/7 premium support",
//       "Dedicated account manager",
//       "Custom integrations",
//       "On-premise deployment option",
//     ],
//   },
// ];

const navigation = {
  features: [
    { name: "Image Processing", href: "/features/processing" },
    { name: "Optimization", href: "/features/optimization" },
    { name: "API Access", href: "/features/api" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/docs/api" },
    { name: "Examples", href: "/docs/examples" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ],
};

const sdkExamples = [
  {
    language: "JavaScript",
    code: `
import { FileFusion } from 'file-fusion-sdk';

const client = new FileFusion('YOUR_API_KEY');

const result = await client.processImage({
  url: 'https://example.com/image.jpg',
  operations: [
    { type: 'resize', width: 800, height: 600 },
    { type: 'format', format: 'webp' },
  ],
});

console.log(result.url);
    `,
  },
  {
    language: "Python",
    code: `
from file_fusion import FileFusion

client = FileFusion('YOUR_API_KEY')

result = client.process_image(
    url='https://example.com/image.jpg',
    operations=[
        {'type': 'resize', 'width': 800, 'height': 600},
        {'type': 'format', 'format': 'webp'},
    ]
)

print(result.url)
    `,
  },
  {
    language: "Go",
    code: `
package main

import (
    "fmt"
    "github.com/file-fusion/sdk-go"
)

func main() {
    client := filefusion.NewClient("YOUR_API_KEY")

    result, err := client.ProcessImage(filefusion.ProcessImageParams{
        URL: "https://example.com/image.jpg",
        Operations: []filefusion.Operation{
            {Type: "resize", Width: 800, Height: 600},
            {Type: "format", Format: "webp"},
        },
    })

    if err != nil {
        panic(err)
    }

    fmt.Println(result.URL)
}
    `,
  },
];

export default function Home() {
  return (
    <div>
      <Header navigation={navigation} />
      <div>
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="pt-32 pb-24 md:pt-40">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center">
                <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white backdrop-blur transition-colors hover:border-white/20">
                  <span className="mr-2">✨</span>
                  Announcing our Series A
                  <ArrowRight className="ml-2 h-4 w-4 text-white/30" />
                </div>
                <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                  Image Processing
                  <br />
                  for developers
                </h1>
                <p className="mt-6 text-lg text-white/60">
                  The best way to optimize and transform images at scale.
                  <br />
                  Built for developers, trusted by enterprises.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-white/90"
                  >
                    Get Started
                  </Button>
                  <Link
                    href="/docs"
                    className="text-sm font-semibold leading-6 text-white/70 hover:text-white"
                  >
                    Documentation <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">
              Powerful Features
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to process images at scale
            </p>
            <p className="mt-6 text-lg leading-8 text-white/60">
              File Fusion provides a comprehensive set of tools to handle all
              your image processing needs, from simple resizing to complex
              transformations.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <feature.icon
                      className="h-5 w-5 flex-none text-blue-400"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-white/60">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">
              How It Works
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get started in minutes
            </p>
            <p className="mt-6 text-lg leading-8 text-white/60">
              File Fusion is designed for developers. Our simple integration
              process gets you up and running quickly.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {howItWorks.map((item) => (
                <div key={item.step} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                      <span className="text-white">{item.step}</span>
                    </div>
                    {item.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-white/60">
                    <p className="flex-auto">{item.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* SDK Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">
              Developer-First
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Integrate with ease
            </p>
            <p className="mt-6 text-lg leading-8 text-white/60">
              Our SDKs make it simple to integrate File Fusion into your
              projects. Choose your preferred language and get started in
              minutes.
            </p>
          </div>
          <div className="mt-16">
            <CodeBlock examples={sdkExamples} />
          </div>
        </div>

        {/* Pricing Section */}
        {/* <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">
              Pricing
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Plans for every scale
            </p>
            <p className="mt-6 text-lg leading-8 text-white/60">
              Choose the perfect plan for your needs. All plans include our core
              features.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="flex flex-col rounded-3xl bg-white/5 p-8 ring-1 ring-white/10"
                >
                  <h3 className="text-lg font-semibold leading-8 text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-white/60">
                    {plan.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-white">
                      {plan.price}
                    </span>
                    {plan.name !== "Enterprise" && (
                      <span className="text-sm font-semibold leading-6 text-white/60">
                        /month
                      </span>
                    )}
                  </p>
                  <Button variant="outline" className="mt-6">
                    {plan.name === "Enterprise" ? "Contact us" : "Get started"}
                  </Button>
                  <ul className="mt-8 space-y-3 text-sm leading-6 text-white/60">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckCircle
                          className="h-6 w-5 flex-none text-blue-400"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Footer */}
        <Footer />

        {/* Gradient Effects */}
        <div className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
