"use client";

import { motion } from "framer-motion";
import { Check, Zap, Building2, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for playing around and exploring Taiwanish.",
    icon: Sparkles,
    color: "from-zinc-500 to-zinc-600",
    features: [
      "50 generations per day",
      "Basic dictionary access",
      "Top 3 results per generation",
      "Copy & share results",
      "Community support",
    ],
    cta: "Get Started Free",
    variant: "secondary" as const,
    popular: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    description: "For power users who live and breathe phonetic humor.",
    icon: Zap,
    color: "from-primary-600 to-accent-600",
    features: [
      "Unlimited generations",
      "Full dictionary access",
      "Top 10 results per generation",
      "Favorites & history",
      "API access (1,000 req/month)",
      "Priority support",
      "Early access to new features",
    ],
    cta: "Start Pro",
    variant: "default" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For teams building products powered by Taiwanish.ai.",
    icon: Building2,
    color: "from-violet-600 to-purple-700",
    features: [
      "Everything in Pro",
      "Unlimited API requests",
      "Custom models & fine-tuning",
      "SLA guarantee",
      "Dedicated support",
      "On-premise deployment",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    variant: "secondary" as const,
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h1 className="text-5xl font-black text-zinc-900 dark:text-white">
            Simple pricing,{" "}
            <span className="gradient-text">no surprises</span>
          </h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Start for free, upgrade when you need more power.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  "relative p-8 rounded-3xl border transition-all duration-300",
                  plan.popular
                    ? "border-primary-300 bg-gradient-to-b from-primary-50/80 to-accent-50/50 shadow-glow dark:border-primary-700 dark:from-primary-900/20 dark:to-accent-900/10"
                    : "border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-soft dark:border-zinc-800 dark:bg-zinc-900/60"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white text-sm font-semibold shadow-glow">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-5`}>
                  <Icon size={22} className="text-white" />
                </div>

                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                  {plan.name}
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-5xl font-black text-zinc-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-zinc-400 text-sm ml-1">/{plan.period}</span>
                </div>

                <Button
                  className="w-full mb-8"
                  variant={plan.variant}
                  size="lg"
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        size={16}
                        className={cn(
                          "flex-shrink-0 mt-0.5",
                          plan.popular ? "text-primary-500" : "text-emerald-500"
                        )}
                      />
                      <span className="text-zinc-600 dark:text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            Questions? We have answers.
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400">
            Reach us at{" "}
            <a
              href="mailto:hello@taiwanish.ai"
              className="text-primary-600 hover:underline dark:text-primary-400"
            >
              hello@taiwanish.ai
            </a>
          </p>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
